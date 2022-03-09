import { MyTypes } from './../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: MyTypes[] = []

export const counterSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    getItem: (state, action: PayloadAction<MyTypes>) => {
      state.push(action.payload)
    },
    removeItem: (state, { payload }: PayloadAction<{ id: number }>) => {
      state[0] = state[0].filter((el) => el.id !== payload.id)
    },
    addTodo: (state, { payload }: PayloadAction<{ title: string }>) => {
      state[0].unshift({ id: Date.now(), title: payload })
    },
  },
})
export const { getItem } = counterSlice.actions
export const allActions = counterSlice.actions
export default counterSlice.reducer
