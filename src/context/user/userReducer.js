export const types={
    setUserState:'[USER] Set User State',
    setError:'[USER] Set Error',
    setLogout:'[USER] SET logout',
}

const userReducer=(state,action={})=>{
    switch(action.type){
        case types.setUserState:
            return{
                ...state,
                user:action.payload,

            }
        case types.setError:
            return{
                ...state,
                error:action.payload,
            }

        case types.setLogout:
            return null
        default:
            return state
    }
}

export default userReducer