package com.bitsAmericas.steps;

import com.bitsAmericas.pages.HomePage;

import net.thucydides.core.annotations.Step;

public class HomeStep {
	
	HomePage homePage = new HomePage();
	
	@Step
	public void openHomePage() { 
		homePage.open();
		homePage.maximiseScreen();
	}
	
	
}
