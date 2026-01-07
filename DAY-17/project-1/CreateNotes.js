const console = require("console");
const fs = require("fs");

const content = {
  id: 1,
  title: "Node Notes",
  content: "Learned fs module",
  createdAt: new Date().toISOString()
};


async function getNotes() {
  try {
    const data = await fs.readFile(FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      return []; // first run, file not created yet
    }
    throw err;
  }
}

async function addNote(note) {
  const notes = await getNotes();
  notes.push(note);
  await fs.writeFile(FILE, JSON.stringify(notes, null, 2));
  console.log("Note added");
}

// addNote(content);

function deleteNotes(index) {
  const notes = getNotes();

  if (index < 0 || index >= notes.length) {
    console.log("Invalid index");
    return;
  }

  notes.splice(index, 1);

  fs.writeFileSync("notes.json", JSON.stringify(notes, null, 2));
}

const read1 = getNotes();
console.log(read1);
deleteNotes(1);

const read2 = getNotes();
console.log(read2);


(async () => {
  await addNote({
    title: "Node FS",
    content: "Learned async fs module",
    createdAt: new Date().toISOString()
  });

  const notes = await getNotes();
  console.log(notes);

  await deleteNote(0);
})();




// function addNote(note) {
//   fs.readFile("notes.json", "utf-8", (err, data) => {
//     let notes = [];

//     if (!err && data) {
//       notes = JSON.parse(data);
//     }

//     notes.push(note);

//     fs.writeFile("notes.json", JSON.stringify(notes,null,2), (err) => {
//       if (err) {
//         console.error("Failed to save note:", err.message);
//         return;
//       }
//       console.log("Note saved successfully");
//     });
//   });
// }
