import './mainScreen.css';

//libraries
import React from "react";
import { NavLink } from 'react-router-dom';
import dayjs from "dayjs";

//redux
import { useSelector } from "react-redux";
import { selectVaccines, selectFleaTreatments, selectWormTreatments } from '../../features/userTreatments/userTreatmentsSlice';

//styles
import { H3, P, TreatmentCardsWrapper, TreatmentItemWrapper, ButtonTreatmentItem, DivColumn } from '../../styles';
import AddIcon from '../../images/add-icon.svg';
import UserGreeting from '../userGreeting/userGreeting';

const MainScreen = () => {

    const vaccines = useSelector(selectVaccines);
    const fleaTreatments = useSelector(selectFleaTreatments);
    const wormTreatments = useSelector(selectWormTreatments);

    const sortedVaccines = Object.values(vaccines).sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));
    const sortedFleaTreatments = Object.values(fleaTreatments).sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));
    const sortedWormTreatments = Object.values(wormTreatments).sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));

    const latestVaccine = sortedVaccines.slice(-1)[0]; // Получаем последнюю вакцину
    const latestFleaTreatment = sortedFleaTreatments.slice(-1)[0]; // Получаем последнюю обработку
    const latestWormTreatment = sortedWormTreatments.slice(-1)[0]; // Получаем последнюю обработку

    const allLatestTreatments = [latestVaccine, latestFleaTreatment, latestWormTreatment].filter(Boolean).sort((a, b) => dayjs(a.nextDate).diff(dayjs(b.nextDate)));

    const getNextTreatmentText = (treatmentType) => {
        switch (treatmentType) {
            case 'vaccines':
                return 'Next vaccine';
            case 'fleaTreatments':
                return 'Next flea treatment';
            case 'wormTreatments':
                return 'Next worm treatment';
            default:
                return 'Next treatment';
        }
    };

    const getPath = (treatmentType) => {
        switch (treatmentType) {
            case 'vaccines':
                return '/vaccines';
            case 'fleaTreatments':
                return '/treatments';
            case 'wormTreatments':
                return '/treatments';
            default:
                return '/';
        }
    };

    return (
        <DivColumn>
            <UserGreeting />
            {allLatestTreatments.length > 0 ? (
                allLatestTreatments.map((treatment) => (
                    <TreatmentCardsWrapper key={treatment.id}>
                        <TreatmentItemWrapper>
                            <H3>{dayjs(treatment.date).format('DD.MM.YYYY')} - {getNextTreatmentText(treatment.treatmentType)}</H3>                            
                            <P>Last was: {treatment.name} {dayjs(treatment.nextDate).format('DD.MM.YYYY')}</P>
                        </TreatmentItemWrapper>
                        <ButtonTreatmentItem>
                            <NavLink to={getPath(treatment.treatmentType)}><img src={AddIcon} alt=''/></NavLink>
                        </ButtonTreatmentItem>
                        
                    </TreatmentCardsWrapper>
                    
                ))
            ) : (
                <p>No treatments available</p>
            )}
        </DivColumn>
    );
}

export default MainScreen;
