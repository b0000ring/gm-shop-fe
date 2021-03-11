import { toast } from 'react-toastify'

import * as localStorageController from './localStorageController'
import localStorageKeys from 'src/constants/localStorageKeys'

const subscriptions = {}
const MAX_ITEMS = 9

export function addItem(data, count, color) {
  const items = getItems()
  const existingItem = items.findIndex(item => item.data.id === data.id && item.color === color)
  if (existingItem !== -1) {
    if(items[existingItem].count + count > MAX_ITEMS){
      toast.error('Товар не добавлен! Превышено максимальное число для этого товара.')
      return
    }
    items[existingItem].count = parseInt(items[existingItem].count, 10) + parseInt(count, 10)
  } else {
    items.push({ data, count, color })
  }
  localStorageController.addData(localStorageKeys.selectedItems, items)
  callSubs()
  toast.success('Товар добавлен в корзину!')
}

export function clear() {
  localStorageController.deleteData(localStorageKeys.selectedItems)
  callSubs()
}

export function removeItem(id) {
  const items = getItems()
  const index = [...items].findIndex(item => item.data.id === id)
  if(index !== -1) {
    items.splice(index, 1)
    localStorageController.addData(localStorageKeys.selectedItems, items)
    callSubs()
  }
}

export function  getItems() {
  return localStorageController.readData(localStorageKeys.selectedItems) || []
}

export function  getTotalSum() {
  const items = getItems()
  return items.reduce((acc, val) => acc + (val.data.newPrice || val.data.price) * val.count, 0)
}

export function  subscribe(id, callback) {
  subscriptions[id] = callback
}

function callSubs() {
  Object.keys(subscriptions).forEach(key => {
    subscriptions[key]()
  })
}

export function unsubscribe(id) {
  delete subscriptions[id]
}

