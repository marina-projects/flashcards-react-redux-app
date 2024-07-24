import './treatments.css';

import React from "react";
import dayjs from "dayjs";

import { useSelector, useDispatch } from "react-redux";
import { removeFleaTreatment, selectFleaTreatments } from "../../features/fleaTreatmentSlice/fleaTreatmentSlice";
import { selectWormTreatments, removeWormTreatment } from '../../features/wormTreatmentSlice/wormTreatmentSlice';

import PopupFleaTreatment from '../popupFleaTreatment/popupFleaTreatment';
import ClearIcon from '@mui/icons-material/Clear';
import PopupWormTreatment from '../popupWormTreatment/popupWormTreatment';


const Treatments = () => {
    const fleaTreatments = useSelector(selectFleaTreatments);
    const wormTreatments = useSelector(selectWormTreatments);
    const dispatch = useDispatch();

    const handleRemoveFleaTreatment = (id) => {
        dispatch(removeFleaTreatment({ id }));
    };

    const handleRemoveWormTreatment = (id) => {
        dispatch(removeWormTreatment({ id }));
    };

    const sortedFleaTreatments = Object.values(fleaTreatments).sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
    const sortedWormTreatments = Object.values(wormTreatments).sort((a,b) => dayjs(b.date).diff(dayjs(a.date)));

    return (
        <div className='treatments div-column'>
            <h2>Treatments</h2>
            <h3>Flea treatments</h3>
            <PopupFleaTreatment />
            
            {
                sortedFleaTreatments.map((treatment) => (
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
                                onClick={() => handleRemoveFleaTreatment(treatment.id)}
                            />
                        </div>
                    </div>
                ))
            }
            <h3>Worm treatments</h3>
            <PopupWormTreatment />
            {
                sortedWormTreatments.map((treatment) => (
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
                                onClick={() => handleRemoveWormTreatment(treatment.id)}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Treatments;
