package com.bitsAmericas.actions;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.bitsAmericas.utilities.Utility;



public class Action {
	Utility utility = new Utility();

	public  boolean esperarObjetoDisponible(WebDriver driver,By objeto) {
		try {
			WebDriverWait wait = new WebDriverWait(driver,20);
			wait.until(ExpectedConditions.elementToBeClickable(objeto));
			return true;

		} catch (Exception e) {
			return false;
		}
	}




	public  boolean seleccionarObjetoCombo(WebDriver driver,String valor) {
		try {
			By element =  By.xpath("//option[contains(text(),'"+valor+"')]");
			if(esperarObjetoDisponible(driver, element)) {
				driver.findElement(element).click();
				return true;
			}

		} catch (Exception e) {
			return false;
		}
		return false;
	}

	public  boolean escribirEnObjeto(WebDriver driver,By objeto, String texto) {
		try {
			driver.findElement(objeto).sendKeys(texto);
			return true;

		} catch (Exception e) {
			return false;
		}
	}

	public  void clickEnObjeto(WebDriver driver,By objeto) {
		try {
			driver.findElement(objeto).click();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public  void seleccionarObjetoAleatorioCombo(WebDriver driver,int valorMaximoCombo) {
		try {
			int valor =utility.retonarNumeroRandomPorRango(valorMaximoCombo);
			By objetoSeleccionar= By.xpath("(//li[@role='menuitem'])[position()="+valor+"]");
			if(esperarObjetoDisponible(driver, objetoSeleccionar)) {
				driver.findElement(objetoSeleccionar).click();
			}

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}


	public void seleccionarObjetoComboAbajo() {
		try {
			Robot robot = new Robot();
			Thread.sleep(3000);
			robot.keyPress(KeyEvent.VK_DOWN);
			robot.keyRelease(KeyEvent.VK_DOWN);
			Thread.sleep(1000);
			robot.keyPress(KeyEvent.VK_ENTER);
			robot.keyRelease(KeyEvent.VK_ENTER);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}


}
