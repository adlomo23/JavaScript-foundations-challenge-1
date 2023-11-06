/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

//1. It returns "moo", because the logical operator && looks to the left, and it's for it that it returns "moo", because the boolean is true.

//2. It has no output, because the boolean is false.

//3. It has no output, because the or operator looks to the right, and because the boolean is true it has no necessity to evaluate the console.log

//4. It returns "bye frind", because the boolean is false, and the operator or, have the necessity to evaluate the console.log
