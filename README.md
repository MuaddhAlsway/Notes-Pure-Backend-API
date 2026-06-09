# 📝 Notes API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/REST_API-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
</p>

---

## 🚀 Overview

**Notes API** is a lightweight backend application that provides full CRUD operations for managing notes, built with Node.js and Express.

---

## ✨ Features

- ✅ Create notes
- ✅ Retrieve all notes
- ✅ Retrieve a single note
- ✅ Update existing notes
- ✅ Delete notes
- ✅ RESTful API architecture
- ✅ Express Router implementation

---

## 📁 Project Structure

```
NotesFolder/
├── data/
│   └── notes.js          # In-memory data store
├── routes/
│   └── notes.router.js   # CRUD route handlers
├── server.js             # App entry point
├── package.json
└── README.md
```

---

## ⚙️ Installation

**Clone Repository**
```bash
git clone https://github.com/MuaddhAlsway/notes-api.git
cd notes-api
```

**Install Dependencies**
```bash
npm install
```

---

## ▶️ Run the Server

Using Node.js:
```bash
node server.js
```

Or using npm:
```bash
npm start
```

Server URL: **http://localhost:3000**

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get note by ID |
| POST | `/notes` | Create note |
| PUT | `/notes/:id` | Update note |
| DELETE | `/notes/:id` | Delete note |

---

## 📤 Example Requests

### Create Note
```http
POST /notes
Content-Type: application/json
```
```json
{
  "title": "My New Note",
  "content": "Learning Node.js and Express"
}
```

**Response `201`**
```json
{
  "id": 3,
  "title": "My New Note",
  "content": "Learning Node.js and Express"
}
```

### Get All Notes
```http
GET /notes
```
**Response `200`**
```json
[
  { "id": 1, "title": "First Note", "content": "This is the first note." },
  { "id": 2, "title": "Second Note", "content": "This is the second note." }
]
```

### Update Note
```http
PUT /notes/1
Content-Type: application/json
```
```json
{
  "title": "Updated Title"
}
```

### Delete Note
```http
DELETE /notes/1
```
**Response `200`**
```json
{
  "message": "Note deleted",
  "note": { "id": 1, "title": "First Note", "content": "This is the first note." }
}
```

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript (ES6)
- **Architecture:** REST API

---

## 📚 Learning Objectives

This project was built to practice:

- Express Routing
- Middleware
- CRUD Operations
- RESTful API Design
- Project Structure Organization
- Backend Development Fundamentals

---

## ⚠️ Notes

> This project uses an **in-memory data store** — all data resets when the server restarts.

**Future improvements:**
- [ ] File System Persistence (`fs`)
- [ ] MongoDB Integration
- [ ] Authentication & Authorization
- [ ] Input Validation
- [ ] Error Handling Middleware

---

## 👨‍💻 Developer

**Muaadh Alsway**  
Front-End Developer & Aspiring Backend Engineer

<p>
  <a href="https://www.linkedin.com/in/muaddh-alsway/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://mustudiolab-main.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
  <a href="https://github.com/MuaddhAlsway">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://app.notion.com/p/Simple-Notes-API-Express-CRUD-379e97a262dc8023a834f354053c9c3f?source=copy_link">
    <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" />
  </a>
</p>

---

## 📄 License

[ISC](https://opensource.org/licenses/ISC)
