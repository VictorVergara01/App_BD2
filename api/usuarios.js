const express = require('express');
const cors = require('cors');

const app = express();
const port = 3002;

// Habilitar CORS
app.use(cors());

// Datos de ejemplo - usuarios
const users = [
  { id: 1, name: 'John Doe', age: 30, location: 'Ciudad XYZ', image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg' },
  { id: 2, name: 'Jane Smith', age: 25, location: 'Ciudad ABC', image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg' },
];

// Ruta para obtener todos los usuarios
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Ruta para obtener un usuario por su ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor API corriendo en http://localhost:${port}`);
});
