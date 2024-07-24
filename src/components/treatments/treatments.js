import './treatments.css';

import React from "react";
import dayjs from "dayjs";

import { useSelector, useDispatch } from "react-redux";
import { removeFleaTreatment, selectFleaTreatments } from "../../features/fleaTreatmentSlice/fleaTreatmentSlice";

import PopupFleaTreatment from '../popupFleaTreatment/popupFleaTreatment';
import ClearIcon from '@mui/icons-material/Clear';


const Treatments = () => {
    const treatmentsFleas = useSelector(selectFleaTreatments);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFleaTreatment({ id }));
    };

    const sortedTreatments = Object.values(treatmentsFleas).sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

    return (
        <div className='treatments div-column'>
            <h2>Flea treatments</h2>
            <PopupFleaTreatment />
            
            {
                sortedTreatments.map((treatment) => (
                    <div className='treatments-list div-row' key={treatment.id}>
                        <div className='treatment-item div-column'>
                            <div className='treatment-item-current div-row'>
                                <h3>{treatment.name}</h3>
                                <h4>{dayjs(treatment.date).format('DD.MM.YYYY')}</h4>
                            </div>
                            <p>Next treatment: {dayjs(treatment.date).add(1, 'month').format('DD.MM.YYYY')}</p>
                        </div>
                        <div className='delete-treatment'>
                            <ClearIcon 
                                onClick={() => handleRemove(treatment.id)}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Treatments;
