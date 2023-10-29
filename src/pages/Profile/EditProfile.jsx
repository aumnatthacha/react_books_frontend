/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Profile.css';

export default function EditProfile() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newProfileUrl, setNewProfileUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ดำเนินการบันทึกการเปลี่ยนแปลงข้อมูลที่ผู้ใช้กรอก
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Profile URL</label>
            <input
              type="text"
              value={newProfileUrl}
              onChange={(e) => setNewProfileUrl(e.target.value)}
            />
          </div>
          <button type="submit">บันทึก</button>
        </form>
      </div>
    </div>
  );
}
