// Lesson5PracticeProblems

// Adds a message to users to refresh page. 
function refreshIt() 
{
	document.write("<br><br>");
	document.write("<b>Please refresh the page to continue.</b>");
	document.write("<br>");
}

// *********************************************************************

/* 1.	Write 4 arithmetic functions that return a value for bitwise AND, OR, XOR, 
left shift, and  right shift of two numbers.  Each function should have two 
parameters.  Prompt the user for both numbers and output the results of each 
operation. */

// Calls the function when the "Problem 1" button is clicked.
function problem1() {
	document.getElementById("problem1")

	function bitwiseAnd(x, y)	{
		return x & y;
	}

	function bitwiseOr(x, y) {
		return x | y;
	}

	function bitwiseXOR(x, y) {
		return x ^ y;
	}

	function bitwiseLeftShift(x, y) {
		return x << y;
	}

	function bitwiseRightShift(x, y) {
		return x >> y;
	}
	
	var num1 = Number(prompt("Enter number 1."));
	var num2 = Number(prompt("Enter number 2."));

	// Writes the entered numbers to the screen.
	document.write("<b>Your numbers are num1 = </b>" + num1 + "<b>, num2 = </b>" + num2);
	
	// Writes the answer to bitwiseAnd
	document.write("<br>");
	document.write("<br>num1 & num2 = " + bitwiseAnd(num1, num2));
	document.write("<br>");

	// Writes the answer to bitwiseOr
	document.write("<br>");
	document.write("num1 | num2 = " + bitwiseOr(num1, num2));
	document.write("<br>");

	// Writes the answer to bitwiseXOR
	document.write("<br>");
	document.write("num1 ^ num2 = " + bitwiseXOR(num1, num2));
	document.write("<br>");

	// Writes the answer to bitwiseLeftShift
	document.write("<br>");
	document.write("num1 << num2 = " + bitwiseLeftShift(num1, num2));
	document.write("<br>");

	// Writes the answer to bitwiseRightShift
	document.write("<br>");
	document.write("num1 >> num2 = " + bitwiseRightShift(num1, num2));

	// Call function to write message to the screen for the user to refresh the page.
	refreshIt();
	
}


// *********************************************************************

/* 2.	Write a function that removes all occurrences of a substring.  
(Hint: You will have to use builtins for strings “abc123abc”split(“abc”).join(“”)).  
Prompt the user for both strings. */

// Calls the function when the "Problem 2" button is clicked.
function problem2() {
	document.getElementById("problem2")

	function removeSubstring(text, subStr) {
		return text.split(subStr).join("");
	}

	var text = prompt("Please enter some text.");
	var subStr = prompt("Please enter part of the text to remove.");

	document.write(removeSubstring(text, subStr));
	
	refreshIt();
}


// *********************************************************************

/* 3.	Write a function that repeats the string “I am awesome.”  
Prompt the user for the number of repetitions and output the string to 
via document.write().  (Hint: string builtin repeat().)*/

// Calls the function when the "Problem 3" button is clicked.
function problem3() {
	document.getElementById("problem3")

	var phrasing = ("I am awesome.  ")
	var repnum = prompt("Please enter the numer of repetitions.");
	
	document.write(phrasing.repeat(repnum));
	
	refreshIt();
}


// *********************************************************************

/* 4.	Create a function to tell a user if a string is a palindrome or not.  
(Hint: Use the built-in string function reverse()).*/

//"hello".split("").reverse().join("");
//str.split("").reverse().join("");

// Calls the function when the "Problem 4" button is clicked.
function problem4() {
	document.getElementById("problem4")
	
	// Creates a function to split the entered word, reverse the letters
	// and then join the letters back together in reverse order.  
	function testWord(word1){
		return word1.split("").reverse().join("");
		str.split("").reverse().join("");
	}
	
	var word1 = prompt("Please enter a word.");
	
	var originalWord = word1;
	var reverseWord = word1.split("").reverse().join("");
	
	
	if(originalWord === reverseWord) {
		document.write("The reverse of " + originalWord + " is " + testWord(word1) + "." + " This is a palindrome!");
	}
		else {
			document.write("The reverse of " + originalWord + " is " + testWord(word1) + "." +  " This is not a palindrome!");
		}
	s
	refreshIt();
}


// *********************************************************************

/*5.	Write a function that sorts 3 numbers from lowest to highest e.g. 1, 2, 3.  
Use if-blocks.*/

// Calls the function when the "Problem 5" button is clicked.
function problem5() {
	document.getElementById("problem5")

	var num1 = Number(prompt("Please enter number 1."));
	var num2 = Number(prompt("Please enter number 2."));
	var num3 = Number(prompt("Please enter number 3."));

		if(num1 >= num2 && num2 >= num3) {
			document.write(num3 + ", " + num2 + ", " + num1);
		}

		else if(num2 >= num3 && num3 >= num1) {
			document.write(num1 + ", " + num3 + ", " + num2);
		}

		else if(num3 >= num1 && num1 >=num2) {
			document.write(num2 + ", " + num1 + ", " + num3);
		}

		else if(num1 >= num3 && num3 >= num2) {
			document.write(num2 + ", " + num3 + ", " + num1);
		}

		else if(num2 >= num1 && num1 >= num3) {
			document.write(num3 + ", " + num1 + ", " + num2);
		}

		else {
			document.write(num1 + ", " + num2 + ", " + num3);
		}
	
	refreshIt();
}