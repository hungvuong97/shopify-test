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
        default: return state
    }
}