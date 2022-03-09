import { MyTypes } from './../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: MyTypes[] = []

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<MyTypes>) => {
      state.push(payload)
    },
    removeItem: (state, { payload }: PayloadAction<{ id: number }>) => {
      state.filter((el) => el.id !== payload.id)
    },
  },
})

export const allActions = counterSlice.actions
export const allReducers = counterSlice.reducer
