//this is a slice for fetching and managing treatments names in auticomlete forms

//redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//firebase
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from "../../firebase";

//fetching treatment names
export const fetchTreatments = createAsyncThunk(
    'treatments/fetchTreatments',
    async (treatmentType, { rejectWithValue }) => {
        try {
            const querySnapshot = await getDocs(collection(db, `treatments/001/${treatmentType}`));
            const treatments = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    createdAt: data.createdAt ? (data.createdAt.toDate ? data.createdAt.toDate().toISOString() : data.createdAt) : null
                };
            });
            return { treatmentType, treatments };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


//adding new treatment name
export const addTreatment = createAsyncThunk(
    'treatments/addTreatment',
    async ({ treatmentType, newTreatment }, { rejectWithValue }) => {
        try {
            const docRef = await addDoc(collection(db, `treatments/001/${treatmentType}`), {
                ...newTreatment,
                createdAt: new Date().toISOString()
            });
            const addedTreatment = { treatmentType, id: docRef.id, ...newTreatment };
            return addedTreatment;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const treatmentsSlice = createSlice({
    name: 'treatments',
    initialState: {
        fleaTreatments: [],
        wormTreatments: [],
        vaccineTreatments: [],
        isLoading: false,
        hasError: false,
        errorMessage: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTreatments.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMessage = '';
            })
            .addCase(fetchTreatments.fulfilled, (state, action) => {
                const { treatmentType, treatments } = action.payload;
                if (treatmentType === 'fleaTreatments') {
                    state.fleaTreatments = treatments;
                } else if (treatmentType === 'wormTreatments') {
                    state.wormTreatments = treatments;
                } else if (treatmentType === 'vaccines') {
                    state.vaccineTreatments = treatments;
                }
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(fetchTreatments.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMessage = action.payload;
            })
            .addCase(addTreatment.fulfilled, (state, action) => {
                const { treatmentType, id, name, createdAt } = action.payload;
                if (treatmentType === 'fleaTreatments') {
                    state.fleaTreatments.push({ id, name, createdAt });
                } else if (treatmentType === 'wormTreatments') {
                    state.wormTreatments.push({ id, name, createdAt });
                } else if (treatmentType === 'vaccines') {
                    state.vaccineTreatments.push({ id, name, createdAt });
                }
            })
            .addCase(addTreatment.rejected, (state, action) => {
                state.hasError = true;
                state.errorMessage = action.payload;
            });
    }
});

export const selectFleaTreatments = (state) => state.treatments.fleaTreatments;
export const selectWormTreatments = (state) => state.treatments.wormTreatments;
export const selectVaccineTreatments = (state) => state.treatments.vaccineTreatments;

export default treatmentsSlice.reducer;