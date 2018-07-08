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

module.exports = retryUntil;
