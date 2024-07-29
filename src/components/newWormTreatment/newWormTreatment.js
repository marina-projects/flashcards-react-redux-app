import './newFleaTreatment.css';

//libraries
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

//redux
import { useDispatch } from "react-redux";
import { addWormTreatment } from '../../features/wormTreatmentSlice/wormTreatmentSlice';

//components
import { DatePicker } from "@mui/x-date-pickers";
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
// import WormTreatmentAutocomplete from '../wormTreatmentAutocomplete/wormTreatmentAutocomplete';
import TreatmentAutocomplete from '../treatmentAutocomplete/treatmentAutocomplete';

const NewWormTreatment = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [date, setDate] = useState(dayjs());

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWormTreatment = {
            id: uuidv4(),
            name,
            date: date.toISOString()
        };
        dispatch(addWormTreatment(newWormTreatment));
    }

    return (
        <div className="create-new-vaccine div-column">
            <h4>Add new worm treatment</h4>
            <form onSubmit={handleSubmit}>
                <TreatmentAutocomplete
                    name={name}
                    setName={setName}
                    treatmentType="worm-treatments"
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

export default NewWormTreatment;
