import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../features/login-slice';
import colabReducer from '../features/colab-slice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        colab: colabReducer,
    }
})
export type  AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;