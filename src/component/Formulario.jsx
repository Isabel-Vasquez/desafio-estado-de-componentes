import React, { useState } from 'react';

const Formulario = ({ onRegister }) => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const validarDatos = (e) => {
		e.preventDefault();

		// Validación
		if (
			nombre === '' ||
			email === '' ||
			password === '' ||
			confirmPassword === ''
		) {
			setError('Todos los campos son obligatorios');
			onRegister({
				success: false,
				message: 'Todos los campos son obligatorios',
			});
			return;
		}

		// Validación de email y contraseñas
		if (!/^\S+@\S+\.\S+$/.test(email)) {
			setError('Formato de email incorrecto');
			onRegister({ success: false, message: 'Formato de email incorrecto' });
			return;
		}

		if (password !== confirmPassword) {
			setError('Las contraseñas no coinciden');
			onRegister({ success: false, message: 'Las contraseñas no coinciden' });
			return;
		}

		// Validación de contraseña
		const passwordRegex =
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

		if (!passwordRegex.test(password)) {
			setError(
				'La contraseña debe tener al menos 8 caracteres, incluyendo letras, números y al menos un símbolo (@$!%*?&_)',
			);
			onRegister({
				success: false,
				message:
					'La contraseña debe tener al menos 8 caracteres, incluyendo letras, números y al menos un símbolo (@$!%*?&_)',
			});
			return;
		}

		setError('');

		onRegister({ success: true, message: 'Registro exitoso' });

		setNombre('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	};

	return (
		<form
			className="form-inner h-100 d-flex flex-column gap-3"
			onSubmit={validarDatos}
		>
			<div className="form-group">
				<input
					type="text"
					name="nombre"
					className="form-control"
					onChange={(e) => setNombre(e.target.value)}
					placeholder="Nombre"
					value={nombre}
				/>
			</div>
			<div className="form-group">
				<input
					type="email"
					name="email"
					placeholder="tuemail@ejemplo.com"
					className="form-control"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</div>
			<div className="form-group">
				<input
					type="password"
					name="password"
					placeholder="Contraseña"
					className="form-control"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</div>
			<div className="form-group">
				<input
					type="password"
					name="confirmPassword"
					className="form-control"
					placeholder="Confirma tu contraseña"
					onChange={(e) => setConfirmPassword(e.target.value)}
					value={confirmPassword}
				/>
			</div>
			<button type="submit" className="btn btn-success mt-3 mb-2 w-100">
				Registrarse
			</button>
		</form>
	);
};

export default Formulario;
