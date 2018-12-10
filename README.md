# stack-pack-util

```
yarn add @gp-technical/stack-pack-util
```

Utilities to be available across Stack apps. Currently only usable in the api since the logging was moved in here.

When handling errors in the API apps should usually wrap functionality within
`try/catch` blocks. Errors should be caught and rethrown as:

```
import { error } from '@gp-technical/stack-pack-util'

try {
  do stuff that might throw
} catch (err) {
  throw error.create(err, 'Error when doing stuff')
}
```

The outer most block should log but this will usually be done within the Stack framework itself as most user code is invoked from either an initialiser or a processor and these are invoked from the framework.
