const express = require('express');
const bodyParser = require('body-parser');

// GET /items: Retrieves all items.
// GET /items/:id: Retrieves a specific item by ID.
// POST /items: Creates a new item.
// PUT /items/:id: Updates an item.
// DELETE /items/:id: Deletes an item.

// In-memory data store
let items = [];

// Create Express app
const app = express();
app.use(bodyParser.json());

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get a specific item by ID
app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  const item = items.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Create a new item
app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

// Update an item
app.put('/items/:id', (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...updatedItem };
    res.json(items[index]);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Delete an item
app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deletedItem = items[index];
    items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
