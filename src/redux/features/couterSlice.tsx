import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
    count: number ;
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 } as CounterState ,
    reducers: {
        incrementByFive: (state, action :PayloadAction<number> ) => {
          state.count=  state.count + action.payload ;
        } ,
        increment: (state, action ) => {
          state.count=  state.count += 1 ;
        } ,
        decrement: (state, action ) => {
          state.count=  state.count -= 1 ;
        }
    }
}) ;

export const { increment, decrement , incrementByFive } = counterSlice.actions ;
export default counterSlice.reducer ;


