export const productTypes={
    setProductState:'[PRODUCT] Set Product State',
    setError:'[PRODUCT] Set Error',
    setCartState: '[CART] Set Cart State'
}

const productReducer=(state,action={})=>{
    switch(action.type){
        case productTypes.setProductState:
            return{
                ...state,
                product:action.payload,

            }
        case productTypes.setError:
            return{
                ...state,
                error:action.payload,
            }
        case productTypes.setCartState:
            
            return{
                ...state,
                cart:[...state.cart,action.payload],
            }
        default:
            return state
    }
}

export default productReducer