//Problem 1
function Today() {
    var day = new Date();
//    day.getFullYear();
//    day.getDate();
    return day.(getMonth() + 1) + "/" + day.getDate + "/" + day.getFullYear();
}

//Problem 2
function IsLeapYear(input) {
    var year = "Not Leap Year";
    if (input % 4 === 0) {
        if (input % 100 === 0) {
            if (input % 400 === 0) {
                year = "Leap Year";
            }
        } else {
            year = "Leap Year";
        }
    }
    
    return year;

}

//Problem 3
function IsConsecutive(arr) {
    
    for(var i =0; i < 4; i++){
        var consecutive = false;
        if(arr[0] < arr[1]){
            if(arr[1] < arr[2]){
                if(arr[2] < arr[3]){
                    if(arr[3] < arr[4]){
                        consecutive = true;
                    }
                }
            }
            
        }
    }
    return consecutive;

}

//Problem 4

//Problem 5
function FirstElement(arr, n){
    if(n == null){
        return arr[[0]];
    }
    if(n < 0){
        return arr[[]];
    }
    else{
        for(var i = 0; i < n; i++){
            arr[[i]];
        }
    }
}

//Problem 6
var myColor = ["Red", "Green", "White", "Black"];
var myString = myColor;
console.log(myString);

//Problem 10
function Reverse(word){
    var reversed = "y";
    for(var i = word.length; i > 0; i--){
        reversed += word[i];
    }
    return reversed.substring(1);
}

//Problem 13
var sorted;
function Alphabetical(str){
    sorted = str.sort();
    return sorted;
}



