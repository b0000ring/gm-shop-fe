export function addData(key, data) {
  if(typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(data))    
  }
}

export function readData(key) {
  if(typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key))
  }
}

export function deleteData(key) {
  if(typeof window !== 'undefined'){
    window.localStorage.removeItem(key)
  }
}

