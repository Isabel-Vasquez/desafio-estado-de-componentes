import Registro from './component/Registro';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [registrationStatus, setRegistrationStatus] = useState({
    success: null,
    message: '',
  });

  const handleRegistration = ({ success, message }) => {
    setRegistrationStatus({ success, message });
  };

  return (
    <div>
      <Registro
        onRegistration={handleRegistration}
        registrationStatus={registrationStatus}
      />
    </div>
  );
};

export default App;
