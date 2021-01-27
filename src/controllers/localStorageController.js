class LocalStorageController {
  addData(key, data) {
    if(typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(data))    
    }
  }

  readData(key) {
    if(typeof window !== 'undefined') {
      return JSON.parse(window.localStorage.getItem(key))
    }
  }


  deleteData(key) {
    if(typeof window !== 'undefined'){
      window.localStorage.removeItem(key)
    }
  }
}



export default new LocalStorageController()
