function delay() {
     let ms = Math.floor(Math.random() * 1000) + 1;

     if (!(ms <= 300 && ms >= 800)) {
          if (ms < 300) {
               ms = ms + 300;
          }
          else if (ms > 800) {
               ms = ms - 200;
          }
     }


     return new Promise((resolve, reject) => {
          setTimeout(resolve, ms);

     })
}

async function asyncfunc() {

     console.log("Wait....");
     try {
          for (let i = 0; i <= 100; i += 5) {
               if (i > 70) {
                    throw new Error("Download failed at 70%");
               }
               await delay(i);
               console.log(`Downloading: ${i}%`);

          }
     } catch (error) {
          console.error(error.message);
     }

}
asyncfunc();