import './newFleaTreatment.css';

//libraries
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

//redux
import { useDispatch } from "react-redux";
import { addFleaTreatment } from "../../features/fleaTreatmentSlice/fleaTreatmentSlice";

//components
import { DatePicker } from "@mui/x-date-pickers";
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import FleaTreatmentAutocomplete from '../fleaTreatmentAutocomplete/fleaTreatmentAutocomplete';

const NewFleaTreatment = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [date, setDate] = useState(dayjs());

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFleaTreatment = {
            id: uuidv4(),
            name,
            date: date.toISOString()
        };
        console.log(newFleaTreatment);
        dispatch(addFleaTreatment(newFleaTreatment));
    }

    return (
        <div className="create-new-vaccine div-column">
            <h4>Add new flea treatment</h4>
            <form onSubmit={handleSubmit}>
                <FleaTreatmentAutocomplete 
                    name={name}
                    setName={setName}
                />
                <DatePicker 
                    defaultValue={dayjs('2022-04-17')}
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
                <IconButton  type='submit'>
                    <AddCircleOutlineIcon />
                </IconButton>
            </form>
        </div>
    );
}

export default NewFleaTreatment;
