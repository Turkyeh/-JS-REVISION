// Ex1: Write a function that takes a number as input and returns true if the number is less than or equal to zero, otherwise return false.
// let x=document.createElement.
let x =prompt("Please enter name1 ");


function Number(x) {
  if (x <= 0) {
    return true;
  } else
    return false;
};

console.log(Number(x));
console.log("*********************");


// Ex2: Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)

function Next(NUM1) {
    return NUM1 + 1;
}
console.log(Next(5));
console.log("*********************");


// Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers.
function numInStr(arr) {
    return arr.filter(function (elmt) {
        return elmt.match(/\d/)
    })
}
console.log(numInStr(['TUo', 'Turkyeh12', '34aYOU', 'bar']))



// You can shorten your code considerably by using .filter() to filter out the elements containing numbers, and using .match() to test whether the elements contain a number.
// Array [ "ab12", "34asdf" ]


console.log("*********************");

// Ex4: Develop a JS Code to check if a number is even or odd using recursion 
function is_even_recursion(number)
{
  if (number < 0) 
  {
    number = Math.abs(number);
  }
  if (number===0) 
  {
    return true;
  }
  if (number===1) 
  {
    return false;
  }
  else 
  {
    number = number - 2;
    return is_even_recursion(number);
  }
}
console.log(is_even_recursion(234)); //true

console.log("*********************");

// Ex5: Write a function to swap all instances of string ch1 with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

function swap(NUM1,NUM2)
{
    let Temp;
    Temp=NUM1;
    NUM1=NUM2;
    NUM2=Temp;
    console.log('name1 =',NUM1 ," " ,'name2 =',NUM2  )
}

let NUM1 =prompt("Please enter name1 ");
let NUM2 =prompt("Please enter name2 ");
swap(NUM1, NUM2);

console.log("*********************");


// Ex6: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]
function array(arr1)
{
   for(let i =0 ; i < arr1.length;i++)
   {
       console.log(arr1[i]);
   }
}

arr1= ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]
array(arr1);


console.log("*********************");
// Ex7: Use forEach to  Return all the names in the previous array
arr1.forEach(element => console.log(element));

console.log("*********************");

// Ex8: Project an array of series into an array of {id, title} pairs using forEach()
// A projection is a process of applying a function to an existing value to produce a new value.

// function() {
// 	let newSeries = [
// 			{
// 				"id": 70111470,
// 				"title": "Die Hard",
// 				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
// 				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 				"rating": [4.0],
// 				"bookmark": []
// 			},
// 			{
// 				"id": 654356453,
// 				"title": "Bad Boys",
// 				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
// 				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 				"rating": [5.0],
// 				"bookmark": [{ id: 432534, time: 65876586 }]
// 			},
// 			{
// 				"id": 65432445,
// 				"title": "The Chamber",
// 				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
// 				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 				"rating": [4.0],
// 				"bookmark": []
// 			},
// 			{
// 				"id": 675465,
// 				"title": "Fracture",
// 				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
// 				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 				"rating": [5.0],
// 				"bookmark": [{ id: 432534, time: 65876586 }]
// 			}
// 		         ],
		
//                  }
		
function idAndTittle(array) {
  result = [];
  array.forEach((ele) => {
    // eleObject = JSON.parse(ele);
    result.push({ id: ele.id, title: ele.title });
  });
  return result;
}

console.log(idAndTittle(newSeries));

console.log("********************");

// Ex 9: Use map() now to implement the same previous functionality
 function Series(newSeries) 
{
    
    let Series = newSeries.map((sweetItem) => {
        return sweetItem });
        console.log(Series)
}
console.log("********************");

// Ex 10: Use filter() to return the series with a rating under 5 
Q10
let q10 = newSeries.filter((value, index, array) => {
    if (value['rating'] < 5) {
        return value;
    };
});
console.log(q10);
console.log("********************");


// Ex 11: Use reduce()  function to return the longest string in an array of strings.
// ["Java", "JavaScript", "Python", "C++", "PHP"]
function longestSTR(arr) {
  return arr.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
  });
}
console.log(longestSTR(["Java", "JavaScript", "Python", "C++", "PHP"]));


// 