import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from "../../firebase";

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
                if (treatmentType === 'flea-treatments') {
                    state.fleaTreatments = treatments;
                } else if (treatmentType === 'worm-treatments') {
                    state.wormTreatments = treatments;
                } else if (treatmentType === 'vaccine-treatments') {
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
                if (treatmentType === 'flea-treatments') {
                    state.fleaTreatments.push({ id, name, createdAt });
                } else if (treatmentType === 'worm-treatments') {
                    state.wormTreatments.push({ id, name, createdAt });
                } else if (treatmentType === 'vaccine-treatments') {
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
