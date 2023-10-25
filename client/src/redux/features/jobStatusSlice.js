import { createSlice } from "@reduxjs/toolkit"

export const jobStatusSlice = createSlice({
    name: "jobStatus",
    initialState: {
        status: null
    },
    reducers: {
        setJobStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export const { setJobStatus } = jobStatusSlice.actions
export default jobStatusSlice.reducer