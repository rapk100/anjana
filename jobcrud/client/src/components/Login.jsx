import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState({}); 
    const navigate = useNavigate()

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        else {
            errors.password = ''
        }

        return newErrors;
    };

    const handleLogin = async(e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        try{
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          // If no validation errors, proceed with the API call
          setErrors({});
          const response = await axios.post("http://localhost:3001/users/Login", { name, password })

           if(response.status === 200){
            alert('login successfull')
            navigate('/')
           }
        }
    }
    catch(err){
        alert('error occured')
    }
      };


    return (
        <div className='d-flex vh-100  bg-primary align-items-center justify-content-center' >
            <div className='w-50 bg-white' >
                <form onSubmit={handleLogin} className='form-group'>

                    <div className='p-3'>
                        <label htmlFor='name' >Username</label>
                        <input type='text' placeholder='Enter your name' className='form-control' id='name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='p-3'>
                        <label htmlFor='password' >User Name</label>
                        <input type='password' placeholder='Enter your password' className='form-control' id='password'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className='p-3'>
                        <button className='btn btn-success' >submit</button>
                    </div>

                </form>
            </div>


        </div>
    )
}

export default Login
