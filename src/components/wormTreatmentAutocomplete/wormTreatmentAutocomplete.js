import React, { useState } from "react";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";

const filter = createFilterOptions();

const WormTreatmentAutocomplete = ({ name, setName }) => {
    const [treatmentNames, setTreatmentNames] = useState([
        'Milprazon',
        'Drontal'
    ]);

    return (
        <div>
            <Autocomplete
                value={name}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        setName(newValue);
                    } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setName(newValue.inputValue);
                        setTreatmentNames([...treatmentNames, newValue.inputValue]); // Добавляем новое значение в массив
                    } else {
                        setName(newValue ? newValue.title : newValue);
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some((option) => inputValue === option.title);
                    if (inputValue !== '' && !isExisting) {
                        filtered.push({
                            inputValue,
                            title: `Add "${inputValue}"`,
                        });
                    }
                    return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={treatmentNames.map((name) => ({ title: name }))}
                getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    // Regular option
                    return option.title;
                }}
                renderOption={(props, option) => (
                    <li {...props}>
                        {option.title}
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

export default WormTreatmentAutocomplete;
