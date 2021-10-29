package com.bitsAmericas.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "feature/PQRBitsAmericas.feature",
glue = "com.bitsAmericas.stepdefinitions.pqr",
tags = {"@creacionPQR"})
public class CreationPQRDetailsRunner {

}
