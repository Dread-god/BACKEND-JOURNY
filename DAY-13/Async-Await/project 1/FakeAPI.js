function func1() {
     return new Promise((resolve, reject) => {
          setTimeout(() => {

               const random = Math.floor(Math.random() * 10) + 1;

               if (random > 5) {
                    resolve([
                         { id: 1, name: "Vedant" },
                         { id: 2, name: "Unknown" }
                    ]);
               } else {
                    reject("Request error");
               }

          }, 2000);
     });
}

async function asyncfunc() {
     try {
          const result = await func1();
          console.log(result);
     } catch (error) {
          console.log(error);
     } finally {
          console.log("Done");
     }
}

asyncfunc();
