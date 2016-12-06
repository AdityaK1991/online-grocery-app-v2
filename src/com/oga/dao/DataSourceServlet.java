package com.oga.dao;

/*import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DataSource {
	
	//private static String DriverName = "oracle.jdbc.driver.OracleDriver";
	private static String DriverType = "jdbc:oracle:thin:";
	private static String Host       = "fourier.cs.iit.edu";
	private static String Port       = "1521";
	private static String Sid        = "orcl";
	private static String UserName   = "smohan6";
	private static String Password   = "sanj#123";
	jdbc:oracle:thin:@fourier.cs.iit.edu:1521:orcl","smohan6","sanj#123"
	*/
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.oga.bean.Product;

@WebServlet("/DataSource")
public class DataSourceServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		res.setContentType("text/html");											

		try {
			DataSource ds = new DataSource();
			Connection con = ds.getNewConnection(); 
			Statement st = con.createStatement();
			System.out.println("connection established successfully...!!");

			ResultSet rs = st.executeQuery("Select * from product");
			//ArrayList<Product> productList = new ArrayList<Product>();
			Product product = new Product();
			while (rs.next()) {

				product.setProdName(rs.getString("prodName"));
				//product.setProdPrice(rs.getString("prodPrice"));
				//productList.add(product);
			}
			String json = new Gson().toJson(product);
			res.setContentType("application/json");
			res.getWriter().write(json);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}