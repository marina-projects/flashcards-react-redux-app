import './treatments.css';

//libraries
import React from "react";
import dayjs from "dayjs";

//redux
import { useSelector, useDispatch } from "react-redux";
import { selectWormTreatments, selectFleaTreatments, removeTreatment } from '../../features/userTreatments/userTreatmentsSlice';


//components
import PopupAddTreatment from '../popupAddTreatment/popupAddTreatment';

//styles
import { ButtonTreatmentItem, TreatmentCardsWrapper, TreatmentItemWrapper, H3, P } from '../../styles';
import ClearIcon from '@mui/icons-material/Clear';



const Treatments = () => {
    const fleaTreatments = useSelector(selectFleaTreatments);
    const wormTreatments = useSelector(selectWormTreatments);
    const dispatch = useDispatch();

    const handleRemoveFleaTreatment = (id) => {
        dispatch(removeTreatment({ id, treatmentType: 'fleaTreatments' }));
    };

    const handleRemoveWormTreatment = (id) => {
        dispatch(removeTreatment({ id, treatmentType: 'wormTreatments' }));
    };

    const sortedFleaTreatments = Object.values(fleaTreatments).sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
    const sortedWormTreatments = Object.values(wormTreatments).sort((a,b) => dayjs(b.date).diff(dayjs(a.date)));

    return (
        <div className='treatments div-column'>
            <h2>Treatments</h2>
            <H3>Flea treatments</H3>
            <PopupAddTreatment treatmentType='fleaTreatments' title='treatment'/>
            {
                sortedFleaTreatments.map((treatment) => (
                    <TreatmentCardsWrapper key={treatment.id}>
                        <TreatmentItemWrapper >
                            <H3>{treatment.name} {dayjs(treatment.date).format('DD.MM.YYYY')}</H3>
                            <P>Next treatment: {dayjs(treatment.nextDate).format('DD.MM.YYYY')}</P>
                        </TreatmentItemWrapper>
                        <ButtonTreatmentItem>
                            <ClearIcon 
                                onClick={() => handleRemoveFleaTreatment(treatment.id)}
                            />
                        </ButtonTreatmentItem>
                    </TreatmentCardsWrapper>
                ))
            }
            <H3>Worm treatments</H3>
            <PopupAddTreatment treatmentType='wormTreatments' title='treatment'/>
            {
                sortedWormTreatments.map((treatment) => (
                    <TreatmentCardsWrapper key={treatment.id}>
                        <TreatmentItemWrapper>                            
                            <H3>{treatment.name} {dayjs(treatment.date).format('DD.MM.YYYY')}</H3>
                            <P>Next treatment: {dayjs(treatment.nextDate).format('DD.MM.YYYY')}</P>
                        </TreatmentItemWrapper>
                        <ButtonTreatmentItem>
                            <ClearIcon 
                                onClick={() => handleRemoveWormTreatment(treatment.id)}
                            />
                        </ButtonTreatmentItem>
                    </TreatmentCardsWrapper>
                ))
            }
        </div>
    )
}

export default Treatments;