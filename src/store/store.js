import { configureStore } from '@reduxjs/toolkit'
import reducer from '@/features/auth/authSlice';


const store = configureStore({
    reducer: reducer
})

export default store;