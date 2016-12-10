package com.oga.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.oga.bean.Customer;
import com.oga.bean.UserAuth;
import com.oga.dao.RegisterDao;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet({"/LoginServlet", "/LoginServlet/getUserDetails", "/LoginServlet/getUserState"})
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String reqPath = request.getServletPath();
		try {
			if (reqPath.equalsIgnoreCase("/LoginServlet")) {
				handleLogin(request, response);
			} else if (reqPath.equalsIgnoreCase("/LoginServlet/getUserDetails")) {
				handleAccountDetails(request, response);
			} else if (reqPath.equalsIgnoreCase("/LoginServlet/getUserState")) {
				handleUserState(request, response);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
			
		}
	
	private void handleAccountDetails(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonParser parser = new JsonParser();
		
        JsonObject regObj = (JsonObject) parser
                .parse(request.getReader());
		        
	    String jsonRegister = new Gson().toJson(regObj);
	    System.out.println("Request object: " + jsonRegister);		
		
		Customer cust = new Customer();
		
		int custId = regObj.get("cId").getAsInt();
		cust.setCustId(custId);
		System.out.println("Customer ID:" + custId);
		
		RegisterDao rgdao = new RegisterDao();
		String customer = rgdao.getCustomerByCustId(custId);
		if(customer != null) {
			response.setContentType("application/json");
			response.getWriter().write(customer);
		} else {
			String errorResponse = new Gson().toJson("error");
			response.setStatus(HttpServletResponse.SC_ACCEPTED);
			response.setContentType("application/json");
			response.getWriter().write(errorResponse);
		}
		
		System.out.println(response.getStatus());
	}
	
	private void handleUserState(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonParser parser = new JsonParser();
		
        JsonObject regObj = (JsonObject) parser
                .parse(request.getReader());
		        
	    String jsonRegister = new Gson().toJson(regObj);
	    System.out.println("Request object: " + jsonRegister);		
		
		Customer cust = new Customer();
		
		int custId = regObj.get("cid").getAsInt();
		cust.setCustId(custId);
		System.out.println("CId:" + custId);
		
		RegisterDao rgdao = new RegisterDao();
		String customerState = rgdao.getCustomerStateById(custId);
		if(customerState != null) {
			response.setContentType("application/json");
			response.getWriter().write(customerState);
		} else {
			String errorResponse = new Gson().toJson("error");
			response.setStatus(HttpServletResponse.SC_ACCEPTED);
			response.setContentType("application/json");
			response.getWriter().write(errorResponse);
		}
		
		System.out.println(response.getStatus());
	}
	
	
	private void handleLogin(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonParser parser = new JsonParser();
		
        JsonObject regObj = (JsonObject) parser
                .parse(request.getReader());
		        
	    String jsonRegister = new Gson().toJson(regObj);
	    System.out.println("Request object: " + jsonRegister);
	    
//		String username = request.getParameter("username");
//		//String mName = String Fname,Mname,Lname,Email,StreetAddress,City,State,Zipcode;
//		String password=request.getParameter("password");		
		
		UserAuth user = new UserAuth();
		
		
		user.setUsername(regObj.get("username").getAsString());
		user.setPassword(regObj.get("password").getAsString());
		//System.out.println(new Gson().toJson(customer));
		RegisterDao rgdao = new RegisterDao();
		String customerId = rgdao.authenticateUSer(user);
		if(customerId != null) {
			String json = new Gson().toJson(customerId);
			response.setContentType("application/json");
			response.getWriter().write(json);
		} else {
			String errorResponse = new Gson().toJson("error");
			response.setStatus(HttpServletResponse.SC_ACCEPTED);
			response.setContentType("application/json");
			response.getWriter().write(errorResponse);
		}
		
		System.out.println(response.getStatus());
	}
}
