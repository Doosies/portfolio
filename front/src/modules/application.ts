import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IconType } from "react-icons";
import { RiFinderLine, RiMailSendLine, RiProfileLine, RiTerminalBoxLine } from "react-icons/ri";
import { useAppSelector } from "./hooks";

type ApplicationState = {
    applicationIcon: IconType,
    applicationName: string,
    applicationId: number,
}

const initialStateApplication:{appList:ApplicationState[], appCounter: number}  = {
    appList: [
        { applicationIcon: RiFinderLine, applicationName: '탐색기', applicationId: 1},
        { applicationIcon: RiTerminalBoxLine, applicationName: '터미널', applicationId: 2},
        { applicationIcon: RiMailSendLine, applicationName: '메일전송', applicationId: 3},
        { applicationIcon: RiProfileLine, applicationName: '프로필', applicationId: 4},
    ],
    appCounter: 4,
}



export const applicationSlice = createSlice({
    name: 'application',
    initialState: initialStateApplication,
    reducers: {
        addApplication: (state, action: PayloadAction<ApplicationState>) => {
            state.appList.push(action.payload);},
        removeApplication: (state, action: PayloadAction<number>) => {
            state.appList.filter( el => el.applicationId !== action.payload);
        }
    }
});

export const {addApplication, removeApplication} = applicationSlice.actions;
export default applicationSlice.reducer;