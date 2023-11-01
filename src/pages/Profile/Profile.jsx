/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../Profile/css/profile.css';
const USER_URL = '/users'

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin] = useState(true); 
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [profileUrl, setProfileUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  
  // useEffect(() => {
  //   fetch('/api/profile') 
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIsLoading(false);
  //       setName(data.name);
  //       setUsername(data.username);
  //       setPassword(data.password);
  //       setEmail(data.email);
  //       setProfileUrl(data.profileUrl);
  //     })
  //     .catch((error) => {
  //       console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
  //     });
  // }, []);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    
    
    fetch('/users') 
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setUsername(data.username);
        setPassword(data.password);
        setEmail(data.email);
        setProfileUrl(data.profileUrl);
      })
      .catch((error) => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  };
  
  return (
    <div className="container">
      <div className="card">
        <h2>Profile</h2>
        <div className="profile-url">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <img
              src={profileUrl}
              alt="รูปโปรไฟล์ของคุณ"
              style={{ maxWidth: '100px', maxHeight: '100px', borderRadius: '50%' }}
            />
          )}
        </div>
        <div className="user-details">
          <div className="username">
            <strong>Name:</strong> {isEditing || isAdmin ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              name
            )}
          </div>
          <div className="username">
            <strong>Username:</strong> {isEditing || isAdmin ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            ) : (
              username
            )}
          </div>
          <div className="password">
            <strong>Password:</strong> {isEditing || isAdmin ? (
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              password
            )}
          </div>
          <div className="email">
            <strong>Email:</strong> {isEditing || isAdmin ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              email
            )}
          </div>
          <div className="profileUrl">
            <strong>Profile:</strong> {isEditing || isAdmin ? (
              <input
                type="text"
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)} 
              />
            ) : (
              profileUrl
            )}
          </div>
        </div>
        <div className="actions">
          <div className="actions">
            {isEditing ? (
              <>
                <button className="actions__save" onClick={handleSave}>
                  Save &nbsp; <i className="fas fa-save"></i>
                </button>
                <button className="actions__cancel" onClick={handleCancel}>
                  Cancel &nbsp; <i className="fas fa-times"></i>
                </button>
              </>
            ) : (
              <button
                className="actions__edit"
                onClick={() => setIsEditing(true)}
              >
                Edit &nbsp; <i className="fas fa-edit"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
