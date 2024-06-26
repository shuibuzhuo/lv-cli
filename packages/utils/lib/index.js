import log from './log.js'
import isDebug from './isDebug.js'
import { makeInput } from './inquirer.js'

function printErrorLog(e, type) {
  if (isDebug()) {
    log.error(type, e);
  } else {
    log.error(type, e.message);
  }
}

export {
  log,
  printErrorLog,
  makeInput
}
