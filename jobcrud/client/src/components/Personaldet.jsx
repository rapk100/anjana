import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Personaldet() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [course, setCourse] = useState()
  const [describe, setDescribe] = useState()
  const[errors,setErrors] = useState({})
  const navigate = useNavigate()

  const validateForm =() =>{

  }

  const handledet = () => {

    e.preventDefault()
    const validationErrors = validateForm()

   }

  return (
    <div className='d-flex vh-100 align-items-center justify-content-center bg-primary'>

      <form onSubmit={handledet} className=' form-group w-50 p-5 bg-white'>
        <div className='p-3'>
          <label htmlFor='name'>Name</label>
          <input type="text" id='name' className='form-control' value={name} placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)} />
        </div>

        <div className='p-3'>
          <label htmlFor="email">Email</label>
          <input type='text' id='email' className='form-control' value={email} placeholder='Enter Your email'
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='p-3'>
          <label htmlFor="age">Age</label>
          <input type='number' id='age' className='form-control' value={age} placeholder='Enter your age'
            onChange={(e) => setAge(e.target.value)} />
        </div>

        <div className='p-3'>
          <label className='me-4' htmlFor="language">Language</label>
          <input
            type='checkbox'
            id='language-tamil'
            value='Tamil'
            onChange={(e) => handleLanguageChange(e)}
          /> Tamil
          <input
            type='checkbox'
            id='language-english'
            value='English'
            onChange={(e) => handleLanguageChange(e)}
          /> English
          <input
            type='checkbox'
            id='language-hindi'
            value='Hindi'
            onChange={(e) => handleLanguageChange(e)}
          /> Hindi
        </div>

        <div className='p-3'>
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            className='form-control'
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="Reactjs">ReactJs</option>
            <option value="Angular">Angular</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <div className='p-3'>
          <label htmlFor='desc'>Describe Yourself</label>
          <textarea
            id='desc'
            className='form-control'
            value={describe}
            placeholder='Write about yourself'
            onChange={(e) => setDescribe(e.target.value)}
          />
        </div>

        <div className="p-3">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>



      </form>
    </div>


  )
}

export default Personaldet
