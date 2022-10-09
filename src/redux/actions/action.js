export const setLoginStatusTrue = (data) => {

    return {
        type: 'true',
        payload: data
    }
}


export const setLoginStatusFalse = (data) => {

    return {
        type:'false',
        payload: data
    }
}