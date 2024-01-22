import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = ({ onRegistration, registrationStatus }) => {
  const { success, message } = registrationStatus;

  return (
    <main className='d-flex justify-content-center align-items-center'>
      <div className='container-form d-flex flex-column align-items-center'>
        <h1 className='mt-5'>Crea una cuenta</h1>
        <div>
          <SocialButton icon='faFacebook' />
          <SocialButton icon='faTwitter' />
          <SocialButton icon='faInstagram' />
        </div>
        <p>O usa tu Email para registrarte</p>

        <Formulario onRegister={onRegistration} />
        {message && (
          <Alert message={message} type={success ? 'success' : 'danger'} />
        )}
      </div>
    </main>
  );
};

export default Registro;
