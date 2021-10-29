package com.bitsAmericas.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import com.bitsAmericas.actions.Action;
import com.bitsAmericas.utilities.Utility;

import cucumber.api.DataTable;
import net.serenitybdd.core.pages.PageObject;

public class PQRPage  extends PageObject{
	WebDriver driver;
	By linkPQR	 = By.xpath("//a[@title='PQRSF']");
	By inputFullName = By.xpath("//input[@id='pqrs__nombres']");
	By inputEmail = By.xpath("//input[@id='pqrs__correo_electronico']");
	By inputIdentityDocument = By.xpath("//input[@id='pqrs__documento_de_identidad']");
	By selectApplicantType = By.xpath("//span[@class='btn btn-default btn-secondary form-control ui-select-toggle']");
	By  inputDepartamento= By.xpath("//input[@id='pqrs__departamento_o_estado']");
	By inputCity = By.xpath("//input[@id='pqrs__ciudad']");
	By inputTelephone = By.xpath("//input[@id='pqrs__celular']");
	By inputLandline = By.xpath("//input[@id='pqrs__telefono_fijo']");
	By inputCategory = By.xpath("//input[@id='pqrs__categoria']");
	By inputArea = By.xpath("//input[@id='pqrs__area']");
	By inputTheme = By.xpath("//input[@id='pqrs__tema']");
	By textIncidentDetail = By.xpath("//textarea[@id='pqrs__detalle_incidencia']");
	By checkTermsAndConditions = By.xpath("//label[contains(text(),'I have read and accept the') or contains(text(),'He leído y acepto los')]");

	Action action = new Action();
	Utility utility = new Utility();
	String email;

	public void clickLinkPQR() {

		if(action.esperarObjetoDisponible(getDriver(), linkPQR)) {
			getDriver().findElement(linkPQR).click();
		}
	}

	public void registerThePQRFormData(DataTable infoData) {
		try {
			email = infoData.raw().get(0).get(0).toString().split(" ")[0]+utility.generarNumeroRandom(3).toString()+"@gmail.com";;
			if(action.esperarObjetoDisponible(getDriver(), inputFullName)) {
				Actions act = new Actions(getDriver());
				act.moveToElement(getDriver().findElement(inputEmail)).click().perform();
				action.escribirEnObjeto(getDriver(), inputFullName, infoData.raw().get(0).get(0).toString());
				action.escribirEnObjeto(getDriver(), inputEmail, email);
				action.escribirEnObjeto(getDriver(), inputIdentityDocument, utility.generarNumeroRandom(9).toString());
				action.clickEnObjeto(getDriver(), selectApplicantType);
				action.seleccionarObjetoAleatorioCombo(getDriver(), 1);
				action.escribirEnObjeto(getDriver(), inputDepartamento, "Bogotá");
				action.escribirEnObjeto(getDriver(), inputCity, "Bogotá");
				action.escribirEnObjeto(getDriver(), inputTelephone, "350"+utility.generarNumeroRandom(7).toString());
				action.escribirEnObjeto(getDriver(), inputLandline, "350"+utility.generarNumeroRandom(7).toString());
				action.escribirEnObjeto(getDriver(), inputCategory, "prueba");
				action.escribirEnObjeto(getDriver(), inputArea, "QA");
				action.escribirEnObjeto(getDriver(), inputTheme, "Ingreso");
				if(action.esperarObjetoDisponible(getDriver(), textIncidentDetail)) {
					action.escribirEnObjeto(getDriver(), textIncidentDetail, "Sin novedad");
				}

			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

}
