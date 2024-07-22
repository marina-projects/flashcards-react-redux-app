import './newVaccine.css';

//libraries
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs from 'dayjs';

//redux
import { useDispatch } from "react-redux";
import { addVaccine } from "../../features/topics/topicsSlice";

//components
import { DatePicker } from "@mui/x-date-pickers";
import TextField from '@mui/material/TextField';



const NewVaccine = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [date, setDate] = useState(dayjs());

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVaccine = {
            id: uuidv4(),
            name,
            date: date.toISOString()
        };
        dispatch(addVaccine(newVaccine));
        setName('')
    }

    return (
        <div className="create-new-vaccine div-column">
            <h4>Add new </h4>
            <p>{name}</p>
            <p>{date.toISOString()}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    id='vaccine-name'
                    value={name}
                    type='textarea'
                    placeholder="Name of vaccine"
                    onChange={(e) => setName(e.currentTarget.value)}
                />
                <DatePicker 
                    defaultValue={dayjs('2022-04-17')}
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewVaccine;