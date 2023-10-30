/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../Profile/css/profile.css';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin] = useState(true); // ตั้งค่าให้เป็น true หรือ false ตามสิทธิ์ของผู้ใช้
  const [name, setName] = useState("AUM");
  const [username, setUsername] = useState("NATTHACHA MUMDAENG");
  const [password, setPassword] = useState("12345");
  const [email, setEmail] = useState("644259007@webmail.npru.ac.th");
  const [profileUrl, setProfileUrl] = useState("https://cdn-icons-png.flaticon.com/512/3135/3135715.png");

  const handleSave = () => {
    // ดำเนินการบันทึกการเปลี่ยนแปลงข้อมูลที่ผู้ใช้กรอก
    setIsEditing(false);
  };

  const handleCancel = () => {
    // ดำเนินการยกเลิกการแก้ไข
    setIsEditing(false);

    // คืนค่าข้อมูลเดิม
    setName("AUM");
    setUsername("NATTHACHA MUMDAENG");
    setPassword("12345");
    setEmail("644259007@webmail.npru.ac.th");
    setProfileUrl("https://cdn-icons-png.flaticon.com/512/3135/3135715.png");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Profile</h2>
        <div className="profile-url">
          <img
            src={profileUrl}
            alt="รูปโปรไฟล์ของคุณ"
            style={{ maxWidth: '100px', maxHeight: '100px', borderRadius: '50%' }}
          />
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
