package com.bitsAmericas.pages;


import org.openqa.selenium.WebDriver;

import com.bitsAmericas.actions.Action;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.DefaultUrl;

@DefaultUrl("https://bits-angular-stg.dev01.bitsamericas.net/en/home")
public class HomePage extends PageObject{
	WebDriver driver;
	
	
	Action action = new Action();
	
	public void maximiseScreen() {
	    getDriver().manage().window().maximize();
	}
	

}
