const ADD_WINDOW = 'window/ADD_WINDOW' as const;
const REMOVE_WINDOW = 'window/REMOVE_WINDOW' as const;

export const addWindow = (diff: {windowName: string; windowType: string;}) => ({
    type: ADD_WINDOW,
    payload: diff,
});
export const removeWindow = (diff: {windowName: string;}) => ({
    type: REMOVE_WINDOW,
    payload: diff,
});

type WindowAction = 
    | ReturnType<typeof addWindow>
    | ReturnType<typeof removeWindow>;

type WindowState = {
    windowName: string;
    windowType: string;
    windowKey: string;
    nowPosition: {x: number, y: number},
    clickStartPosition: {x: number, y: number},
}

const initialStateWindow: WindowState[] = [];

function windowReducer(
    state: WindowState[] = initialStateWindow,
    action: WindowAction,
) {
    switch (action.type) {
        case ADD_WINDOW:
            return {};
        case REMOVE_WINDOW:
            return {};
        default:
            return {};
    }
}

export default windowReducer;