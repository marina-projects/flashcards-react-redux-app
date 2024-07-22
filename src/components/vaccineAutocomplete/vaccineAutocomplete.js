import React, { useState } from "react";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";

const filter = createFilterOptions();

const VaccineAutocomplete = ({ nameVaccine, setNameVaccine }) => {
    const [vaccinesNames, setVaccinesNames] = useState([
        'Nobivak',
        'Eurican'
    ]);

    return (
        <div>
            <Autocomplete
                value={nameVaccine}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        setNameVaccine(newValue);
                    } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setNameVaccine(newValue.inputValue);
                        setVaccinesNames([...vaccinesNames, newValue.inputValue]); // Добавляем новое значение в массив
                    } else {
                        setNameVaccine(newValue ? newValue.title : newValue);
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
                options={vaccinesNames.map((name) => ({ title: name }))}
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
                    <TextField {...params} label="Name of vaccine" />
                )}
            />
        </div>
    );
}

export default VaccineAutocomplete;
