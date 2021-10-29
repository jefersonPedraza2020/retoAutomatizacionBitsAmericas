package com.bitsAmericas.steps;

import com.bitsAmericas.pages.PQRPage;

import cucumber.api.DataTable;
import net.thucydides.core.annotations.Step;

public class PQRStep {

	PQRPage pqrPage = new PQRPage();

	@Step
	public void verifyPQRPage() {
		pqrPage.clickLinkPQR();
	}
	@Step
	public void registerThePQRFormData(DataTable infoData) {
		pqrPage.registerThePQRFormData(infoData);
	}
}
