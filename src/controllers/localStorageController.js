class LocalStorageController {
  addData(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  readData(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  subscribe(callback) {
    // method for subscribing components on cart update
  }

  deleteData(key) {
    window.localStorage.removeItem(key)
  }
  
  subscribe(callback) {
   // method for subscribing components on local storage updates
  }

}

export default new LocalStorageController()
