import { ATTEMPT_RIGHT,ADD_POST,DELETE_POST,EDIT_POST,Add_ORDER } from "./constants"
export function attemptRight(item){
    return {
        type:ATTEMPT_RIGHT,
        data:item
    }
}

export function addOrder(item){
    return {
        type:Add_ORDER,
        data:item
    }
}

export function addPost(item){
    return {
        type:ADD_POST,
        data:item
    }
}



export default{ attemptRight,addPost};

