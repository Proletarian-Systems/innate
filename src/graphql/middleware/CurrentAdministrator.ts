import type { MiddlewareFn } from 'type-graphql'
import type { Context } from '../../types/Context'

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
export const CurrentAdministrator: MiddlewareFn<Context> = async (
  { context },
  next,
) => {
  const { administratorId, prisma } = context

  if (!administratorId) {
    throw new Error(
      'Implementation error: @Authorized decorator must precede @UseMiddleware(CurrentAdministrator)',
    )
  }

  const administrator =
    (await prisma.administrator.findUnique({
      where: {
        id: administratorId,
      },
    })) ?? undefined

  context.administrator = administrator

  return next()
}
