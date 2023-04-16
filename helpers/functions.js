
const IsInCart = (state, id) => {
    // return true or false
    const result = !!state.selected.find(item => item.id === id)
    return result
}

const QuantityCount = (state, id) => {
    // return the index of product
    const index = state.selected.findIndex(item => item.id === id)

    if (index === -1) {
        return false
    } else {
        return state.selected[index].quantity
    }
}

export { QuantityCount, IsInCart }