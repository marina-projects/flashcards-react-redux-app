import React, { useEffect } from "react";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchTreatments, selectFleaTreatments, selectWormTreatments, selectVaccineTreatments, addTreatment } from "../../features/treatmentsSlice/treatmentsSlice";

const filter = createFilterOptions();

const TreatmentAutocomplete = ({ treatmentType, name, setName }) => {
    const dispatch = useDispatch();
    const treatmentNames = useSelector(state => {
        if (treatmentType === 'fleaTreatments') return selectFleaTreatments(state);
        if (treatmentType === 'wormTreatments') return selectWormTreatments(state);
        if (treatmentType === 'vaccines') return selectVaccineTreatments(state);
        return [];
    });

    useEffect(() => {
        dispatch(fetchTreatments(treatmentType));
    }, [dispatch, treatmentType]);

    const handleAddTreatment = (newTreatmentName) => {
        const newTreatment = { name: newTreatmentName };
        dispatch(addTreatment({ treatmentType, newTreatment }));
    };

    return (
        <div>
            <Autocomplete
                value={name}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        setName(newValue);
                    } else if (newValue && newValue.inputValue) {
                        setName(newValue.inputValue);
                        handleAddTreatment(newValue.inputValue);
                    } else {
                        setName(newValue ? newValue.name : newValue);
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    const { inputValue } = params;
                    const isExisting = options.some((option) => inputValue === option.name);
                    if (inputValue !== '' && !isExisting) {
                        filtered.push({
                            inputValue,
                            name: `Add ${inputValue}`,
                        });
                    }
                    return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={treatmentNames.map((treatment) => ({ name: treatment.name }))}
                getOptionLabel={(option) => {
                    if (typeof option === 'string') {
                        return option;
                    }
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    return option.name;
                }}
                renderOption={(props, option) => (
                    <li {...props}>
                        {option.name}
                    </li>
                )}
                sx={{ width: 300 }}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Name of treatment" />
                )}
            />
        </div>
    );
}

export default TreatmentAutocomplete;