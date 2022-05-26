// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the product of 2 positive integers
 */
function calculateProduct() {
  	// initialize the product to 0
	let product = 0
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user numbers
	let userNum = parseInt(document.getElementById('userNum').value)
  let userNum2 = parseInt(document.getElementById('userNum2').value)

	// use a for loop to calculate the product of 2 numbers 
	for (let counter = 0; counter < userNum; counter++) {
    product = product + userNum2
  }
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers + " = " + product
}
