package com.oga.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.oga.bean.Product;
import com.oga.bean.ProductPricing;
import com.oga.dao.ProductDao;

@WebServlet({"/ProductServlet/addProduct", "/ProductServlet/getAllProducts", 
	"/ProductServlet/getAllProductsByCategory/*", "/ProductServlet/addPricePerState", 
	"/ProductServlet/updatePricePerState"})
public class ProductServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	public ProductServlet() {
        super();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		String reqPath = request.getServletPath();
		try {
			if (reqPath.equalsIgnoreCase("/ProductServlet/addProduct")) {
				handleAddProduct(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/getAllProducts")) {
				handleGetAllProducts(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/getAllProductsByCategory/*")) {
				handleGetAllProductsByCategory(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/addPricePerState")) {
				handleAddPricePerState(request, response);
			} else if (reqPath.equalsIgnoreCase("/ProductServlet/updatePricePerState")) {
				handleUpdatePricePerState(request, response);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
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
		ProductDao pdao = new ProductDao();
		List<Product> prodList = pdao.getAllProducts();
		String json = new Gson().toJson(prodList);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}
	
	private void handleGetAllProductsByCategory(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String prodInfo = request.getPathInfo();
		String[] prodParts = prodInfo.split("/");
		
		String prodType = prodParts[0];
		
		System.out.println("Product type: " + prodType);
		
		ProductDao pdao = new ProductDao();
		List<Product> prodList = pdao.getAllProductsByCategory(prodType);
		String json = new Gson().toJson(prodList);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}

	private void handleAddProduct(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		int prodId = Integer.parseInt(request.getParameter("prodId"));
		String prodName = request.getParameter("prodName");
		String prodType = request.getParameter("prodType");
		String prodInfo = request.getParameter("prodInfo");
		double prodPrice = Double.parseDouble(request.getParameter("prodPrice"));
		int prodSize = Integer.parseInt(request.getParameter("prodSize"));
		
		Product product = new Product();
		product.setProdId(prodId);
		product.setProdName(prodName);
		product.setProdType(prodType);
		product.setProdInfo(prodInfo);
		product.setProdPrice(prodPrice);
		product.setProdSize(prodSize);
		
		ProductDao pdao = new ProductDao();
		String ack = pdao.addProduct(product);
		
		String json = new Gson().toJson(ack);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		doGet(request, response);
	}

}
