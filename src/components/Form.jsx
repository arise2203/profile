import React from 'react'
import '../App.css';
import { Button } from './Button';
function Form() {
  return (
    <>
    <form className='form-sign'>
          <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <input
              className='footer-input'
              name='email'
              type='password'
              placeholder='Password'
            />
            <div className="button-form">
                <Button buttonStyle='btn--outline'>Login In</Button>
            </div>
          </form>
    </>
  )
}

export default Form