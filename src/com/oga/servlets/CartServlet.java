package com.oga.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
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
import com.oga.bean.Cart;
import com.oga.bean.Customer;
import com.oga.bean.Product;
import com.oga.bean.UserAuth;
import com.oga.dao.CartDao;
import com.oga.dao.ProductDao;
import com.oga.dao.RegisterDao;

/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet({"/CartServlet", "/CartServlet/addProduct", "/CartServlet/cartCount", "/CartServlet/updateCartProductQuantity"})
public class CartServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CartServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	
    
	private void handleCartData(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		JsonParser parser = new JsonParser();
		
        JsonObject cartObj = (JsonObject) parser
                .parse(request.getReader());
		        
		CartDao cartDao = new CartDao();

	    // Cart
	 		Cart cart = new Cart();
	 		
	 		cart.setCustId(cartObj.get("custId").getAsInt());
	 		cart.setProdId(cartObj.get("prodId").getAsInt());
	 		cart.setCartQuantity(1);

	 		String ackCart = cartDao.addProductToCart(cart);

	 		String jsonCart = new Gson().toJson(ackCart);
	 		
	 		System.out.println(jsonCart);
	 		
	 		response.setContentType("application/json");
	 		response.getWriter().write(jsonCart);
	}
	
	
	private void handleCartProductQuantityUpdate(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		JsonParser parser = new JsonParser();
		
        JsonObject cartObj = (JsonObject) parser
                .parse(request.getReader());
		        
		CartDao cartDao = new CartDao();

	    // Cart
	 		Cart cart = new Cart();
	 		
	 		cart.setCustId(cartObj.get("custId").getAsInt());
	 		cart.setProdId(cartObj.get("prodId").getAsInt());
	 		cart.setCartQuantity(cartObj.get("cartQuantity").getAsInt());

	 		String ackCart = cartDao.updateProductQuantity(cart);

	 		String jsonCart = new Gson().toJson(ackCart);
	 		
	 		System.out.println(jsonCart);
	 		
	 		response.setContentType("application/json");
	 		response.getWriter().write(jsonCart);
	}
	
	private void handleGetCartInfo(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		JsonParser parser = new JsonParser();
		
		if(request != null && request.getReader() != null) {
        JsonObject cartObj = (JsonObject) parser
                .parse(request.getReader());
               
        String jsonObj = new Gson().toJson(cartObj);
        
        System.out.println("Cart Cust Obj:" + jsonObj);

		int custId = cartObj.get("custId").getAsInt();
		
		CartDao cdao = new CartDao();
		
		List<Cart> cartList = cdao.getCartItemsByCustomerId(custId);
		
		String json = new Gson().toJson(cartList);
		System.out.println("Cart Items: " + json);
		response.setContentType("application/json");
		response.getWriter().write(json);
		}
	}
	
	
	private void handleGetCartCount(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		JsonParser parser = new JsonParser();
		
		if(request != null && request.getReader() != null) {
        JsonObject cartObj = (JsonObject) parser
                .parse(request.getReader());
               
        String jsonObj = new Gson().toJson(cartObj);
        
        System.out.println("Cust Obj:" + jsonObj);

		int custId = cartObj.get("custId").getAsInt();
		

//		request.setAttribute("custId", custId);

		CartDao cdao = new CartDao();
		
		int cartCount = cdao.getCartCount(custId);
		
		String json = String.valueOf(cartCount); 
		response.setContentType("application/json");
		response.getWriter().write(json);
		}
	}
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
    
		String reqPath = request.getServletPath();
		try {
			if (reqPath.equalsIgnoreCase("/CartServlet/cartCount")) {
				handleGetCartCount(request, response);
			} else if(reqPath.equalsIgnoreCase("/CartServlet/addProduct")) {
				handleCartData(request, response);
			} else if(reqPath.equalsIgnoreCase("/CartServlet")) {
				handleGetCartInfo(request, response);
			} else if(reqPath.equalsIgnoreCase("/CartServlet/updateCartProductQuantity")) {
				handleCartProductQuantityUpdate(request, response);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
