import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IconType } from "react-icons";
import { RiFinderLine, RiMailSendLine, RiProfileLine, RiTerminalBoxLine } from "react-icons/ri";

type ApplicationState = {
    applicationIcon: IconType,
    applicationName: string,
}

const initialStateApplication:ApplicationState[]  = [
    { applicationIcon: RiFinderLine, applicationName: '탐색기' },
    { applicationIcon: RiTerminalBoxLine, applicationName: '터미널' },
    { applicationIcon: RiMailSendLine, applicationName: '메일전송' },
    { applicationIcon: RiProfileLine, applicationName: '프로필' },
];

export const applicationSlice = createSlice({
    name: 'application',
    initialState: initialStateApplication,
    reducers: {
        addApplication: (state, action: PayloadAction<ApplicationState>) => {
            state.push(action.payload);},
        removeApplication: (state, action: PayloadAction<string>) => {
            state.filter( el => el.applicationName !== action.payload);
        }
    }
});

export const {addApplication, removeApplication} = applicationSlice.actions;
export default applicationSlice.reducer;