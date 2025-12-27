function delay(ms) {
     ms = ms * 1000;

     return new Promise((resolve) => {
          setTimeout(resolve, ms);
     })
}

async function asyncfunc(repet) {
     for (let i = 0; i < repet; i++) {
          try {
               console.log("Red");
               console.log("wait....");
               await delay(3)

               console.log("Yellow");
               console.log("wait....");
               await delay(1)

               console.log("Green");
               console.log("wait....");
               await delay(2)
          }
          finally {
               console.log(`${i + 1} Times done`)
          }
     }

}

asyncfunc(2);
