import * as React from 'react';
import './Datepicker.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

export default function DataSelect() {
  return (<>
    <div className='card-calender'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateTimePicker className='calendar' orientation="landscape" />
      </LocalizationProvider>
    </div>
    </>
  );
}