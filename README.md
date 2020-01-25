# _Beep Boop: Input/Output Site_

#### _Site that takes a user inputted number and returns various output, 1/24/2020_

#### By _**Joseph Wangemann**_

## Description

_This site has two input forms, asks the user for a number and name, and returns different text outcomes based on which number the user has inputted_

## Setup/Installation Requirements

* _Copy link for github repository https://github.com/fractalscape13/boop_
* _Open terminal, navigate to a directory that you want to clone the project into.  Type 'git clone https://github.com/fractalscape13/boop"_
* _Open index.html in browser to view page_
* _Open in text editor to view code_
* _View working page at https://fractalscape13.github.io/boop/_

_Simple, doesn't require anything additional_

## Specs

* _Takes user input in form with submit button_
* _Returns a list of numbers from 0 to the user inputted number_
    * _Example: input: 6_
    * _output: 0, 1, 2, 3, 4, 5, 6_
* _Returns 'beep' for any number containing the digit '1'_
    * _Example: input: 3_
    * _output: 0, beep, 2, 3_
* _Returns 'boop' for any number containing the digit '2'_
    * _Example: input: 3_
    * _output: 0, beep, boop, 3_
* _Returns 'I'm sorry Dave. I'm afraid I can't do that' for any number containing the digit '3'_
    * _Example: input: 4_
    * _output: 0, beep, boop, I'm sorry Dave. I'm afraid I can't do that, 4_
* _Priority is given for numbers containing '3', then '2', then '1'_
    * _Example: input: 13_
    * _output: 0, beep, boop, I'm sorry..., 4, 5, 6, 7, 8, 9, beep, beep, boop, I'm sorry..._
* _In the output array, numbers that are divisible by 3 will have the word 'Dave' replaced with user inputted name_
    * _Example: input number:13, input name:Joe_
    * _output: 0, beep, boop, I'm sorry Joe, I'm afraid I can't do that, 4, 5, 6, 7, 8, 9, beep, beep, boop, I'm sorry Dave, I'm afraid I can't do that, I'm sorry Joe, I'm afraid I can't do that_
* _If either number or name inputs are left blank, page will refresh_
* _If letters or special characters are inputted in number input, page will refresh.  Name input will accept all letters, numbers and special characters_
* _After output, user can click to reverse the array_
* _After output, user can reset the page_

## Known Bugs

_No known bugs_

## Support and contact details

_Contact me at fractalscape13@gmail.com with any comments or questions_

## Technologies Used

_Made using HTML, CSS, Bootstrap 3.3.7 and JQuery._

### License

*MIT License*

Copyright (c) 2020 **_JW_**