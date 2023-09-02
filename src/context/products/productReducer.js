export const productTypes={
    setProductState:'[PRODUCT] Set Product State',
    setError:'[PRODUCT] Set Error',
    setCartState: '[CART] Set Cart State',
    deleteCartProduct:'[CART] delete Cart Product',
    updateCartProduct:'[CART] update Cart Product'
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

        case productTypes.deleteCartProduct :
            return{
                ...state,
                cart:action.payload,
            }
        case productTypes.updateCartProductCartProduct :
            return{
                ...state,
                cart:[action.payload],
            }
        default:
            return state
    }
}

export default productReducer