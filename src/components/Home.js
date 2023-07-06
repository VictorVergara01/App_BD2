import React, { useState, useEffect } from 'react';
import './Home.css'; // Archivo de estilos CSS personalizados

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Inicio</h1>
      <div className="card-deck">
        {posts.map((post) => (
          <div key={post.id} className="card mb-4">
            {post.image && (
              <img
                src={post.image}
                className="card-img-top"
                alt="Imagen del post"
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{post.description}</h5>
              <p className="card-text">Autor: {post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

