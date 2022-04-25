import { IconType } from "react-icons/lib";
import { ApplicationTypes } from "../enum/applicationTypes";


import { RiFinderLine, RiProfileLine, RiMailSendLine, RiTerminalBoxLine } from "react-icons/ri";

function getIconFromAppType(appType: ApplicationTypes) {
    switch (appType) {
        case ApplicationTypes.finder: return RiFinderLine;
        case ApplicationTypes.profile: return RiProfileLine;
        case ApplicationTypes.sendmail: return RiMailSendLine;
        case ApplicationTypes.terminal: return RiTerminalBoxLine;
    }
}

export default getIconFromAppType;