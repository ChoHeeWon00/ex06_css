//authModule.js
const initalState = {
    login : {username : '', password : ''},
    register : {username : '', password : '', role:""},
    loading : false,
    error : null,
    data : null,
}
const reducer = (state , action) => {
    switch (action.type) {
        case "LIST" : return {...state, data : action.data }
        case "INITALSTATE" : return initalState;
        case 'CHANGE_INPUT':
            return {...state,
                [action.form]:{...state[action.form],
                                    [action.name]:action.value} };
        case 'LOADING':
            return { ...state, loading : true, error : null };
        case 'FINISHED':
            return { ...state, loading : false, error : null };
        case 'ERROR':
            return { ...state, loading : false, error : action.error };
        default:
            return state;
    }
}
export {reducer, initalState};