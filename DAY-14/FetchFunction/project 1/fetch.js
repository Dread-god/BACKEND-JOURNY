function delay(ms) {
     return new Promise((resolve) => {
          setTimeout(resolve, ms);

     })
}

async function getUser(id) {
     try {
          console.log("Loading.....")
          await delay(2000);
          const response = await fetch("https://jsonplaceholder.typicode.com/users")
          if (!response.ok) {
               throw new Error("Fetch not done");
          }
          const data = await response.json();
          const found = data.find((users) => users.id === id);

          if (!(found)) {
               throw new Error("User not found");
          }

          const { name, email } = found;
          console.log(name);
          console.log(email);

     } catch (error) {
          console.error(error.message);
     }
}

getUser(5);

