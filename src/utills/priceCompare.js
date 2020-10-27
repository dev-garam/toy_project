export const priceCompare = (priceSet, price) => {
    let result = false
    if (priceSet.st <= price && price <= priceSet.ed) {
        result =true
    }
    return result
}