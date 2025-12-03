const users = [
     { id: 1, username: "vedant_th", age: 18 },
     { id: 2, username: "coder_boy", age: 21 },
     { id: 3, username: "night_wolf", age: 19 },
     { id: 4, username: "dev_master", age: 22 },
     { id: 5, username: "alpha_king", age: 20 }
];


const name = users.map((firstname) => { return firstname.username })

console.log(name);