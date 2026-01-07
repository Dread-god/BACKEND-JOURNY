# DAY-17 — Node.js Modules & FS Practice

## Overview
Day 17 focuses on understanding:
- CommonJS modules
- Node.js file system (`fs`)
- Async/await with real file persistence

---

## 📂 Module Folder

### Purpose
Learn how Node.js modules work using `module.exports` and `require`.

### Files
- `Math.js` — exports arithmetic functions
- `calculation.js` — imports and uses Math module

### Concepts Covered
- CommonJS
- Module caching
- Exporting multiple functions

---

## 📂 project-1 (Notes App)

### Purpose
Build a real backend-style notes system using filesystem storage.

### Features
- Add notes
- Read notes
- Delete notes
- Auto-handle missing files (`ENOENT`)

### Concepts Covered
- fs.promises
- Async/Await
- JSON persistence
- Error handling

---

## Why This Day Matters
- Teaches **how Node actually runs code**
- Bridges JS theory → backend reality
- Foundation for Express, APIs, databases

---

## How to Run

```bash
node Module/calculation.js
node project-1/notes.js
