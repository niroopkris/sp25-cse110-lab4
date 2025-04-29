# Javascript Answers

1. It will print `3` because `i` was declared as a `var` and is thus accessible after the for-loop. The for-loop broke when `i` became `3` and no longer fulfilled the condition, so that's why it prints `3`.
2. It will print `150` because `discountedPrice` was also declared as a `var` and is thus accessible outside the for-loop. In the final loop (at `i=2`), `discountedPrice` was set to be `prices[2] * (0.5)` which is just `150`.
3. It will print `150` because `finalPrice` was declared as a `var` and is thus accessible outside the for-loop. In the final loop (at `i=2`), `finalPrice` was set to be `Math.round(150 * 100) / 100` which is `150`.
4. This function will return the array `[50, 100, 150]` because it took each price in the parameter array, discounted it by half, and put it into a new array that was then returned. 
5. This will cause an error because `i` is a block-scoped variable that was defined as part of the for-loop block. Thus, trying to access it outside the loop causes an error.
6. Similar to above, this will cause an error because 'discountedPrice` is a block-scoped variable defined in the for-loop block. Trying to access it outside the loop causes an error.
7. It will print `150` without issue because `finalPrice` is a block-scoped variable defined within the function and outside any inner blocks, and is thus accessible anywhere in the function. And as explained in a previous question, `150` is just the value `finalPrice` was assigned before the for-loop ended.
8. This function will return the array `[50, 100, 150]` without issue. It took each price in the parameter array, discounted it by half, and put it into a new array that was then returned.
9. This will cause an error because `i` is a block-scoped variable that was defined as part of the for-loop block. Trying to access it outside the loop causes an error.
10. It will print `3` without issue because `length` is a block-scoped variable defined within the function and outside any inner blocks, and is thus accessible anywhere in the function. 
11. This function will also return the array `[50, 100, 150]` without issue. It took each price in the parameter array, discounted it by half, and put it into a new array that was then returned. No issues with scope or naming conflicts.
12.  
     - `students.name`
     - `students["Grad Year"]`
     - `students.greeting()`
     - `students["Favorite Teacher"].name`
     - `students.courseLoad[0]` 
13. 
