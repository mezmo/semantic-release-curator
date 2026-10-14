import {test} from 'tap'

import {CuratorError} from '../../lib/error.js'

test('CuratorError carries the flag semantic-release branches on', async (t) => {
  // semantic-release checks `error.semanticRelease`, not the class name. Without it
  // the run prints a raw object dump instead of the code, message and details, and
  // the `fail` lifecycle never runs.
  const err = new CuratorError('ENOAPIKEY', 'No key.', 'Set one.')

  t.equal(err.semanticRelease, true)
  t.equal(err.code, 'ENOAPIKEY')
  t.equal(err.message, 'No key.')
  t.equal(err.details, 'Set one.')
})

test('CuratorError supplies details when none are given', async (t) => {
  t.match(new CuratorError('ECODE', 'Broken.').details, /README/)
})
