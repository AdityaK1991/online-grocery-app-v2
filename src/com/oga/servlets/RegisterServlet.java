package com.oga.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.oga.bean.Customer;
import com.oga.bean.UserAuth;
import com.oga.dao.RegisterDao;

/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
    
		JsonParser parser = new JsonParser();
		
        JsonObject regObj = (JsonObject) parser
                .parse(request.getReader());
		        
	    String jsonRegister = new Gson().toJson(regObj);
	    System.out.println("Request object: " + jsonRegister);
	    
		RegisterDao rgdao = new RegisterDao();

	    // User
	 		UserAuth user = new UserAuth();
	 		
	 		user.setUsername(regObj.get("email").getAsString());		
	 		user.setPassword(regObj.get("password").getAsString());
	 		user.setType(regObj.get("type").getAsString());

	 		String ackUser = rgdao.addUser(user);

	 		String jsonUser = new Gson().toJson(ackUser);
	 		response.setContentType("application/json");
	 		response.getWriter().write(jsonUser);

	    // Customer
        Customer customer = new Customer();
	
		customer.setFname(regObj.get("fname").getAsString());
		if(regObj.get("mname") != null) {
			customer.setMname(regObj.get("mname").getAsString());
		}
		customer.setLname(regObj.get("lname").getAsString());
		customer.setStreetAddress(regObj.get("streetAddress").getAsString());
		customer.setCity(regObj.get("city").getAsString());
		customer.setState(regObj.get("state").getAsString());
		customer.setZipcode(regObj.get("zipcode").getAsString());
	    
		String ackCustomer = rgdao.addCustomer(customer);
		
		String jsonCustomer = new Gson().toJson(ackCustomer);
		response.setContentType("application/json");
		response.getWriter().write(jsonCustomer);
			
	}

}
