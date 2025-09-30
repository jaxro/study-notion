import React from 'react'
import frame from "../assets/frame.png"
import loginImg from "../assets/login.png"
import signupImg from "../assets/signup.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
const Template = ({title,desc1,desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex  w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        <div className='font-inter'>
            <h1 className='text-white text-[35px] mb-4'>{title}</h1>
            <p className='mb-4'>
                <span className='text-richblack-100'>{desc1}.</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}.</span>
            </p>
            {formtype==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            <div className='flex'>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button><p>SignUp with google</p></button>
        </div>
        <div>
            <img src={frame} alt="pattern" width={558} height={504} loading='lazy'/>
            <img src={image} alt="loginimg" width={558} height={490} loading='lazy'/>
        </div>
       
    </div>
  )
}

export default Template