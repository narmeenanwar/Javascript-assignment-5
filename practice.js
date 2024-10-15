// var count = 1
// function foo(){}


var str = 'Narmeen Anwar';
var numChars = str.length;

for (var i = 0; i < numChars; i++) {
if (str.slice(i, i + 2) === " ") {

alert("No double spaces!");
break;
}
}

// question 2
function averageFunction(m1,m2,m3){
    var average = m1 + m2 + m3
    return average
}

function percentageFunction(m1,m2,m3, averageFunction){
    var totalMarks = 100;
    var allSubjectMarks = 300
    var givenMarks = (averageFunction(m1,m2,m3) / allSubjectMarks * totalMarks);
    givenMarks = Math.round(givenMarks)
    return givenMarks
}
function result(m1,m2,m3){
   var percentage =  percentageFunction(40,50,50, averageFunction)   
   document.write('<br>', "Total marks is: ",percentage + '%', "<br>");
   
}
result(40,50,50)

// question 3
function findOf(text,searchValue){
    let sentance = text;
    for(var i = 0; i < sentance.length; i++){
     var diff = sentance.slice(i, i + searchValue.length)
     if(diff == searchValue){
        document.write(i, diff);
        
     }
      
    }
}
findOf('Hello world, welcome to the universe.','welcome')

function isVovel(char){
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true
        default:
            return false
    }

}

// question4
function charCheck(textLine, isVovel){
    var count = 0;
    var i = 0;
    
    while(i < textLine.length){
        if(isVovel(textLine[i])){
            if(isVovel(textLine[i + 1])){
                count++
                document.write('Found a pair:', textLine[i], textLine[i + 1], 'Count:', count, "<br>");
            }
            
        }
        i++
    }

    return count
}
var text = 'Pleases read this application and give me gratuity'; 
var result = charCheck(text, isVovel)
document.write('<br>','Total number of consecutive vowel pairs:', result,'<br>');



// question 5
function calculateWorked(){
    var worked = +prompt('Enter a hour of works')
    var dailyWorkHour = 40

    if(worked > 40){
       var diff = worked - dailyWorkHour
       var overtimePay = diff * 12
       return overtimePay
    }
}
var totalResult = calculateWorked()
document.write(totalResult);



// question 6
function checkVovels(paraLetter){
    if(paraLetter == 'a' ||paraLetter == 'e' || paraLetter == 'i' ||paraLetter == 'o' ||paraLetter == 'u' ||paraLetter == 'A' ||paraLetter == 'E' ||paraLetter== 'I' ||paraLetter == 'O' ||paraLetter == 'U'){
        return true
    }else{ return false}
} 

function removeVovels(para, Letter){
    var diff = ''
    var allVoVels = ''

    if(para.length < 25){

    for(var i = 0; i < para.length; i++){
        if(Letter(para[i])){
            
            para.replace(para[i], '')
        }else{
            diff += para[i]
        }
    }
}
document.write('vovels remove from sentance ',diff,'<br> <br>');


}

removeVovels('this is a an apple', checkVovels)