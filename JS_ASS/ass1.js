let marks = Number(prompt(`Enter the marks of the student: `))
if (marks>90 && marks<=100){
    alert(`The grade  is A+ `)
}
else if(marks>=80 && marks<=90){
    alert(`The grade  is A `)
}
else if(marks>=70 && marks<80){
    alert(`The grade  is B+ `)
}
else if(marks>=50 && marks<70){
    alert(`The grade  is B `)
}
else if(marks>=40 && marks<50){
    alert(`The grade  is C+ `)
}
else if(marks>=35 && marks<40){
    alert(`The grade  is C `)
}
else if(marks<35){
    alert(`The grade  is Fail `)
}
else {
    alert(`Invalid score`)
}

