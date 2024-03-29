import React, { useState } from 'react';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de nombre completo
    if (fullName.length <= 5) {
      setError('Por favor ingrese un nombre completo válido (más de 5 caracteres)');
      return;
    }

    // Validación de formato de email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Por favor ingrese un email válido');
      return;
    }

    // Si pasa las validaciones, mostrar mensaje de éxito y limpiar errores
    setSuccessMessage(`Gracias ${fullName}, te contactaremos lo antes posible vía mail.`);
    setError('');

    // Mostrar datos en la consola (simulado)
    console.log('Datos enviados:');
    console.log('Nombre completo:', fullName);
    console.log('Email:', email);

    // Limpiar campos del formulario después del envío
    setFullName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Nombre completo:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;