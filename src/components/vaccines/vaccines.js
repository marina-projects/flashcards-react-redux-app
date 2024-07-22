import './vaccines.css';

//libraries
import React from 'react';
import dayjs from 'dayjs'; //for formatting date

//redux
import { useSelector } from 'react-redux';
import { selectTopics } from '../../features/vaccines/vaccinesSlice';

//components
import NewVaccine from '../newVaccine/newVaccine';

const Vaccines = () => {
    const vaccines = useSelector(selectTopics);

    return (
        <div className='vaccines div-column'>
            <h2>Vaccines</h2>
            <NewVaccine />
            {
                Object.values(vaccines).map((vaccine) => (
                    <div className='vaccines-list' key={vaccine.id}>
                        <div className='vaccine-item div-row'>
                            <h3>{vaccine.nameVaccine}</h3>
                            <p>{dayjs(vaccine.date).format('DD.MM.YYYY')}</p> 
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Vaccines;
