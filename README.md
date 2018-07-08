# TL;DR

Retry promises at most n times

## How to use

```js
import retryUntil from '@libshin/retry-until';

// retryUntil(fn: () => Promise, maxIterate = 10, timeout = 1000) => Promise
retryUntil(fn, 5, 500).then(...)
// With run the function fn and if it fails, rerun it at most 5 times with 500ms interval between two calls
```
