# TL;DR

Retry promises at most n times

## How to use

```js
import retryUntil from '@libshin/retry-until';

// retryUntil(fn: () => Promise, maxIterate = 10, timeout = 1000) => Promise
retryUntil(fn, 5, 500).then(...)
```

With run the function fn and if it fails, rerun it at most 5 times with 500ms interval between two calls.

## Examples

### With classic function

```js
import retryUntil from '@libshin/retry-until';

let i = 0
const fn = () => {
  if (i++ !== 2) {
    console.log(i, false)
    throw new Error(false)
  }
    console.log(i, true)
    return true
}

retryUntil(fn, 10, 1000).then(() => console.log('done'))

> 1 false
> 2 false
> 3 true
> done
```

### With Promises

```js
import retryUntil from '@libshin/retry-until';

let i = 0
const fn = () => new Promise((res, rej) => {
  if (i++ !== 2) {
    console.warn(i, false)
    rej(false)
  } else {
    console.log(i, true)
    res(true)
  }
})

retryUntil(fn, 10, 1000).then(() => console.log('done'))

> 1 false
> 2 false
> 3 true
> done
```
