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
    const newTodo = { id: docRef.id, ...data };
    await docRef.update({ id: docRef.id }); // Update the document with the generated ID
    res.send(newTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).send({ error: "Failed to add todo" });
  }
});


app.put("/todos/:todoId", async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const docRef = todosRef.doc(todoId);
    const snapshot = await docRef.get();
    if (!snapshot.exists) {
      res.status(404).send({ error: "Todo not found" });
    } else {
      const updatedTask = { ...snapshot.data(), isDone: !snapshot.data().isDone };
      await docRef.update(updatedTask);
      res.send({ message: "Todo updated successfully" });
    }
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).send({ error: "Failed to update todo" });
  }
});


app.listen(4000, () => console.log("Up & Running 4000"));
