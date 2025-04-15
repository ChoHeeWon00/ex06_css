//authModule.js
const initalState = {
    login : {username : '', password : ''},
    register : {username : '', password : '', role:"",file:null},
    loading : false,
    error : null,
    data : null,
    modify : {username : '', password : '', role:""},
}
const reducer = (state , action) => {
    switch (action.type) {
        case "MODIFY" : return { ...state, modify : action.data }
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