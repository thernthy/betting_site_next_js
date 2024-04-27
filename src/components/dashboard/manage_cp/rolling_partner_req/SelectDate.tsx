'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // Import Korean locale
import { TextField } from '@mui/material';
dayjs.locale('ko');
export function PartnerRollingDatePicker(): React.JSX.Element {
    const [startDate, setStartDate] = React.useState<Date | null>(null)


    return (

               <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko" >
                    <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']} sx={{padding:0}}>
                        <DatePicker
                               label={"수강기간 (From)"}
                               value={startDate}
                               onChange={(newValue: Date | null) => {
                                setStartDate(newValue)
                              }} 
                              
                        />
                    </DemoContainer>
                </LocalizationProvider>
    );
}
