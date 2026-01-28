const express = require("express");
const app = express();

const notesRouter = require("./routes/notes");

app.use("/notes", notesRouter);

app.listen(8000, () => console.log("Server running"));
