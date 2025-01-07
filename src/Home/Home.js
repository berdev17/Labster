import * as React from 'react';

import { Form,Button  } from 'react-bootstrap';
import DateSelect from '../Components/DateSelect';

const Home = () => {
    return (
      <>
      <div className='main-content'>
        <header>
          <h1>Medical Form</h1>
        </header>

        <label className='first-label'>Schedule your date: </label>

        <form className='form1-content'>
          
          <div className="date-form">
            <DateSelect/>
          </div>
         
          <form className='name-form'>
            <div className='input-group'>
              <label className='title-form bold-label' for='name-input'>Name</label>
              <input className='form-inputs' id='name-input' />
              <label className='form-labels' for='name-input'>First name</label>
            </div>

            <div className='input-group'>
              <label className='title-form bold-label' for='lastname-input'>Last Name</label>
              <input className='form-inputs' id='lastname-input' />
              <label className='form-labels' for='lastname-input'>Last name</label>
            </div>

            <div className='input-group'>
              <label className='title-form bold-label' for='gender-input'>Gender</label>
              <select className='form-inputs select-input' id='gender-input'>
                <option value=""></option>
                <option value="0">Male</option>
                <option value="1">Female</option>
                <option value="2">N/A</option>
              </select>
            </div>

            <div className='input-group'>
              <label className='title-form bold-label' for='phone-input'>Phone</label>
              <input className='form-inputs' id='phone-input' />
              <label className='form-labels' for='phone-input'>Insert your phone number</label>
            </div>

            <div className='input-group'>
              <label className='title-form bold-label' for='birthdaytime'>Birthday</label>
              <input className='form-inputs' type='date' id='birthdaytime' name='birthdaytime' />
            </div>
          </form>

          </form>

          <label className='address-label bold-label'>Address</label>
        <form className='address-form'>
            
            <input className='form-inputs'></input>
            <label className='form-labels'>Address 1</label>

            <input className='form-inputs' ></input>
            <label className='form-labels'>Address 2</label>
            
            <div className='name-form'>
              <div className='input-group'>
                <input className='form-inputs'></input>
                <label className='form-labels'>City</label>
              </div>

              <div className='input-group'>
                <input className='form-inputs'></input>
                <label className='form-labels'>State</label>
              </div>

            </div>

            <input className='form-inputs'></input>
            <label className='form-labels'>Postal code</label>
        </form>

        <label className='email-label bold-label'>Email</label>

        <form className='email-form'>
          <div className='form-group'>
            <input className='form-inputs'/>
            <label className='form-labels'>example@email.com</label>
          </div>
        </form>

        <div className='visted-form'>
          <label className='vistited-label bold-label'>Have you ever visited us?</label>
          <div>
            <input className='check-input' id='yes' type='Radio' name='visted'/>
            <label className='yes-no-label' for='yes'>Yes</label>
          </div>

          <div>
            <input className='check-input' id='no' type='Radio' name='visted'/>
            <label className='yes-no-label' for='no'>No</label>
          </div>

        </div>

        {/* <Button variant="outline-success">Submit</Button> */}
      </div>
      </>
    );
  }

export default Home;
