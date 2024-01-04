console.log("hello");

function ageInDays(){

    let year = prompt("enter your birth year");
    let age = (2021-year)*335;
    console.log(age);

     var h1 = document.createElement('h1');
     var ans = document.createTextNode("you are "+age+" days old");
     h1.setAttribute('id' , 'ageindays'); //h1 tag ki id bnane k liye hai ye result yha id h
     h1.appendChild(ans);
     document.getElementById('result').appendChild(h1);

}

function reset(){
document.getElementById('ageindays').remove();
}

