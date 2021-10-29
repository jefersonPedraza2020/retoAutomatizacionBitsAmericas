@ContactUsBitsAmericas
Feature: ContactUsBitsAmericas

  @creacionContacto
  Scenario Outline: creation contact details
    Given We enter the page 
    And enter and verify contact page
  	And Register the contact form data and send it
   |<fullName>|<organization>|<commentary>|
    
Examples:
|fullName							|organization 				|commentary		|
|jeferson Pedraza			|Bits									|valor Prueba	|