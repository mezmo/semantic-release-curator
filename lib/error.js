import {PACKAGE_NAME} from './constants.js'

class CuratorError extends Error {
  constructor(code, message, details, cause) {
    super(message, cause ? {cause} : undefined)
    this.name = 'SemanticReleaseError'
    // What semantic-release actually branches on. Without it the run prints a raw
    // object dump instead of the code, message and details below, and the `fail`
    // lifecycle never runs.
    this.semanticRelease = true
    this.code = code
    this.details = details || `See the ${PACKAGE_NAME} README for configuration details.`
  }
}

export {CuratorError}
