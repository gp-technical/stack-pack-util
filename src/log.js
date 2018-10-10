import winston from 'winston'
import util from 'util'
import 'le_node' // Needed to make winston work with Logentries

winston.add(winston.transports.Logentries, { token: process.env.API_LOGENTRIES_TOKEN })

const error = (inner, msg, opts = {}) => {
  const err = new Error(msg)
  err.inner = inner
  winston.error(util.inspect(err, opts))
  return err
}

const logger = () => winston

export default { error, logger }
