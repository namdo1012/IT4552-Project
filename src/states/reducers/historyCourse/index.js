import {STORE_HISTORY} from "../../actions/historyCourse/types";

const myState = {
    history : {}
}

export default (state = myState,{payload,type}) => {
    switch (type) {
        case  STORE_HISTORY :
            console.log('dissss')
            return {
                ...state,
                history: payload
            }
        default : return state
    }
}
