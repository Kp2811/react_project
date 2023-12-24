import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import DeleteConfirmation from './components/DeleteConfirmation';
import userData from './data/data.json';
import './App.css';
import ViewUserData from './components/ViewUserData';

function App() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [viewing, setViewing] = useState(false); 
  const [currentUser, setCurrentUser] = useState({
    employeeId: null,
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
  });

  useEffect(() => {
    setUsers(userData.users);
  }, []);

  const addUser = (user) => {
    user.employeeId = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = () => {
    const updatedUsers = users.filter((user) => user.employeeId !== currentUser.employeeId);
    setUsers(updatedUsers);
    setDeleting(false);
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.employeeId === id ? updatedUser : user)));
  };

  const openDeleteConfirmation = (user) => {
    setDeleting(true);
    setCurrentUser(user);
  };

  const closeDeleteConfirmation = () => {
    setDeleting(false);
  };

  const openViewUserData = (user) => {
    setViewing(true);
    setCurrentUser(user);
  };
  const closeViewUserData = () => {
    setViewing(false);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <div className="container">
        <div className="flex-row">
          {editing ? (
            <div className="flex-large">
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
           <div className="flex-large">
              <h2></h2>
              <AddUserForm addUser={addUser} />
            </div>
              )}
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable
              users={users}
              editUser={editUser}
              openDeleteConfirmation={openDeleteConfirmation}
              openViewUserData={openViewUserData}
            />
          </div>
        </div>
      </div>
      {deleting && (
        <DeleteConfirmation
          currentUser={currentUser}
          deleteUser={deleteUser}
          closeDeleteConfirmation={closeDeleteConfirmation}
          
        />
      )}
       {viewing && ( 
        <ViewUserData 
        userInfo={currentUser}
        showViewModal={true}
        
        />
      )}
    </div>
  );
}

  
export default App;
