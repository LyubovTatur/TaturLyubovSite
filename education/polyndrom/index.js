function polyndrom(word){
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
    
}

console.log(polyndrom('lokokol')) //true
console.log(polyndrom('loekokol')) //false
console.log(polyndrom('loFkFol')) //true
console.log(polyndrom('loFkfol')) //true
console.log(polyndrom('loFkFlol')) //false
