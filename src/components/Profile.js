import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/users/1');
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) {
    return <div className="profile-container">Cargando perfil...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Perfil de Usuario</h1>
      <div className="profile-avatar">
        <img src={user.image} alt="Avatar" />
      </div>
      <div className="profile-field">
        <label>Nombre:</label>
        <p>{user.name}</p>
      </div>
      <div className="profile-field">
        <label>Edad:</label>
        <p>{user.age} años</p>
      </div>
      <div className="profile-field">
        <label>Ubicación:</label>
        <p>{user.location}</p>
      </div>
    </div>
  );
};

export default Profile;
