package com.bitsAmericas.utilities;

import java.util.Random;

public class Utility {

	public String generarNumeroRandom(int cantidadDitito){
		return (new Long (String.valueOf (new Random().nextLong()).replace("-","").substring(0,cantidadDitito)).toString());
	}

	public int retonarNumeroRandomPorRango(int valorMaximoNumero) {
		try {
			Random r = new Random();
			return r.nextInt(valorMaximoNumero)+1;	
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return 0;
		}

	}
}
