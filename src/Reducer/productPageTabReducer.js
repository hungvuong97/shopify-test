const initalState = {
    data:{}
}

export default function (state = initalState, action){
    switch(action.type){
        case "ACTION_SAVE_ACTIVE_TAB":
            return {
                ...state,
                data: action.data
            };
        case "ACTION_SAVE_DEFAULT_TAB":
            return{
                ...state,
                data: action.data
            }
        case "ACTION_SAVE_All_TAB":
            return {
                ...state,
                data: action.data
            }
        case "actionSaveCreateTab":
            return {
                ...state,
                data: action.data
            }
        default: return state
    }
}