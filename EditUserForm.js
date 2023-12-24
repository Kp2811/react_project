import React, { useState, useEffect } from 'react';

const EditUserForm = ({ currentUser, setEditing, updateUser }) => {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      employeeDetail: {
        ...user.employeeDetail,
        [name]: value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user.employeeId, user);
  };

  return (
    <form onSubmit={handleSubmit}>
     <label>Title</label>
      <input
        type="text"
        name="title"
        value={user.employeeDetail.title}
        onChange={handleInputChange}
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.employeeDetail.name}
          onChange={handleInputChange}
          />
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={user.employeeDetail.gender}
          onChange={handleInputChange}
        />
        <label>Permanent Address</label>
        <input
          type="text"
          name="permanentAddress"
          value={user.employeeDetail.permanentAddress}
          onChange={handleInputChange}
        />
        <label>Present Address</label>
        <input
          type="text"
          name="presentAddress"
          value={user.employeeDetail.presentAddress}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={user.employeeDetail.email}
          onChange={handleInputChange}
        />
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={user.employeeDetail.phone}
          onChange={handleInputChange}
        />
         <label>Emergency ContactNumber</label>
        <input
          type="text"
          name="emergencyContactNumber"
          value={user.employeeDetail.emergencyContactNumber}
          onChange={handleInputChange}
        />
      <button>Update user</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
