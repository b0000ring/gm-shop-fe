function getItemsWord(count) {
  if(count === 0 || count > 4) {
    return 'товаров'
  } else if(count === 1) {
    return 'товар'
  } else {
    return 'товара'
  }
}

export default getItemsWord