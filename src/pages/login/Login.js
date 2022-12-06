import React, { useState } from 'react'
import { NavLink as button } from 'react-router-dom'
import loginImg from '../../assets/login1.svg'
import './login.scss'

function Login() {
  const [isStudent, setIsStudent] = useState(null)

  const toggleStudentOption = (selection) => {
    setIsStudent(selection)
  }

  return (
    <div className='login'>

      <div className='imgContainer'>
        <img src={loginImg} alt='Img' className='loginImg'/>
      </div>

      <div className='loginStuff'>
        <h1>Sign In</h1>
       
       <ul>
        <li>
          <button onClick={(v) => toggleStudentOption('student')} 
            className={(isStudent ==='student') && ('selected')}>
              Student
          </button> 
        </li>
        <li><button onClick={() => toggleStudentOption('employer')}
            className={(isStudent ==='employer') && ('selected')}>
            Employer
              </button> 
          </li>
       </ul>

        <form>
          <label>
            Email:
          </label>
          <input type='email' className='uInput'/>
          {isStudent === 'student' ? <p>please use .edu</p> : <p></p>}

          <label>
            Password:
          </label>
          <input type='password' className='uInput'/>

          <input type='submit' className='subButton'/>
        </form>


      </div>


    </div>
  )
}

export default Login
