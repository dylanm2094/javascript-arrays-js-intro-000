var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']

function addElementToBeginningOfArray(array,n){
  var array2 = [n,...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array,n){
  array.unshift(n)
  return array
}

function addElementToEndOfArray(array,n){
  var array2 = [...array,n]
  return array2
}

function destructivelyAddElementToEndOfArray(array,n){
  array.push(n)
  return array
}
