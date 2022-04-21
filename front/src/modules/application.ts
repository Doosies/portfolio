import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IconType } from "react-icons";
// import { RiFinderLine, RiMailSendLine, RiProfileLine, RiTerminalBoxLine } from "react-icons/ri";
import { ApplicationTypes } from "../enum/applicationTypes";

type ApplicationState = {
    // applicationIcon: IconType,
    applicationName: string,
    applicationId: number,
    applicationType: ApplicationTypes;
}

const initialStateApplication:{appList:ApplicationState[], appCounter: number}  = {
    appList: [
        { applicationName: '탐색기', applicationId: 1, applicationType: ApplicationTypes.finder},
        { applicationName: '터미널', applicationId: 2, applicationType: ApplicationTypes.terminal},
        { applicationName: '메일전송', applicationId: 3, applicationType: ApplicationTypes.sendmail},
        { applicationName: '프로필', applicationId: 4, applicationType: ApplicationTypes.profile },
    ],
    appCounter: 4,
}



export const applicationSlice = createSlice({
    name: 'application',
    initialState: initialStateApplication,
    reducers: {
        addApplication: (state, action: PayloadAction<ApplicationState>) => {
            state.appList.push({...action.payload, applicationId: ++state.appCounter});
        },
        removeApplication: (state, action: PayloadAction<number>) => {
            state.appList.filter( el => el.applicationId !== action.payload);
            --state.appCounter;
        }
    }
});

export const {addApplication, removeApplication} = applicationSlice.actions;
export default applicationSlice.reducer;