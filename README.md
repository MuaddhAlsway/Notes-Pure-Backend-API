# Notes API

A simple REST API for managing notes, built with **Node.js** and **Express**.

---

## Project Structure

```
NotesFolder/
├── data/
│   └── notes.js          # In-memory notes data store
├── routes/
│   └── notes.router.js   # Express router with CRUD endpoints
├── server.js             # App entry point
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/notes-api.git
cd notes-api
```

2. Install dependencies:

```bash
npm install
```

### Running the Server

```bash
node server.js
```

Or using the npm start script:

```bash
npm start
```

The server will start at **http://localhost:3000**

---

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint      | Description          |
|--------|---------------|----------------------|
| GET    | `/`           | Health check         |
| GET    | `/notes`      | Get all notes        |
| GET    | `/notes/:id`  | Get a note by ID     |
| POST   | `/notes`      | Create a new note    |
| PUT    | `/notes/:id`  | Update a note by ID  |
| DELETE | `/notes/:id`  | Delete a note by ID  |

---

## Request & Response Examples

### GET /notes
```json
[
  { "id": 1, "title": "First Note", "content": "This is the first note." },
  { "id": 2, "title": "Second Note", "content": "This is the second note." }
]
```

### GET /notes/1
```json
{ "id": 1, "title": "First Note", "content": "This is the first note." }
```

### POST /notes
**Request Body:**
```json
{
  "title": "My New Note",
  "content": "Some content here"
}
```
**Response (201):**
```json
{ "id": 3, "title": "My New Note", "content": "Some content here" }
```

### PUT /notes/1
**Request Body:**
```json
{
  "title": "Updated Title"
}
```
**Response:**
```json
{ "id": 1, "title": "Updated Title", "content": "This is the first note." }
```

### DELETE /notes/1
```json
{ "message": "Note deleted", "note": { "id": 1, "title": "First Note", "content": "This is the first note." } }
```

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express v5
- **Data Storage:** In-memory array (no database)

---

## Notes

> Data is stored in memory and will reset every time the server restarts. To persist data, consider integrating a database like MongoDB or SQLite.

---

## License

ISC
