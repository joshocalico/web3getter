import React, { FC, useState } from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ text, onClick, }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // assuming the initial login state is false

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (!isLoggedIn) {
      setShowModal(true);
    } else {
      console.log("we have a user")
      // handle click for connected user
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };




  return (
    <>
      {!isLoggedIn && ( // display the login button only if the user is not logged in
        <button
          onClick={handleClick}

        >
          {text}
        </button>
      )}
      {showModal && (
        <div
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '5px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Login form goes here</h2>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
