// import { IconType } from "react-icons/lib";
import { ApplicationTypes } from "../enum/applicationTypes";


import { RiFinderLine, RiProfileLine, RiMailSendLine, RiTerminalBoxLine, RiNumber1 } from "react-icons/ri";
import { IconType } from "react-icons";

export function getIconFromAppType(appType: ApplicationTypes ): IconType {
    // if (appType as ApplicationTypes) {
        switch (appType) {
            case ApplicationTypes.finder: return RiFinderLine;
            case ApplicationTypes.profile: return RiProfileLine;
            case ApplicationTypes.sendmail: return RiMailSendLine;
            case ApplicationTypes.terminal: return RiTerminalBoxLine;
            case ApplicationTypes.internet: return RiTerminalBoxLine;
        }
    // }
}
export function getIconFromString(showString: string, iconName: string, color: string): string {
    return (`
        "https://img.shields.io/badge/${showString}-${color}style=for-the-badge&logo=${iconName}}&logoColor=white
    `);
}
