package com.oga.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DataSource {
	
	private static String DriverName = "oracle.jdbc.driver.OracleDriver";

	public Connection getNewConnection(){
		Connection connection= null;
		try {
			
			Class.forName(DriverName);
			connection = DriverManager.getConnection(
					"jdbc:oracle:thin:@fourier.cs.iit.edu:1521:orcl",
					"smohan6",
					"sanj#123");
			
			System.out.println("connection established successfully...!!");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e){
			e.printStackTrace();
		}
		
		return connection;	
	}

}
