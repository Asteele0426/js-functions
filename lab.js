const maxOfThree = function(num1, num2, num3){
    //if num1 is greater than or equal to num2
    //AND if num1 is greater than or equal to num3
    if (num1 >= num2 && num1 >= num3) return num1
    else if (num2 >= num1 && num2 >= num3) return num2
    else return num3
    console.log(5, 7, 9)
}