"use strict";

//Problem 1
function LargeInteger(int1, int2){

  
var large = int1;
    if(int2 > int1){
        large = int2;
    }
    return large;
    
}

//Problem 2
function SortNumbers(num1, num2, num3){
  
    
    if(num2 > num1){
        if(num2 > num3){
            if(num1 > num3){
                alert(num3 + ", " +num1 +", " +num2);
            }
        }
        
    }
    
    if(num2 > num1){
        if(num2 > num3){
            if(num3 > num1){
                alert(num1 + ", " +num3 +", " +num2);
            }
        }
        
    }
    
    if(num1 > num2){
        if(num1 > num3){
            if(num2 > num3){
                alert(num3 + ", " +num2 +", " +num1);
            }
        }
        
    }
    
    if(num1 > num2){
        if(num1 > num3){
            if(num3 > num2){
                alert(num2 + ", " +num3 +", " +num1);
            }
        }
        
    }
    
    
    if(num3 > num1){
        if(num3 > num2){
            if(num1 > num2){
                alert(num2 + ", " +num1 +", " +num3);
            }
        }
        
    }
    
    
    if(num3 > num1){
        if(num3 > num2){
            if(num2 > num1){
                alert(num1 + ", " +num2 +", " +num3);
            }
        }
        
    }
    
   
}

//Problem 3
function LargestNumber(no1, no2, no3, no4, no5){
    var largest = no1;
    if(no2 > largest){
        largest = no2;
    }
    if(no3 > largest){
        largest = no3;
    }
    if(no4 > largest){
        largest = no4;
    }
    if(no5 > largest){
        largest = no5;
    }
    alert(largest);
}

//Problem 4
function EvenOdd(){
    var num;
    for(var i = 0; i < 15; i++){
         
        num =(i % 2 == 0)? "Even" : "Odd";
        alert(num);
    }
   
    
}

//Problem5
function FizzBuzz(){
    for(var i = 1; i < 100; i++){
        if((i % 5 == 0) && (i % 3 == 0)){
            alert("fizzbuzz");
        }
        if(i % 3 == 0){
            alert("fizz");
        }
        if(i % 5 == 0){
            alert("buzz");
        }
    }
}

//Problem 6
function Multiples3(){
    var increment = 0;
    for(var i = 1; i < 1000; i++){
        if( i % 3 == 0){
            increment += 1;
        }
    }
    alert("There are "+increment +" numbers from 1 to 1000 that are divisible by 3");
}

//Problem 7


var employee = {
Name: "Nathan",
ID: "E045",
Title: "BA",
Login: function(){
	return this.Name +" "+ this.ID;
}
};

function Employee(name, id, title){
this.Name = name;
    this.ID = id;
    this.Title = title;
}

var myemp = new Employee("Grace", "1284", "CSR");


