function delay(ms) {
     return new Promise((resolve) => {
          setTimeout(resolve, ms);

     })
}

function getUser() {
     delay(2000)
          .then(() => {
               return fetch("https://jsonplaceholder.typicode.com/users");
          })
          .then((response) => {
               if (!(response.ok)) {
                    throw new Error("Response not found");

               }
               return response.json();
          })
          .then((data) => {
               const Email = data.filter((users) => {
                    return users.email.endsWith(".org");
               })
               console.log(Email);
               return data;
          })
          .then((data) => {
               console.table(data, ["name", "email"])
          })
          .catch((error) => {
               console.error(error.message);
          })
          .finally(() => {
               console.log("Done");
          })
}

getUser();

