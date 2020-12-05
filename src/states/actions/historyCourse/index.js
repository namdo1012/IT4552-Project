import {STORE_HISTORY} from "./types";

export const storeHistory = (payload) => {
    return {
        type: STORE_HISTORY,
        payload
    }
}
