function starve() {
     Promise.resolve().then(starve);
}

setTimeout(() => {
     console.log("This will never run");
}, 0);

starve();
