package com.oga.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.oga.bean.UserAuth;
import com.oga.dao.RegisterDao;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
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
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("HI in login servlert");
		String username = request.getParameter("username");
		//String mName = String Fname,Mname,Lname,Email,StreetAddress,City,State,Zipcode;
		String password=request.getParameter("password");		
		
		UserAuth user = new UserAuth();
		user.setUsername(username);
		user.setPassword(password);
		//System.out.println(new Gson().toJson(customer));
		RegisterDao rgdao = new RegisterDao();
		String custId = rgdao.authenticateUSer(user);
		
		String json = new Gson().toJson(custId);
		response.setContentType("application/json");
		response.getWriter().write(json);
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
