import './mainScreen.css';

//libraries
import React from "react";
import dayjs from "dayjs";

//redux
import { useSelector } from "react-redux";
import { selectVaccines, selectFleaTreatments, selectWormTreatments } from '../../features/userTreatments/userTreatmentsSlice';

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

    return (
        <div className="main-screen div-column">
            <h1>Vaccines and treatments</h1>
            {allLatestTreatments.length > 0 ? (
                allLatestTreatments.map((treatment) => (
                    <div className='vaccines-list div-row' key={treatment.id}>
                        <div className='vaccine-item div-column'>
                            <div className='vaccine-item-current div-row'>
                                <h3>{treatment.name}</h3>
                                <h4>{dayjs(treatment.date).format('DD.MM.YYYY')}</h4>
                            </div>
                            <p>Next treatment: {dayjs(treatment.nextDate).format('DD.MM.YYYY')}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No treatments available</p>
            )}
        </div>
    );
}

export default MainScreen;
