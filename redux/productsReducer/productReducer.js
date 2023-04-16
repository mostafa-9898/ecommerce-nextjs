let initialState = {
    itemsCounter: 0,
    selected: [],
    total: 0
}

if (typeof window !== 'undefined') {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify(initialState))
        const cart = localStorage.getItem('cart')
        initialState = JSON.parse(cart)
    } else {
        const cart = localStorage.getItem('cart')
        initialState = JSON.parse(cart)
    }
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)
    let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
    return { itemsCounter, total }
}


const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            // const exist = state.selected.find(element => element.id == action.payload.id)
            if (!state.selected.find(element => element.id === action.payload.id)) {
                action.payload.quantity = 1
                state.selected.push(action.payload)
                const { itemsCounter, total } = sumItems(state.selected)
                state.itemsCounter = itemsCounter
                state.total = total
                localStorage.setItem('cart', JSON.stringify(state))
                return {
                    ...state
                }
            }
            return state
        }


        case 'PLUS': {

            const indexI = state.selected.findIndex(element => element.id == action.payload.id)
            state.selected[indexI].quantity++

            const { itemsCounter, total } = sumItems(state.selected)
            state.itemsCounter = itemsCounter
            state.total = total

            localStorage.setItem('cart', JSON.stringify(state))

            return {
                ...state
            }
        }

        case 'MINUS': {

            const indexI = state.selected.findIndex(element => element.id == action.payload.id)
            state.selected[indexI].quantity > 0 && state.selected[indexI].quantity--

            const { itemsCounter, total } = sumItems(state.selected)
            state.itemsCounter = itemsCounter
            state.total = total
            localStorage.setItem('cart', JSON.stringify(state))
            return {
                ...state
            }
        }

        case 'REMOVE': {
            const newselected = state.selected.filter(element => element.id !== action.payload.id)
            state.selected = newselected
            const { itemsCounter, total } = sumItems(state.selected)
            state.itemsCounter = itemsCounter
            state.total = total
            localStorage.setItem('cart', JSON.stringify(state))
            return {
                ...state
            }
        }

        case 'CLEAR': {
            let clearState = {
                itemsCounter: 0,
                selected: [],
                total: 0
            }

            localStorage.setItem('cart', JSON.stringify(clearState))

            return clearState
        }

        default:
            return state

    }
}

export default ProductReducer;