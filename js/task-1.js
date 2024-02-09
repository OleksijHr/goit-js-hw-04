function isEnoughCapacity(products, containerSize) {
    const arryQuantity = Object.values(products);
    let quantity = 0;
    for (let i = 0; i < arryQuantity.length; i++) {
        quantity += arryQuantity[i];
    }
    return quantity <= containerSize ? true : false;
}