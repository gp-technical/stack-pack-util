import winston from 'winston'
import errorUtil from './error'
import util from 'util'

let init = {}

if (process.env.API_LOGENTRIES_TOKEN) {
  require('le_node')
  init = (token = process.env.API_LOGENTRIES_TOKEN) =>
    winston.add(winston.transports.Logentries, { token: process.env.API_LOGENTRIES_TOKEN })
}

const error = (inner, msg, opts = { depth: Infinity }) => {
  const err = errorUtil.create(inner, msg)
  winston.error(util.inspect(err, opts))
  return err
}

const logger = () => winston

export default { init, logger, error }
