package com.bitsAmericas.steps;

import com.bitsAmericas.pages.ContactUsPage;

import cucumber.api.DataTable;
import net.thucydides.core.annotations.Step;

public class ContactUsStep {
   ContactUsPage contactUsPage = new ContactUsPage();

   @Step
	public void verifyContactPage() {
	   contactUsPage.clickLinkContactUs();
	}
   @Step
	public void registerTheContactFormData(DataTable infoData) {
	   contactUsPage.registerTheContactFormData(infoData);
	}
}
