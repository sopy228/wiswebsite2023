import { useState } from 'react'
import Button from 'react-bootstrap/Button'
export const Join = (props) => {
  return (
    <div id='join' className='text-center'>
      <div className='section-title'>
        <h2>Let's Stay Connected</h2>
        <p>
          Ready to take a stand against the gender disparities in STEM?
        </p>
        &nbsp;
        <div className='row'>
          <>

            <Button className='btn btn-custom btn-lg' href = 'https://docs.google.com/forms/d/1ghO2tVJLUGkmqyJnHG9dHQAdMSg6LdmlHSmpyYeSvrM/viewform?edit_requested=true&fbclid=IwAR3H7Ucc2sMvQusR0Ln45Bx8oKUF9u1p2dVSPVtitjouGodRCWyiAm8Z1EE'>
              Join our Team.
            </Button>{''}
          </>
        </div>
        <div>
          &nbsp;
        <p>
          {/* Don't miss any important info, sign up for our montly newsletter! */}
        </p>
        </div>
      </div>
    </div>
  )
}
