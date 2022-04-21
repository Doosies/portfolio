import { IconType } from "react-icons";
import { RiFinderLine, RiMailSendLine, RiProfileLine, RiTerminalBoxLine } from "react-icons/ri";

const ADD_APP = 'application/ADD_APP' as const;
const REMOVE_APP = 'application/REMOVE_APP' as const;

export const addApp = (diff: string) => ({
    type: ADD_APP,
    payload: diff,
});
export const removeApp = (diff: string) => ({
    type: REMOVE_APP,
    payload: diff,
});

type ApplicationAction = 
    | ReturnType<typeof addApp>
    | ReturnType<typeof removeApp>;

type ApplicationState = {
    ObjectIcon: IconType | null,
    ObjectName: string,
}

const initialStateApplication:ApplicationState[]  = [
    { ObjectIcon: RiFinderLine, ObjectName: '탐색기' },
    { ObjectIcon: RiTerminalBoxLine, ObjectName: '터미널' },
    { ObjectIcon: RiMailSendLine, ObjectName: '메일전송' },
    { ObjectIcon: RiProfileLine, ObjectName: '프로필' },
];

function applicationReducer(
    state: ApplicationState[] = initialStateApplication,
    action: ApplicationAction
) {
    switch (action.type) {
        case ADD_APP:
            return {};
        case REMOVE_APP:
            return {};
        default:
            return {};
    }
}

export default applicationReducer;