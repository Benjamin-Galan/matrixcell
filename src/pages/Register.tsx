// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { supabase } from '../api/supabase';


// export default function Registro() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordConfirmation, setPasswordConfirmation] = useState('');
//     const [error, setError] = useState('');
//     const [isRegistered, setIsRegistered] = useState(false);
//     const navigate = useNavigate(); 
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       if (password !== passwordConfirmation) {
//         setError('Las contraseñas no coinciden');
//         return;
//       }
  
//       try {
//         const { user, error } = await supabase.auth.signUp({ email, password });
  
//         if (error) {
//           console.error('Error registrando al usuario:', error.message);
//         } else {
//           const { data, error } = await supabase 
//             .from('usuarios')
//             .insert([{ name, email }]);
  
//           if (error) {
//             console.error('Error guardando datos del usuario:', error.message);
//           } else {
//             setIsRegistered(true);
//           }
//         }
  
//       } catch (error) {
//         setError(error.message);  
//       }
//     };