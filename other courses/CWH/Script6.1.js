let a = [ 5, 8 , 3 , 64 , 68, 2, 58, 15, 589 ];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}
console.log(a.length);

//Arrays are mutable
a[3]=4;
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

//Array methods

//1. Removes a element from last and returns that element.
console.log(a.pop());
//2. Removes a element from front and returns that element.
console.log(a.shift());
//3. Adds a element to front and returns that.
a.unshift(74);
console.log(a);
//4. Adds a element to last and returns that.
a.push(81);
console.log(a);
// 5. Delete element at an index (still memory eill be allocated it though is remains empty)
delete a[2];
console.log(a);
// 6. Sort the array alphabatically(Dictionary wise) and numbers also dictionary wise
a.sort()
console.log(a);
// 7. Remove element from certain index and replace it with new elements
// syntax arrayname.splice(index,no. of elements to remove, no. of elements to add from that index onwords seperated by commas)
a.splice( 2, 4 , 79,78,77,76)
console.log(a);
// 8. Creates new array from given index onwards up the another given index(if this index isn't given then it will print array till last by default)
console.log(a.slice(2,7));
// 9. Reverses the element in the source array
console.log(a.reverse());