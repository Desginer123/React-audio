import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface controlsSliceIP {
    playbackRate: number,
    dropdownBox: boolean
}

const initialState: controlsSliceIP = {
    playbackRate: 1,
    dropdownBox: false
}

const controlSpeedSlice = createSlice({
    name: 'control',
    initialState,
    reducers: {
        showDropdownBox: (state) => {
            state.dropdownBox = !state.dropdownBox
        },
        setPlaybackRate: (state, action) => {
            state.playbackRate = action.payload
        }
    }
})

export const getControlSpeed = (state: RootState) => state.controlSpeed

export default controlSpeedSlice.reducer
export const {showDropdownBox, setPlaybackRate} = controlSpeedSlice.actions