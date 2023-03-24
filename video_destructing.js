let arr = [1,2,3];
// arr.push(4)

let arr2 = [...arr,4]
console.log(arr2)

let obj = {
  name: "rose"
}

let obj2 = {...obj, ag:9, name:"Ted"}

let {name, age} = obj2

console.log(name)
console.log(age)

let [num1, num2, num3] = arr
console.log(num1)
console.log(num2)
console.log(num3)

let [color1, color2, color3] = ["red", "blue", "yellow"]
console.log(color1)
