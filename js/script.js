// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function calculateProduct() {
  	// initialize the product to 0
	let product = 0
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user number
	let userNum = parseInt(document.getElementById('userNum').value)
  let userNum2 = parseInt(document.getElementById('userNum2').value)

	// use a for loop to calculate the product of numbers of numbers
	for (let counter = 0; counter <= userNum; counter++) {
		// extra: use an if statement to build a string of numbers added
		if (counter < userNum) {
			// build the string of numbers with a plus between each number
			numbers = numbers + counter + "+"
		}
		else {
			numbers = numbers + counter
		}
		// add the counter each time to the current sum
		product = product + counter
	}
	
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers + " = " + product
}
