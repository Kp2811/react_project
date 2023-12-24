import React from 'react';
 

const DeleteConfirmation = ({ currentUser, deleteUser, closeDeleteConfirmation }) => (
  <div className="modal">
    <div className="modal-content">
      <h3>Delete User</h3>
      <p>Are you sure you want to delete {currentUser.employeeDetail.name}?</p>
      <div className='button-container'> 
      <button onClick={deleteUser} className='delete-button' > 
      Delete
      </button>
      <button onClick={closeDeleteConfirmation} className="cancel-button">
            Cancel
          </button>
      </div>
      
      </div>
  </div>
);

export default DeleteConfirmation;
    