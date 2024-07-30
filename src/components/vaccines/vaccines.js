import './vaccines.css';

//libraries
import React from 'react';
import dayjs from 'dayjs'; //for formatting date

//redux
import { useSelector } from 'react-redux';
import { selectVaccines } from '../../features/vaccines/vaccinesSlice';
import { removeVaccine } from '../../features/vaccines/vaccinesSlice';
import { useDispatch } from 'react-redux';

//components
import PopupVaccine from '../popupVaccine/popupVaccine';

// styles
import { TreatmentCardsWrapper, TreatmentItemWrapper, H3, P, DeleteTreatmentItem } from '../../styles';
import ClearIcon from '@mui/icons-material/Clear';

const Vaccines = () => {
    const vaccines = useSelector(selectVaccines);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeVaccine({ id }));
    };

    const sortedVaccines = Object.values(vaccines).sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

    return (
        <div className='vaccines div-column'>
            <h2>Vaccines</h2>
            <PopupVaccine />     
            {
                sortedVaccines.map((vaccine) => (
                    <TreatmentCardsWrapper
                        key={vaccine.id}
                    >
                        <TreatmentItemWrapper>                            
                            <H3>{vaccine.name} {dayjs(vaccine.date).format('DD.MM.YYYY')}</H3>
                            <P>Next vaccine: {dayjs(vaccine.date).add(1, 'year').format('DD.MM.YYYY')}</P>
                        </TreatmentItemWrapper>
                        <DeleteTreatmentItem>
                            <ClearIcon 
                                onClick={() => handleRemove(vaccine.id)}
                            />
                        </DeleteTreatmentItem>
                    </TreatmentCardsWrapper>
                ))
            }
        </div>
    )
}

export default Vaccines;
