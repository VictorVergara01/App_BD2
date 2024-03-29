const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Array para almacenar los posts
let posts = [
  {
    id: 1,
    avatar:'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    content: 'lsldsakldfkjsdlkfklsd',
    description: 'Descripción del post 1',
    author: 'Autor 1',
    date: 'just now'
  },
  {
    id: 2,
    avatar:'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    description: 'Descripción del post 2',
    content: 'lsldsakldfkjsdlkfklsd',
    author: 'Autor 2',
    date: 'just now'
  },
];

// Obtener todos los posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Agregar un nuevo post
app.post('/posts', (req, res) => {
  const { image, description, author } = req.body;
  const newPost = {
    id: posts.length + 1,
    image,
    description,
    author,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Iniciar el servidor
app.listen(3001, () => {
  console.log('API server running on port 3001');
});
