const initalState = {
    data:{}
}

export default function (state = initalState, action){
    switch(action.type){
       case "ACTION_SAVE_PRODUCT_DESCRIPTION":
           return {
               ...state,
               data: action.data
           }
        case "ACTION_SAVE_CREATE_TAB_STATION":
            return {
                ...state,
                data: action.data
            }
        default: return state
    }
}