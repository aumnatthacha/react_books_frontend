/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const AdminRoute = () => {
  const userRole = 'admin'; // แทนค่านี้ด้วยบทบาทของผู้ใช้จริง

  if (userRole === 'admin') {
    return (
      <section>
        <h1>Admins Page</h1>
        <br />
        <p>You must have been assigned an Admin role.</p>
        <div className="flexGrow">
          <Link to="/">Home</Link>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <h1>Unauthorized</h1>
        <p>You are not authorized to access this page.</p>
      </section>
    );
  }
};

export default AdminRoute;
