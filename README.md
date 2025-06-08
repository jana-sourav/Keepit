# Keepit

Keepit is a full-stack note-taking app inspired by Google Keep, allowing users to create, view, and delete notes seamlessly. Built with the MERN (MongoDB, Express, React, Node.js) stack, this project demonstrates practical use of React for the frontend and Node.js with Express for the backend, along with MongoDB for data persistence.

---

## Features

✅ Create notes with a title and content  
✅ Expandable text area for a smooth UX  
✅ Delete notes when needed  
✅ Responsive and clean design   
✅ Data is stored in MongoDB and persists on refresh  

---

## Project Structure

```
my-app/
├── backend/
│   ├── models/
│   │   └── Note.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.jsx
│   │   │   ├── CreateArea.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Note.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── index.js
│   │   └── style.css
│   ├── package.json
│   ├── package-lock.json
│   └── .env
├── .gitignore
├── README.md
└── package-lock.json
```

---

## Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/jana-sourav/Keepit.git
cd keepit
```

### 2️⃣ Install backend dependencies

```bash
cd backend
npm install
```

### 3️⃣ Set up environment variables

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## Running the app

### 🚀 Start the backend server

```bash
cd backend
npm start
```

The backend will run on: [http://localhost:5000](http://localhost:5000)

### ⚛️ Start the React frontend

```bash
cd ../frontend
npm start
```

The frontend will run on: [http://localhost:3000](http://localhost:3000)

---

## Deployment

You can deploy the frontend to Vercel or Netlify and the backend to platforms like Render or Heroku.  
Remember to update your `MONGO_URI` and any other environment-specific settings in `.env`.

---

## Technologies Used

- **Frontend**: React, Material-UI Icons, Axios  
- **Backend**: Express, MongoDB, Mongoose, dotenv  

---

## License

This project is licensed under the [MIT License](LICENSE).

---

**Happy coding! 🚀**
