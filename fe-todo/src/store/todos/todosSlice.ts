import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
type TodosState = Array<string>

// Define the initial state using that type
const initialState: TodosState = ["Dawd", "Slice"]


export const todosSlice = createSlice({
    name: 'todosReducer',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.push(action.payload)
        },
    },
})

export const { add } = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todosSlice.reducer