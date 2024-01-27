import { sign } from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { InputValidator } from '../utility/InputValidator'
import { User } from '../../generated/type-graphql'
import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'

import type { PrismaClient } from '@prisma/client'
import type { Context } from '../../types/Context'

@Resolver()
export abstract class SendUserConfirmationEmailResolver {
  @Mutation(() => Boolean, { nullable: false })
  async sendUserConfirmationEmail(
    @Arg('email', {
      nullable: false,
      description: 'Email address',
      validate: true,
    })
    email: string,

    @Ctx() context: Context,
  ): Promise<boolean> {
    return await SendUserConfirmationEmailResolver.sendUserConfirmationEmail(
      email,
      context,
    )
  }

  public static async sendUserConfirmationEmail(
    email: string,
    { request, prisma }: Context,
  ): Promise<boolean | never> {
    InputValidator.validateEmail(email, request)

    const { id, emailIsVerified } =
      await SendUserConfirmationEmailResolver.getUser(prisma, email)

    if (emailIsVerified) return true

    const token = await SendUserConfirmationEmailResolver.issueToken(id, prisma)

    await this.sendConfirmationEmail(email, token)

    return true
  }

  private static async sendConfirmationEmail(
    email: string,
    token: string,
  ): Promise<void> | never {
    try {
      const message = {
        to: email,
        hideWarnings: false,
        templateId: 'd-dea8373d1d144972b19bd299156f8064',
        from: {
          email: 'jefferydreynolds@gmail.com',
          name: 'Joist',
        },
        dynamicTemplateData: {
          url: `${process.env
            .CORS_ORIGIN!}/confirm-user-callback?token=${token}&email=${encodeURIComponent(
            email,
          )}`,
        },
      }
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      /* c8 ignore start */
      if (process.env.NODE_ENV !== 'test') {
        await sgMail.send(message)
      }
    } catch (error: any) {
      console.error(error)
      throw new ErrorWithProps('An unknown error occurred')
    }
    /* c8 ignore stop */
  }

  private static async issueToken(
    userId: string,
    prisma: PrismaClient,
  ): Promise<string> {
    const token = sign({ id: userId }, process.env.TOKEN_SECRET, {
      expiresIn: 60 * 5, // 5 minutes
    })

    /**
     * Make token single-use by saving the token value to the user, allowing it to checked and deleted after use
     */
    await prisma.administrator.update({
      where: {
        id: userId,
      },
      data: {
        magicLinkToken: token,
      },
    })

    return token
  }

  private static async getUser(
    prisma: PrismaClient,
    email: string,
  ): Promise<User> | never {
    const user = await prisma.administrator.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new ErrorWithProps('Unable to find user with provided credentials.')
    }

    return user
  }
}
