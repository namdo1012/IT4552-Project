import {LOGIN_SUCCESS} from "../../actions/user/types";

const myState = {
    userInfor : []
}

export default (state = myState,{payload,type}) => {
    switch (type) {
        case  LOGIN_SUCCESS :
            console.log('dispatch')
            return {
                ...state,
                userInfor: payload
            }
        default : return state
    }
}
