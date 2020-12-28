import localStorageController from './localStorageController'
import localStorageKeys from 'src/constants/localStorageKeys'

const subscriptions = {}

export function addItem(data, count, color) {
  const items = getItems()
  const newItems = [...items]
  const existingItem = items.findIndex(item => item.data.id === data.id && item.color === color)
  if (existingItem !== -1) {
    newItems[existingItem].count = parseInt(newItems[existingItem].count, 10) + parseInt(count, 10)
  } else {
    newItems.push({ data, count, color })
  }
  localStorageController.addData(localStorageKeys.selectedItems, newItems)
  callSubs()
}

export function removeItem(id) {
  const items = this.getItems()
  const index = items.findIndex(item => item.data.id === id)
  items.splice(index, 1)
  localStorageController.addData(localStorageKeys.selectedItems, items)
  callSubs()
}

export function  getItems() {
  return localStorageController.readData(localStorageKeys.selectedItems) || []
}

export function  getTotalSum() {
  const items = this.getItems()
  return items.reduce((acc, val) => acc + val.data.price * val.count, 0)
}

export function  subscribe(id, callback) {
  subscriptions[id] = callback
  console.log(subscriptions)
}

function callSubs() {
  console.log(subscriptions)
  Object.keys(subscriptions).forEach(key => {
    subscriptions[key]()
  })
}

export function unsubscribe(id) {
  delete subscriptions[id]
}

