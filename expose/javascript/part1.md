# Javascript Answers

1. Prints `values added: 20`
2. Prints `final result: 20`
3. We should not use var because of it's function scope, which can cause issues like naming conflicts and scoping issues due to its ability to be accessed outside the block it was declared in. For people with experience in other languages, var is simply more trouble than it's worth, as block-scoped variables like let and const allow you to do the same things in a more intuitive manner and without the hassle. For example, if you wanted global scope, just declare a block-scoped variable outside all the functions. If you want a function-scoped variable, just declare a block-scoped variable within the function but outside any inner blocks.
4. Prints `values added: 20`
5. Returns an error because `result` is a block-scoped variable, so it no longer exists when the if-statement ends. Thus, when the `sumValues` function runs line 13, it will return an error as `result` is no longer in the scope.
6. The code returns an error because we try to assign a value to the constant variable `result` which has already been initialized with a value of 0.
7. Nothing is printed because the code never reaches this line (it returns an error at line 9).