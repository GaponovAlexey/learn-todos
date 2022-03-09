import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './reducer'

export const store = configureStore({
  reducer: {
    card: counterSlice,
  },
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch