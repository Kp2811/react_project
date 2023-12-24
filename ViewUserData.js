import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ViewUserData(showViewModal, userInfo ) {
  const [show, setShow] = useState(showViewModal);
  const handleClose = () => setShow(false);
  
  return (
    <>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Educational details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  {showViewModal.userInfo && Array.isArray(showViewModal.userInfo.educationalDetail) ? (
                      <ul>
                          {showViewModal.userInfo.educationalDetail.map((educationalDetail, index) => (
                            
                              <li key={index}>
                                  Course Level: {educationalDetail.courseLevel}, Course Name: {educationalDetail.courseName}, Passout Year: {educationalDetail.passoutYear}, Any Gap: {educationalDetail.anygap}
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <p>Educational details not available.</p>
                  )}

            </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewUserData;

