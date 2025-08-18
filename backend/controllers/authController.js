const { db } = require('../firebase/firebase');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const snapshot = await db.collection('users').where('email', '==', email).get();

    if (snapshot.empty) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const userDoc = snapshot.docs[0];
    const user = userDoc.data();

    if (user.password !== password) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    
    res.json({ message: 'Login successful' });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.signup = async (req, res) => {
  try {
    const { email, password, firstName, lastName, birthday } = req.body;
    if (!email || !password || !firstName || !lastName || !birthday) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const snapshot = await db.collection('users').where('email', '==', email).get();
    if (!snapshot.empty) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // await db.collection('users').add({ email, password });

    const hashed = await bcrypt.hash(password, 10);
    const userRef = await db.collection('users').add({
      email,
      password: hashed,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      createdAt: new Date().toISOString(),
    });

    res.status(201).json({ message: 'User created successfully', userId: userRef.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
