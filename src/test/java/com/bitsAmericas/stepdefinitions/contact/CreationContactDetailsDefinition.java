package com.bitsAmericas.stepdefinitions.contact;

import com.bitsAmericas.steps.ContactUsStep;
import com.bitsAmericas.steps.HomeStep;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import net.thucydides.core.annotations.Steps;

public class CreationContactDetailsDefinition {
	@Steps
	HomeStep homeStep;
	@Steps
	ContactUsStep contactUsStep;
	
	@Given("^We enter the page$")
	public void we_enter_the_page() {
		homeStep.openHomePage();
	}


	@Given("^enter and verify contact page$")
	public void enter_and_verify_contact_page() {
		contactUsStep.verifyContactPage();
	}

	@Given("^Register the contact form data and send it$")
	public void register_the_contact_form_data_and_send_it(DataTable data) {
		contactUsStep.registerTheContactFormData(data);
	}

}
