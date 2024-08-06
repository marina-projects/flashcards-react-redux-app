import './newUserTreatment.css';

//libraries
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

//redux
import { useDispatch } from "react-redux";
import { addTreatment } from "../../features/userTreatments/userTreatmentsSlice";

//components
import { DatePicker } from "@mui/x-date-pickers";
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import TreatmentAutocomplete from '../treatmentAutocomplete/treatmentAutocomplete';

const NewUserTreatment = ({ treatmentType, title }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [date, setDate] = useState(dayjs());
    const [nextDate, setNextDate] = useState(dayjs());

    useEffect(() => {
        let newNextDate = dayjs();

        switch (treatmentType) {
            case 'vaccines':
                newNextDate = date.add(1, 'year');
                break;
            case 'fleaTreatments':
                newNextDate = date.add(1, 'month');
                break;
            case 'wormTreatments':
                newNextDate = date.add(3, 'month');
                break;
            default:
                break;
        }

        setNextDate(newNextDate);
    }, [treatmentType, date]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTreatment = {
            id: uuidv4(),
            name,
            date: date.toISOString(),
            nextDate: nextDate.toISOString(),
            treatmentType
        };
        dispatch(addTreatment(newTreatment));
    }

    return (
        <div className="create-new-treatment div-column">
            <h4>{title}</h4>
            <form onSubmit={handleSubmit}>
                <TreatmentAutocomplete 
                    treatmentType={treatmentType}
                    name={name}
                    setName={setName}
                />
                <DatePicker 
                    defaultValue={dayjs('2022-04-17')}
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker 
                    defaultValue={nextDate}
                    value={nextDate}
                    onChange={(newValue) => setNextDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
                <IconButton type='submit'>
                    <AddCircleOutlineIcon />
                </IconButton>
            </form>
        </div>
    );
}

export default NewUserTreatment;
