const express = require("express");
const cors = require("cors");
const app = express();
const todosRef = require("./config");
app.use(express.json());
app.use(cors());



// GET /todos - Get all available todos
app.get("/", async (req, res) => {
  try {
    const snapshot = await todosRef.get();
    const todos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).send({ error: "Failed to fetch todos" });
  }
});

// POST /todos - Add a new todo
app.post("/todos", async (req, res) => {
  try {
    const data = req.body;
    const docRef = await todosRef.add(data);
    res.send({ id: docRef.id, ...data });
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).send({ error: "Failed to add todo" });
  }
});


app.listen(4000, () => console.log("Up & RUnning *4000"));
