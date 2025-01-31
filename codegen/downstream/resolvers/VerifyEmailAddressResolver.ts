import { GraphQLError } from 'graphql'
import { timingSafeEqual } from 'crypto'
import type { PrismaClient } from '@prisma/client'
import { type Context, InputValidator } from '@shared' // won't resolve until copied to destination
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { User } from '../../../generated/type-graphql' // won't resolve until copied to destination

@Resolver()
export abstract class VerifyEmailAddressResolver {
  @Mutation(() => User, { nullable: false })
  async verifyEmailAddress(
    @Arg('email', {
      nullable: false,
      description: 'The email address to verify',
      validate: true,
    })
    email: string,

    @Arg('token', {
      nullable: false,
      description:
        'The JWT encoded for use in the email address confirmation email',
      validate: true,
    })
    token: string,

    @Ctx() { prisma, request }: Context,
  ): Promise<User> {
    const decodedEmail = decodeURIComponent(email)

    /**
     * Format validation
     */

    InputValidator.validateEmail(decodedEmail, request)
    const tokenPayload = InputValidator.verifyJWT(token, request)

    const userToUpdate = await prisma.user.findUnique({
      where: {
        id: tokenPayload.id,
      },
    })

    try {
      this.validateInput(userToUpdate, token, decodedEmail)
      const user = await this.updateUser(tokenPayload, prisma)
      await this.invalidateSingleUseToken(user, prisma)
      return user
    } catch (error: any) {
      /**
       * If a user can be identified, ensure they can only use this
       * mutation once before going back and having to reissue
       * themselves another token.
       */
      if (userToUpdate) this.invalidateSingleUseToken(userToUpdate, prisma)

      throw new GraphQLError(error.message)
    }
  }

  private validateInput(
    userToUpdate: User | null,
    token: string,
    email: string,
  ): void | never {
    if (!userToUpdate) {
      throw new Error(
        `Unable to find user specified in magic link. Was the user deleted recently?`,
      )
    }

    if (!userToUpdate.magicLinkToken) {
      throw new Error('Token in magic link was used already')
    }

    if (userToUpdate.email !== email) {
      throw new Error(
        'User from the provided token and email address do not match.',
      )
    }

    if (
      // Timing-safe comparison requires equal byte lengths
      Buffer.from(token).length !==
        Buffer.from(userToUpdate.magicLinkToken).length ||
      !timingSafeEqual(
        Buffer.from(token),
        Buffer.from(userToUpdate.magicLinkToken),
      )
    ) {
      throw new Error(
        'Token in magic link does not match the one that was most recently issued',
      )
    }
  }

  private async invalidateSingleUseToken(
    user: User,
    prisma: PrismaClient,
  ): Promise<void> {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        magicLinkToken: null,
      },
    })
  }

  /**
   *
   * @param tokenPayload
   * @param email
   * @param prisma
   *
   * @description Ensure the user from the email address arg and the token
   * payload is one and the same.
   */
  private async updateUser(
    tokenPayload: any,
    prisma: PrismaClient,
  ): Promise<User> {
    return await prisma.user.update({
      where: {
        id: tokenPayload.id,
      },
      data: {
        verified: true,
        magicLinkToken: null,
      },
    })
  }
}
