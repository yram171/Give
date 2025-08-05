const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { db } = require('./firebase/firebase');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  // Example: Fetch from Firebase
  const snapshot = await db.collection('test').get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  res.json({ message: 'Server is running', data });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});