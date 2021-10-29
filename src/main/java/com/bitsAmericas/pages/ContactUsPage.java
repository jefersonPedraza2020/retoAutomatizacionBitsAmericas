package com.bitsAmericas.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import com.bitsAmericas.actions.Action;
import com.bitsAmericas.utilities.Utility;

import cucumber.api.DataTable;
import net.serenitybdd.core.pages.PageObject;

public class ContactUsPage  extends PageObject{
	WebDriver driver;
	By inputEmail = By.xpath("//input[@id='contact_us__correo_electronico']");
	By inputTelephone = By.xpath("//input[@id='contact_us__telefono']");
	By inputFullName = By.xpath("//input[@id='contact_us__nombre']");
	By inputOrganization = By.xpath("//input[@id='contact_us__organizacion']");
	By inputCity = By.xpath("//input[@id='contact_us__ciudad']");
	By textCommentary = By.xpath("//textarea[@id='contact_us__comentario']");
	By selectServiceOfInterest = By.xpath("(//span[@class='btn btn-default btn-secondary form-control ui-select-toggle'])[position()=2]");
	By selectProductsOfInterest = By.xpath("(//span[@class='btn btn-default btn-secondary form-control ui-select-toggle'])[position()=3]");
	By checkTermsAndConditions = By.xpath("//*[@id=\"formulario_contacto\"]/div[1]/div[11]/label/text()");
	By linkContactUs = By.xpath("//a[@title='Contáctenos' or contains(@title,'Contact Us')]");
	//By checkCaptcha = By.xpath("//label[contains(text(),'I'm not a robot')]"); pendiente captcha

	Action action = new Action();
	Utility utility = new Utility();
	String email;
	public void clickLinkContactUs() {

		if(action.esperarObjetoDisponible(getDriver(), linkContactUs)) {
			getDriver().findElement(linkContactUs).click();
		}
	}

	public void registerTheContactFormData(DataTable infoData) {
		try {
			email = infoData.raw().get(0).get(0).toString().split(" ")[0]+utility.generarNumeroRandom(3).toString()+"@gmail.com";;
			if(action.esperarObjetoDisponible(getDriver(), inputEmail)) {
				Actions act = new Actions(getDriver());
				act.moveToElement(getDriver().findElement(inputEmail)).click().perform();
				action.escribirEnObjeto(getDriver(), inputEmail, email);
				action.escribirEnObjeto(getDriver(), inputTelephone, "350"+utility.generarNumeroRandom(7).toString());
				action.escribirEnObjeto(getDriver(), inputFullName, infoData.raw().get(0).get(0).toString());
				action.escribirEnObjeto(getDriver(), inputOrganization, infoData.raw().get(0).get(1).toString());
				action.escribirEnObjeto(getDriver(), inputCity, "Bogotá");
				action.clickEnObjeto(getDriver(), selectServiceOfInterest);
				action.seleccionarObjetoAleatorioCombo(getDriver(), 4);
				action.clickEnObjeto(getDriver(), selectProductsOfInterest);
				action.seleccionarObjetoAleatorioCombo(getDriver(), 2);
				if(action.esperarObjetoDisponible(getDriver(), textCommentary)) {
					action.escribirEnObjeto(getDriver(), textCommentary, infoData.raw().get(0).get(2).toString());
					action.clickEnObjeto(getDriver(), checkTermsAndConditions);
					System.err.println("verificar");
				}
				
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}
}
