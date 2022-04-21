import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IconType } from "react-icons";
import { RiFinderLine, RiMailSendLine, RiProfileLine, RiTerminalBoxLine } from "react-icons/ri";

type ApplicationState = {
    applicationIcon: IconType,
    applicationName: string,
    applicationKey: string,
}

const initialStateApplication:ApplicationState[]  = [
    { applicationIcon: RiFinderLine, applicationName: '탐색기', applicationKey: "asre23uini"},
    { applicationIcon: RiTerminalBoxLine, applicationName: '터미널', applicationKey: "oi8ug6f598"},
    { applicationIcon: RiMailSendLine, applicationName: '메일전송', applicationKey: "kj096gfjde"},
    { applicationIcon: RiProfileLine, applicationName: '프로필', applicationKey: "dk31098aj1"},
];

export const applicationSlice = createSlice({
    name: 'application',
    initialState: initialStateApplication,
    reducers: {
        addApplication: (state, action: PayloadAction<ApplicationState>) => {
            state.push(action.payload);},
        removeApplication: (state, action: PayloadAction<string>) => {
            state.filter( el => el.applicationKey !== action.payload);
        }
    }
});

export const {addApplication, removeApplication} = applicationSlice.actions;
export default applicationSlice.reducer;