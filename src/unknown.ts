let w: unknown = 5
w = "jello"

w = {
  ranNonExistMethod: () => {
    console.log('hello')
  }
} as { ranNonExistMethod: () => void }

// w.ranNonExistMethod() // error - object is of type undefined

if (typeof w === 'object' && w !== null) {
  (w as {ranNonExistMethod: () => void }).ranNonExistMethod()
}


// never effectively throws an error whenever it is defined.
