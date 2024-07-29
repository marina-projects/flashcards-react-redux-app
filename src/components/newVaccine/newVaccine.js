import './newVaccine.css';

//libraries
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs from 'dayjs';

//redux
import { useDispatch } from "react-redux";
import { addVaccine } from "../../features/vaccines/vaccinesSlice";

//components
import { DatePicker } from "@mui/x-date-pickers";
import TextField from '@mui/material/TextField';
// import VaccineAutocomplete from '../vaccineAutocomplete/vaccineAutocomplete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import TreatmentAutocomplete from '../treatmentAutocomplete/treatmentAutocomplete';

const NewVaccine = () => {

    const dispatch = useDispatch();
    const [date, setDate] = useState(dayjs());
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVaccine = {
            id: uuidv4(),
            name,
            date: date.toISOString()
        };
        dispatch(addVaccine(newVaccine));
    }

    return (
        <div className="create-new-vaccine div-column">
            <h4>Add new </h4>
            <form onSubmit={handleSubmit}>
                <TreatmentAutocomplete
                    name={name}
                    setName={setName}
                    treatmentType="vaccine-treatments"
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
    )
}

export default NewVaccine;