package com.aldengq.api_crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiCrudApplication {

	public static void main(String[] args) {
		try {
			SpringApplication.run(ApiCrudApplication.class, args);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
