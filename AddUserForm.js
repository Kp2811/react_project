import React, { useState } from 'react';

const AddUserForm = ({ addUser }) => {
  const initialFormState = {
    employeeDetail: {
      title: '',
      name: '',
      gender: '',
      permanentAddress: '',
      presentAddress: '',
      email: '',
      phone: '',
      emergencyContactNumber: '',
    },
    educationalDetail: [],
  };

  const [user, setUser] = useState(initialFormState);

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
    
    if (
      !user.employeeDetail.Title ||
      !user.employeeDetail.name ||
      !user.employeeDetail.gender ||
      !user.employeeDetail.permanentAddress ||
      !user.employeeDetail.presentAddress ||
      !user.employeeDetail.email ||
      !user.employeeDetail.phone ||
      !user.employeeDetail.emergencyContactNumber
    ) {
      return;
    }
    addUser(user);
    setUser(initialFormState);
  };
  
/*
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        name="Title"
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
          name="Phone"
          value={user.employeeDetail.phone}
          onChange={handleInputChange}
        />
         <label>Emergency Contact Number</label>
        <input
          type="text"
          name="emergencyContactNumber"
          value={user.employeeDetail.emergencyContactNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="anygap"
          value={user.educationalDetail.anygap}
          onChange={handleInputChange}
        />
      <button>Update User</button>
    </form>
    
  );*/
};

export default AddUserForm;

/* const AddUserForm = ({ addUser }) => {
  const initialFormState = {
    employeeDetail: {
      title: '',
      name: '',
      gender: '',
      permanentAddress: '',
      presentAddress: '',
      email: '',
      phone: '',
      emergencyContactNumber: '',
    },
    educationalDetail: [],
  };

  const [user, setUser] = useState(initialFormState);

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
    if (!user.employeeDetail.title ||
      !user.employeeDetail.name ||
      !user.employeeDetail.gender ||
      !user.employeeDetail.permanentAddress ||
      !user.employeeDetail.presentAddress ||
      !user.employeeDetail.email ||
      !user.employeeDetail.phone ||
      !user.employeeDetail.emergencyContactNumber) {
        return;} 
    addUser(user);
    setUser(initialFormState);
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
      <label>Emergency Contact Number</label>
      <input
        type="text"
        name="emergencyContactNumber"
        value={user.employeeDetail.emergencyContactNumber}
        onChange={handleInputChange}
        />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm; 
*/
