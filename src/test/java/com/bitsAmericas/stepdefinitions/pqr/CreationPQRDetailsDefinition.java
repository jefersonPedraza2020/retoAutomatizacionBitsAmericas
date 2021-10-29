package com.bitsAmericas.stepdefinitions.pqr;
import com.bitsAmericas.steps.HomeStep;
import com.bitsAmericas.steps.PQRStep;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import net.thucydides.core.annotations.Steps;

public class CreationPQRDetailsDefinition {
	@Steps
	HomeStep homeStep;
	@Steps
	PQRStep pqrStep;

@Given("^We enter the page$")
public void we_enter_the_page() {
	homeStep.openHomePage();
}


@Given("^enter and verify PQR page$")
public void enter_and_verify_PQR_page() {
	pqrStep.verifyPQRPage();
}

@Given("^Register the PQR form data and send it$")
public void register_the_PQR_form_data_and_send_it(DataTable data) {
	pqrStep.registerThePQRFormData(data);
}


}
