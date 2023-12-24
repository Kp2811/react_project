import React from 'react';
import Button from 'react-bootstrap/Button';

const UserTable = ({ users, editUser, openDeleteConfirmation, openViewUserData }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Permanent Address</th>
        <th>Present Address</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Emergency Phone Number</th>
       
       
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map(user => (
      //  const {title } = user?.employeeDetail;
          <tr key={user.employeeId}>
            <td>{user?.employeeDetail?.title}</td>
            <td>{user?.employeeDetail?.name}</td>
            <td>{user?.employeeDetail?.gender}</td>
            <td>{user?.employeeDetail?.permanentAddress}</td>
            <td>{user?.employeeDetail?.presentAddress}</td>
            <td>{user?.employeeDetail?.email}</td>
            <td>{user?.employeeDetail?.phone}</td>
            <td>{user?.employeeDetail?.emergencyContactNumber}</td>
            
           
            
            <td>
              <div className="actions-container">
                <button class="colored-button" onClick={() => editUser(user)}>Edit</button>
                <button class="colored-button" onClick={() => openDeleteConfirmation(user)}>Delete</button>
                {openViewUserData && ( // Check if openViewUserData is defined
                <Button variant="primary" onClick={() => openViewUserData(user)}>
                  View
                </Button>)}
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={10}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);



export default UserTable;

