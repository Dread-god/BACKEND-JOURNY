function unreliableTask() {
     return new Promise((resolve, reject) => {
          const num = Math.floor(Math.random() * 10) + 1;

          setTimeout(() => {
               if (num > 5) {
                    resolve(num);
               } else {
                    reject(num);
               }
          }, 500);
     });
}

function retry(taskFn, attempts) {
     return new Promise((resolve, reject) => {
          function attempt(remaining) {
               taskFn()
                    .then(resolve)
                    .catch((err) => {
                         if (remaining === 1) {
                              reject(err);
                         } else {
                              console.log("Retrying... failed with:", err);
                              attempt(remaining - 1);
                         }
                    });
          }

          attempt(attempts);
     });
}

retry(unreliableTask, 3)
     .then((value) => {
          console.log("Success:", value);
     })
     .catch((err) => {
          console.log("Failed after retries:", err);
     });
