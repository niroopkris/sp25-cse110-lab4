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
    - `"32"` since the integer `2` is turned into a string and concatenated with `"3"`
    - `1` since the string `"3"` is turned into an integer so it can be subtracted by `2`
    - `3` since `null` maps to 0 and is added to `3`
    - `3null` since `null` is mapped to a string so it can concatenated with `"3"`
    - `4` since `true` maps to the integer `1` so it can be added to `3`
    - `0` since both `false` and `null` map to the integer 0, and thus sum to 0
    - `3undefined` since `undefined` maps to a string and is concatenated with `"3"`
    - `NaN` since for math operations, `undefined` becomes `NaN` and is thus what is returned
14. 
    - `true` since `"2"` becomes an integer and `2 > 1`
    - `false` since dictionary comparison is used (as both are strings), and character `"2"` is greater than character `"1"` 
    - `true` since `"2"` is converted to an integer `2`
    - `false` since this is a stricter type-checking equality, and `2` and `"2"` are different types
    - `false` since `true` maps to the integer `1` and `1 != 2`
    - `true` since `Boolean(2)` results in the boolean `true`
15. `==` doesn't have strict type-checking unlike `===`, so you can compare different data types and sometimes get a `true` result due to Javascript mapping variables to other types to make the comparison possible. `===` will return `false` ALWAYS if the two variables are different data types.
17. The resulting array returned is `[2,4,6]`. Within `modifyArray` we loop through each element in the array `[1,2,3]` and then pass each element as an argument to the `doSomething` function before adding it to our new array. The function will return the element multiplied by 2. Thus, we get `[2,4,6]`
19. The output is the code block below:
```
1
4
3
2
```


