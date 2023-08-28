export const types={
    setProductState:'[PRODUCT] Set Product State',
    setError:'[PRODUCT] Set Error',
    setCartState: '[CART] Set Cart State'
}

const productReducer=(state,action={})=>{
    switch(action.type){
        case types.setProductState:
            return{
                ...state,
                product:action.payload,

            }
        case types.setError:
            return{
                ...state,
                error:action.payload,
            }
        case types.setCartState:
            return{
                ...state,
                cart:action.payload,
            }
        default:
            return state
    }
}

export default productReducer