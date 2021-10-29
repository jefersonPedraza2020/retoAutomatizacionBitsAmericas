@PQRBitsAmericas
Feature: PQRBitsAmericas

  @creacionPQR
  Scenario Outline: creation PQR details
    Given We enter the page 
    And enter and verify PQR page
  	And Register the PQR form data and send it
   |<fullName>|<organization>|<commentary>|
    
Examples:
|fullName							|organization 				|commentary		|
|jeferson Pedraza			|Bits									|valor Prueba	|