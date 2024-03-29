import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string> >(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');
            // const response = await axios('https://localhost:8000/profile');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
