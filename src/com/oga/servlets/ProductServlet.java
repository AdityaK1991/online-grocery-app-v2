package com.oga.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.oga.bean.Product;
import com.oga.bean.ProductPricing;
import com.oga.dao.ProductDao;

@WebServlet({"/ProductServlet/product", "/ProductServlet/addProduct", "/ProductServlet/getAllProducts", 
	"/ProductServlet/getAllProductsByCategory", "/ProductServlet/getAllProductsInCustomerCart", "/ProductServlet/addPricePerState", 
	"/ProductServlet/updatePricePerState", "/ProductServlet/updateProductInfo"})
public class ProductServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	public ProductServlet() {
        super();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		
	}
	
	private void handleGetProductInfo(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		JsonParser parser = new JsonParser();
		
        JsonObject productObj = (JsonObject) parser
                .parse(request.getReader());

		int prodId = productObj.get("prodId").getAsInt();
		
		ProductDao pdao = new ProductDao();
		List<Product> prodList = pdao.getProductInfo(prodId);
		String json = new Gson().toJson(prodList);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}
	
	private void handleUpdatePricePerState(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		int prodId = Integer.parseInt(request.getParameter("prodId"));
		String prodState = request.getParameter("prodState");
		double prodPrice = Double.parseDouble(request.getParameter("prodPrice"));
		
		ProductPricing prodPricing = new ProductPricing();
		prodPricing.setProdId(prodId);
		prodPricing.setProdState(prodState);
		prodPricing.setProdPrice(prodPrice);
		
		ProductDao pdao = new ProductDao();
		String ack = pdao.updatePricePerState(prodPricing);
		
		String json = new Gson().toJson(ack);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}

	private void handleUpdateProductInfo(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		JsonParser parser = new JsonParser();
		
        JsonObject productObj = (JsonObject) parser
                .parse(request.getReader());

		int prodId = productObj.get("prodId").getAsInt();
		String prodName = productObj.get("prodName").getAsString();
		String prodType = productObj.get("prodType").getAsString();
//		String prodType = productObj.get("prodType").getAsString();
		String prodInfo = "product information";

		int prodSize = productObj.get("ProdSize").getAsInt();
		double prodPrice = productObj.get("ProdPrice").getAsDouble();
		
		Product prod = new Product();
		prod.setProdId(prodId);
		prod.setProdName(prodName);
		prod.setProdPrice(prodPrice);
		prod.setProdInfo(prodInfo);
		prod.setProdSize(prodSize);
		prod.setProdPrice(prodPrice);
		prod.setProdType(prodType);
		
		ProductDao pdao = new ProductDao();
		String ack = pdao.updateProductInfo(prod);
		
		String json = new Gson().toJson(ack);
		
		System.out.println(json);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}
	
	private void handleAddPricePerState(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		int prodId = Integer.parseInt(request.getParameter("prodId"));
		String prodState = request.getParameter("prodState");
		double prodPrice = Double.parseDouble(request.getParameter("prodPrice"));
		
		ProductPricing prodPricing = new ProductPricing();
		prodPricing.setProdId(prodId);
		prodPricing.setProdState(prodState);
		prodPricing.setProdPrice(prodPrice);
		
		ProductDao pdao = new ProductDao();
		String ack = pdao.addPricePerState(prodPricing);
		
		String json = new Gson().toJson(ack);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}

	private void handleGetAllProducts(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		JsonParser parser = new JsonParser();
		
        JsonObject stateObj = (JsonObject) parser
                .parse(request.getReader());
                       
		String prodState = stateObj.get("state").getAsString();
		
		System.out.println("Customer-Product State: " + prodState);
		
		ProductDao pdao = new ProductDao();
		List<Product> prodList = pdao.getAllProducts(prodState);
		String json = new Gson().toJson(prodList);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}
	
	private void handleGetAllProductsByCategory(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		JsonParser parser = new JsonParser();
		
        JsonObject cartObj = (JsonObject) parser
                .parse(request.getReader());
                       
		String prodType = cartObj.get("prodType").getAsString();
		
		System.out.println("Servlet - Product type: " + prodType);
		
		ProductDao pdao = new ProductDao();
		List<Product> prodList = pdao.getAllProductsByCategory(prodType);
		String json = new Gson().toJson(prodList);
		System.out.println(json);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}

	
	private void handleGetAllProductsInCart(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		JsonParser parser = new JsonParser();
		
        JsonObject cartObj = (JsonObject) parser
                .parse(request.getReader());
                       
		int prodId = cartObj.get("ProdId").getAsInt();
		
		ProductDao pdao = new ProductDao();
		List<Product> prodList = pdao.getProductInfo(prodId);
		String json = new Gson().toJson(prodList);
		System.out.println(json);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}
	
	private void handleAddProduct(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
//		int prodId = Integer.parseInt(request.getParameter("prodId"));
		
		JsonParser parser = new JsonParser();
		
        JsonObject productObj = (JsonObject) parser
                .parse(request.getReader());
        
		String prodName = productObj.get("prodName").getAsString();
		String prodType = productObj.get("prodType").getAsString();
		String prodInfo = "";
		if(productObj.get("ProdInfo") != null) {
			prodInfo = productObj.get("ProdInfo").getAsString();
		}
		String prodImage = productObj.get("ProdImage").getAsString();
		double prodPrice = productObj.get("ProdPrice").getAsDouble();
		int prodSize = productObj.get("ProdSize").getAsInt();
		String prodState = productObj.get("ProdState").getAsString();

		
		Product product = new Product();
//		product.setProdId(prodId);
		product.setProdName(prodName);
		product.setProdType(prodType);
		product.setProdInfo(prodInfo);
		product.setProdInfo(prodImage);
		product.setProdPrice(prodPrice);
		product.setProdSize(prodSize);
		product.setProdState(prodState);
		
		ProductDao pdao = new ProductDao();
		String ack = pdao.addProduct(product);
		
		String json = new Gson().toJson(ack);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
//		doGet(request, response);
		String reqPath = request.getServletPath();
		try {
			if (reqPath.equalsIgnoreCase("/ProductServlet/product")) {
				handleGetProductInfo(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/addProduct")) {
				handleAddProduct(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/getAllProducts")) {
				handleGetAllProducts(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/getAllProductsByCategory")) {
				handleGetAllProductsByCategory(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/getAllProductsInCustomerCart")) {
				handleGetAllProductsInCart(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/addPricePerState")) {
				handleAddPricePerState(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/updatePricePerState")) {
				handleUpdatePricePerState(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/updateProductInfo")) {
				handleUpdateProductInfo(request, response);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
