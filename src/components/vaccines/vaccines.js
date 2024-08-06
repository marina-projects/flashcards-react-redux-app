import './vaccines.css';

//libraries
import React from 'react';
import dayjs from 'dayjs'; //for formatting date

//redux
import { useSelector, useDispatch } from 'react-redux';
import { selectVaccines, removeTreatment } from '../../features/userTreatments/userTreatmentsSlice';

//components
import ClearIcon from '@mui/icons-material/Clear';

// styles
import { TreatmentCardsWrapper, TreatmentItemWrapper, H3, P, DeleteTreatmentItem } from '../../styles';
import PopupAddTreatment from '../popupAddTreatment/popupAddTreatment';

const Vaccines = () => {
    const vaccines = useSelector(selectVaccines);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeTreatment({ id, treatmentType: 'vaccines' }));
    };

    const sortedVaccines = Object.values(vaccines).sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

    return (
        <div className='vaccines div-column'>
            <h2>Vaccines</h2>
            <PopupAddTreatment treatmentType='vaccines' title='vaccine' />
            {sortedVaccines.map((vaccine) => (
                <TreatmentCardsWrapper key={vaccine.id}>
                    <TreatmentItemWrapper>
                        <H3>{vaccine.name} {dayjs(vaccine.date).format('DD.MM.YYYY')}</H3>
                        <P>Next vaccine: {dayjs(vaccine.nextDate).format('DD.MM.YYYY')}</P>
                    </TreatmentItemWrapper>
                    <DeleteTreatmentItem>
                        <ClearIcon onClick={() => handleRemove(vaccine.id)} />
                    </DeleteTreatmentItem>
                </TreatmentCardsWrapper>
            ))}
        </div>
    );
}

export default Vaccines;
