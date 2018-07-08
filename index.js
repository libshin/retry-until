/**
 * If function fn fails (even if it's a promise), retries it at most maxIterate times
 * @param {Function} fn
 * @param {number} maxIterate
 * @param {number} timeout
 * @returns {Promise}
 */
const retryUntil = (fn, maxIterate = 10, timeout = 1000) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(await Promise.resolve(fn()));
    } catch (error) {
      if (maxIterate > 1) {
        setTimeout(() => {
          resolve(retryUntil(fn, maxIterate - 1, timeout));
        }, timeout);
      } else {
        console.error(fn.toString());
        reject(error);
      }
    }
  });

export default retryUntil;
