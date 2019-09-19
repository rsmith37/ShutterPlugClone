import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Createprofile = props => {
    const name = "";
    const location = "";
    const radius = "";
    const specialization = "";
    const experience = "";
    const certifications = "";
    const bio = "";
    const instagram = "";
    const facebook = "";
    const twitter = "";


  return (
      <React.Fragment>
      <form className='form'>
      <h1 className='large text-primary'>Create Artist Profile
      </h1>
      <div className='form-group'>        
          <small className='form-text'>
            Please enter your name:
          </small>
          <input
            type='text'
            placeholder='Name'
            name='name'/>
            </div>
        <div className='form-group'>
        <small className='form-text'>
            What is your location (city, state)?
          </small>
          <input
            type='text'
            placeholder='Location'
            name='location'
          />
          <small className='form-text'>
            How far are you willing to travel (mi)?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Radius'
            name='radius'
          />
          <small className='form-text'>
            Please enter your specialization(s):
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Specialization'
            name='specialization'
          />
          <small className='form-text'>
            How many years of experience do you have?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Experience'
            name='experience'
          />
          <small className='form-text'>
            Do you have any certifications?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Certifications'
            name='certifications'
          />
          <small className='form-text'>
            Please describe yourself briefly:
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
          />
          <hr></hr>
          </div>
        <div className='form-group'>
            
        <small className='form-text'>Instagram</small>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
              />
            </div>
            
            <div className='form-group'>
            <small className='form-text'>Facebook</small>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
              />
            </div>
            
            <div className='form-group'>
            <small className='form-text'>Twitter</small>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
              />
            </div>
            <input type='submit' className='btn btn-primary my-1'
                  />
            </form>

           
                  </React.Fragment>
  )

Createprofile.propTypes = {
}
}

export default Createprofile


