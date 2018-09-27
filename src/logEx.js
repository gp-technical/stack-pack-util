import winston from 'winston'
import util from 'util'

winston.add(winston.transports.Logentries, { token: process.env.API_LOGENTRIES_TOKEN })

const throwUp = (inner, msg) => {
  const err = new Error(`An error has occurred whilst ${msg}`)
  err.inner = inner
  throw err
}

const log = err => {
  winston.error(util.inspect(err))
}

export default { throwUp, log }
