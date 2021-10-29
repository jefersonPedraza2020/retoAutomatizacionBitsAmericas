package com.bitsAmericas.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "feature/ContactUsBitsAmericas.feature",
        glue = "com.bitsAmericas.stepdefinitions.contact")

public class CreationContactDetailsRunner {

}
