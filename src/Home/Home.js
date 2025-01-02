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
            <label for="medical-date">Select you date(date and time):</label>

            <DateSelect/>
            {/* <input type="datetime-local" id="medical-date" name="birthdaytime"/> */}
          </div>

          <label className='bold-label'>Nombre</label>
          <form className='name-form'>
          
            <div className='name-inputs'>
              <input className='form-inputs' id='name-input'/>
              <label className='form-labels' for='name-input'>Nombre</label>
            </div>

            <div className='lastname-inputs'>
              <input className='form-inputs' id='lastname-input'/>
              <label className='form-labels' for='lastname-input'>Apellido</label>
            </div>
          </form>

          <div className='data-form'>
            <label className='title-form bold-label'>Gender</label>
            <div className='input-group'>
               
                {/* <input className='form-inputs' id='gender-input'/> */}
                <select className='form-inputs' id='gender-input'>
                  <option value=""></option>
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                  <option value="2">N/a</option>
                </select>
                {/* <label className='form-labels' for='name-input'>Nombre</label> */}
              </div>
              
              <label className='title-form bold-label'>Phone</label>
              <div className='input-group'>
                
                <input className='form-inputs' id='phone-input'/>
                <label className='form-labels' for='phone-input'>Insert your phone number</label>
              </div>
            </div>
          <div>
            {/* Aqui va otro jodio Datepicker, depue se pone tambien */}
          </div>
        </form>

        <form>
          {/* <Form.Group>
            <Form.Label>Direccion</Form.Label>
            <Form.Control type='text'></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Direccion 2</Form.Label>
            <Form.Control type='text'></Form.Control>
          </Form.Group>

          <div>
          <Form.Group>
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type='text'></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Estado / Provincia</Form.Label>
            <Form.Control type='text'></Form.Control>
          </Form.Group>
          </div>

          <Form.Group>
            <Form.Label>Direccion</Form.Label>
            <Form.Control type='text'></Form.Control>
          </Form.Group> */}
        </form>

        <form>
          {/* <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control controlId="exampleForm.ControlInput1"></Form.Control>
          </Form.Group> */}
        </form>

        <div>
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Coments</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group> */}
        </div>

        {/* <Button variant="outline-success">Submit</Button> */}
      </div>
      </>
    );
  }

export default Home;
