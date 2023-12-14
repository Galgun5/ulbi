import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: false,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // setAuthData: (state, action: PayloadAction<Profile>) => {
        //     state.authData = action.payload;
        // },
        // initAuthData: (state) => {
        //     const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        //     if (user) {
        //         state.authData = JSON.parse(user);
        //     }
        // },
        // logout: (state) => {
        //     state.authData = undefined;
        //     localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        // },
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
