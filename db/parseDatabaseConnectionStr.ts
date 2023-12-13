import { env } from '../utils/verifyEnv'

export type DatabaseConnection = {
  host: string
  port: number
  protocol: string
  username: string
  password: string
  databaseName: string
}

const parseDatabaseConnectionStr = () => {
  const memoCache: {
    [key: string]: DatabaseConnection
  } = {}

  return function (connectionStr: string): DatabaseConnection {
    if (memoCache[connectionStr]) return memoCache[connectionStr]

    const url = new URL(connectionStr)

    const connection: DatabaseConnection = {
      host: url.hostname,
      username: url.username,
      password: url.password,
      port: parseInt(url.port),
      protocol: url.protocol.replace(':', ''),
      databaseName: url.pathname.replace('/', ''),
    }

    return connection
  }
}

const memoizedParseDatabaseConnectionString = parseDatabaseConnectionStr()

export const databaseConnection = memoizedParseDatabaseConnectionString(
  env.DATABASE_URL,
)
