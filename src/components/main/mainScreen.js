import './mainScreen.css';

//libraries
import React from "react";
import dayjs from "dayjs";

//redux
import { useSelector } from "react-redux";
import { selectVaccines } from '../../features/vaccines/vaccinesSlice';
import { selectFleaTreatments } from '../../features/fleaTreatmentSlice/fleaTreatmentSlice';
import { selectWormTreatments } from '../../features/wormTreatmentSlice/wormTreatmentSlice';

//components
import PopupVaccine from '../popupVaccine/popupVaccine';
import PopupFleaTreatment from '../popupFleaTreatment/popupFleaTreatment';
import PopupWormTreatment from '../popupWormTreatment/popupWormTreatment';

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


    return (
        <div className="main-screen div-column">
            <h1>Vaccines and treatments</h1>
            <h2>Vaccines</h2>
            {
                latestVaccine ? (
                    <div className='vaccines-list div-row' key={latestVaccine.id}>
                        <div className='vaccine-item div-column'>
                            <div className='vaccine-item-current div-row'>
                                <h3>{latestVaccine.nameVaccine}</h3>
                                <h4>{dayjs(latestVaccine.date).format('DD.MM.YYYY')}</h4>
                            </div>
                            <p>Next vaccine: {dayjs(latestVaccine.date).add(1, 'year').format('DD.MM.YYYY')}</p>
                        </div>
                        <div className='add-vaccine-main'>
                            <PopupVaccine />
                        </div>
                    </div>
                ) : <p>No vaccines available</p>
            }
            <h2>Flea treatments</h2>
            {
                latestFleaTreatment ? (
                    <div className='vaccines-list div-row' key={latestFleaTreatment.id}>
                        <div className='vaccine-item div-column'>
                            <div className='vaccine-item-current div-row'>
                                <h3>{latestFleaTreatment.name}</h3>
                                <h4>{dayjs(latestFleaTreatment.date).format('DD.MM.YYYY')}</h4>
                            </div>
                            <p>Next treatment: {dayjs(latestFleaTreatment.date).add(1, 'month').format('DD.MM.YYYY')}</p>
                        </div>
                        <div className='add-treatment-main'>
                            <PopupFleaTreatment />
                        </div>
                    </div>
                ) : <p>No flea treatments available</p>
            }
            <h2>Worm treatments</h2>
            {
                latestWormTreatment ? (
                    <div className='vaccines-list div-row' key={latestWormTreatment.id}>
                        <div className='vaccine-item div-column'>
                            <div className='vaccine-item-current div-row'>
                                <h3>{latestWormTreatment.nameVaccine}</h3>
                                <h4>{dayjs(latestWormTreatment.date).format('DD.MM.YYYY')}</h4>
                            </div>
                            <p>Next vaccine: {dayjs(latestWormTreatment.date).add(1, 'year').format('DD.MM.YYYY')}</p>
                        </div>
                        <div className='add-treatment-main'>
                            <PopupWormTreatment />
                        </div>
                    </div>
                ) : <p>No worm treatments available</p>
            }
        </div>
    )
}

export default MainScreen;
