import { GraphQLError } from 'graphql'
import type { Context } from '@shared/types'
import type { MiddlewareFn } from 'type-graphql'

/**
 * MUST BE PRECEDED BY @Authorized()
 *
 * This functionality is split out from the @Authorized() decorator because it
 * incurs additional latency.
 *
 * If a request comes in with an access token and the resolver requires no
 * role-based access control checks, there is no need to hit the database to
 * identify the user. Rather, this middleware is intended for resolvers that
 * require operations associated with the requesting user, and adds the
 * requesting User object to the context querying the database.
 *
 * @param Context
 * @param next
 */
export const CurrentUser: MiddlewareFn<Context> = async ({ context }, next) => {
  const { userId, prisma } = context

  if (!userId) {
    throw new GraphQLError(
      'Development implementation error: @Authorized decorator must precede @UseMiddleware(CurrentUser)',
    )
  }

  const user =
    (await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })) ?? undefined

  context.user = user

  return next()
}
