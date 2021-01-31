# Part 1. Intro to Javascript

1) Line 11 will print the length of prices - 1 because it was declared within the scope of the function
2) Line 12 will print the final discountedPrice that was calculated within the scope of the for loop and it is within the scope of the function (unrounded)
3) Line 13 will print the final finalPrice that was calculated within the scope of the for loop and it is within the scope of the function (rounded)
4) [50,100,150] because each number is multiplied by 0.5. Each halved price will be pushed to discounted and the array will be returned. (ignore rounding bc exact numbers)
5) ReferenceError because the declaration of i with let was in the scope of the for loop
6) ReferenceError because the declaration of discountedPrice with let was in the scope of the for loop
7) The last price in discounted will be logged bc let was in the same scope as the log statement
8) [50,100,150] because the functions works the same way as in part 1, the scope of the variables is the only thing that differs, but since discounted is declared within the scope of the function and not within the for loop, it will return as expected.
9) ReferenceError because the declaration of i was in the scope of the for loop.
10) ReferenceError because the declaration of discountedPrice was within the scope of the for loop.
11) The console will print 0 because finalPrice is a const that was set to 0 at the beginning of the function.
12) [0,0,0] because finalPrice was defined to be 0 and can't be modified within the scope of the function, so a push to discounted will add 0 to the array.
13) 1. student.name
    2. student["Grad Year"]
    3. student.call(greeting)
    4. student["Favorite Teacher"].name
    5. student.courseLoad[0]
14) 1. 5 because 3 is automatically converted to a number because of '+'
    2. 1 because 3 is automatically converted to a number because of '-'
    3. 3 because null is automatically converted to 0
    4. 3null because 3 is a string so null is automatically converted and concatenated to 3
    5. 4 because true is automatically converted to the number 1 because of '+'
    6. 0 because false and null both automatically convert to 0
    7. 3undefined because 3 is a string so undefined is automatically converted to a string and concatenated to 3
    8. NaN because undefined is not a number so subtracting from it is undefined and converted to NaN
15) 1. true because 2 is greater than 1 once it is converted to a number
    2. true because 2 and 12 are both converted to numbers and 2 is less than 12
    3. true because the number and string 2 are the same values
    4. false because the two are different types of data
    5. false because true's numerical value is 1 which is not equal to 2
    6. true because 2 is converted to true which would equal true on the right side 
16) == automatically converts both sides to numbers and === checks types and returns false if they're different, only returning true if both types
17) "How are you?" gets printed because == converts true into a number, 2 is not equal to 1,, so the next if (else if) statement is reached. 2 is evaluated as a boolean expression and is tbus true, so the second log statement is printed. 
19) For every element in [1,2,3] a new element is added to newArr based on the output of doSomething as its input. doSomething takes its input and calls it with param input + 2. The first iteration results in 6, second iteration in 8m and third iteration in 10, so newArr is returned as [6,8,10]
21) 1 3 4 2
