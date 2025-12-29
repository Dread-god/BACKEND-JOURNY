function retry(fn, attempts) {
     return new Promise((resolve, reject) => {
          function attempt(count) {
               fn()
                    .then(resolve)
                    .catch(err => {
                         if (count === 0) reject(err);
                         else attempt(count - 1);
                    });
          }
          attempt(attempts);
     });
}

function unstable() {
     return new Promise((resolve, reject) => {
          Math.random() > 0.7 ? resolve("Success") : reject("Fail");
     });
}

retry(unstable, 3)
     .then(console.log)
     .catch(console.error);
