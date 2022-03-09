import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './reducer'

export const store = configureStore({
  reducer: {
    mySlice: counterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch