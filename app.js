// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.













// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.



let findArrEqualVal = (arr , val) => {
    return arr.filter((element) => {
        console.log(element === val);
    }).length > 0 ;
}


let myArr = [1 , 3 ,4 , 6 ,7 ,8 , 9 , 10];

let searchVal = prompt("Enter Value ... 1 to 10");

if (findArrEqualVal(myArr , searchVal)) {
    console.log("Value Found ...");
}
else{
    console.log("Value Not Found !!!");
    
}



// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


// let addParagrapgh = (text) => {
//     let newPara = document.createElement("p");
//     let textNode = document.createTextNode(text) ;

//     let textAppendParaElement =  newPara.appendChild(textNode);
//     document.body.appendChild(textAppendParaElement);
// }

// addParagrapgh(prompt("Enter Paragrapgh Text ...."));


// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// let addUlfunc = (liText) => {

//     let getUl = document.querySelector(".unordered-list");
//     console.log(getUl);

//     let addli = document.createElement("li");
//     let listText = document.createTextNode(liText);
//     // append list Text in li Tag
//     addli.appendChild(listText);
//     // append li in ul
//     getUl.appendChild(addli);

// }

// addUlfunc(prompt("Enter List Text 1 ... "));



// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


// let bgChnange = () => {
    
//     let pak_heading = document.getElementById("pak-heading")
//     pak_heading.style.backgroundColor = "#F18F01" ;
//     pak_heading.style.color = "#0D0106";

//     setInterval(() => {
        
//     let bgcolor = Math.floor(Math.random()*16777215).toString(16);
//     let textcolor = Math.floor(Math.random()*16777215).toString(16);

//         pak_heading.style.backgroundColor = "#" + bgcolor ;
//         pak_heading.style.color = "#" + textcolor;
//     } , 500)
// }

// bgChnange()


// /////////////////////////////////////////////////////////////////////////////////////////////////////


// let pak_heading = document.getElementById("pak-heading")

// pak_heading.style.backgroundColor = "#F18F01" ;
// pak_heading.style.color = "#0D0106";

// let bgChnange = (elem , color) => {

//     pak_heading.style.backgroundColor = color ;

   
// }

// bgChnange(pak_heading , prompt("Enter BG color Name ..."))



// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store


// let storeObj = (key , obj) => {

//     localStorage.setItem(key, JSON.stringify(obj))

// }

// let students = [
//     { name : "Mubashir" , fName : "M.Ibrahim" , rollNo : 786 , course : "Mern Stack Dev"},
// ]

// storeObj("students" , students);


// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


// let getObj = (key) => {

//     let getObjFromLocal = localStorage.getItem("students")

//     let getconvertInToObj = JSON.parse(getObjFromLocal)

//     // console.log(getObjFromLocal);
//     // console.log(getconvertInToObj);

//     return getconvertInToObj ;

// }

// let getObjFinalOutput = getObj();
// console.log(getObjFinalOutput);



// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.




// let prevStud = localStorage.getItem("students");
// let studentsData = prevStud ? JSON.parse(prevStud) : [ ];

// let provideStudent = () => {
//     let std = {
//         name :  prompt("Enter Name :"), 
//         rollNo : +prompt("Enter Roll No :") , 
//         teacher : prompt("Enter Your Teacher's Name : "),
//         courseClass : prompt("Enter Your  Course Name : ")
//     }

//     studentsData.push(std)
//     // console.log(studentsData);
//     let strigify = JSON.stringify(studentsData)
//     localStorage.setItem("students" , strigify )

// }

