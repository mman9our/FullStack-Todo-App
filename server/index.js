const express = require("express");
const cors = require("cors");
const app = express();
const todosRef = require("./config");
app.use(express.json());
app.use(cors());




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
