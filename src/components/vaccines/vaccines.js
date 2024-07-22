import './vaccines.css';

//libraries
import React from 'react';
import dayjs from 'dayjs'; //for formatting date

//redux
import { useSelector } from 'react-redux';
import { selectTopics } from '../../features/vaccines/vaccinesSlice';
import { removeVaccine } from '../../features/vaccines/vaccinesSlice';
import { useDispatch } from 'react-redux';

//components
import NewVaccine from '../newVaccine/newVaccine';
import ClearIcon from '@mui/icons-material/Clear';

const Vaccines = () => {
    const vaccines = useSelector(selectTopics);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeVaccine({ id }));
    };

    const sortedVaccines = Object.values(vaccines).sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

    return (
        <div className='vaccines div-column'>
            <h2>Vaccines</h2>
            <NewVaccine />
            {
                sortedVaccines.map((vaccine) => (
                    <div className='vaccines-list div-row' key={vaccine.id}>
                        <div className='vaccine-item div-column'>
                            <div className='vaccine-item-current div-row'>
                                <h3>{vaccine.nameVaccine}</h3>
                                <h4>{dayjs(vaccine.date).format('DD.MM.YYYY')}</h4>
                            </div>
                            <p>Next vaccine: {dayjs(vaccine.date).add(1, 'year').format('DD.MM.YYYY')}</p>
                        </div>
                        <div className='delete-vaccine'>
                            <ClearIcon 
                                onClick={() => handleRemove(vaccine.id)}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Vaccines;
