package com.oga.servlets;

import java.io.IOException;
import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.oga.bean.Orders;
import com.oga.dao.OrdersDao;
//import com.oga.bean.CreditCardInfo;
//import com.oga.bean.Product;

@WebServlet({"/OrdersServlet/addOrder", "/OrdersServlet/getAllOrdersByCustomerId", "/OrdersServlet/getAllOrdersForAdmin"})
public class OrdersServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	public OrdersServlet() {
        super();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		String reqPath = request.getServletPath();
		try {
			if (reqPath.equalsIgnoreCase("/OrdersServlet/addOrder")) {
				handleAddOrder(request, response, request.getSession());
			} else if (reqPath.equalsIgnoreCase("/OrdersServlet/getAllOrdersByCustomerId")) {
				handleGetAllOrdersByCustomerId(request, response, request.getSession());
			} else if (reqPath.equalsIgnoreCase("/OrdersServlet/getAllOrdersForAdmin")) {
				handleGetAllOrdersForAdmin(request, response, request.getSession());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private void handleGetAllOrdersForAdmin(HttpServletRequest request,
			HttpServletResponse response, HttpSession session) throws Exception {
		OrdersDao odao = new OrdersDao();
		List<Orders> ordersList = odao.getAllOrdersForAdmin();
		String json = new Gson().toJson(ordersList);
		response.setContentType("application/json");
		response.getWriter().write(json);	
	}

	private void handleGetAllOrdersByCustomerId(HttpServletRequest request,
			HttpServletResponse response, HttpSession session) throws Exception {
		int custId = Integer.parseInt(session.getAttribute("custId").toString()); //get customer id from session
		OrdersDao odao = new OrdersDao();
		List<Orders> ordersList = odao.getAllOrdersByCustomerId(custId);
		String json = new Gson().toJson(ordersList);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}

	private void handleAddOrder(HttpServletRequest request,
			HttpServletResponse response, HttpSession session) throws Exception {
		int custId = Integer.parseInt(session.getAttribute("custId").toString()); //get customer id from session
		int creditCardNo = Integer.parseInt(request.getParameter("creditCardNo"));
		/*CreditCardInfo ccb = new CreditCardInfo();
		ccb.setCustId(custId);
		ccb.setCreditCardNo(creditCardNo);*/
		
		int prodId = Integer.parseInt(request.getParameter("prodId")); //get prod id from the hidden input attribute
		/*Product pb = new Product();
		pb.setProdId(prodId);*/
		
		int quantity = Integer.parseInt(request.getParameter("quantity"));
		double totalPrice = Double.parseDouble(request.getParameter("totalPrice"));
		
		DateFormat formatter = new SimpleDateFormat("mm/dd/yyyy");
		Date orderDate = (Date)formatter.parse(request.getParameter("orderDate"));
		
		String status = request.getParameter("orderStatus");
		
		Orders orderBean = new Orders();
		orderBean.setCustId(custId);
		orderBean.setProdId(prodId);
		orderBean.setQuantity(quantity);
		orderBean.setTotalPrice(totalPrice);
		orderBean.setOrderDate(orderDate);
		orderBean.setStatus(status);
		orderBean.setCreditCardNo(creditCardNo);
		
		OrdersDao odao = new OrdersDao();
		String ack = odao.addOrders(orderBean);
		
		String json = new Gson().toJson(ack);
		response.setContentType("application/json");
		response.getWriter().write(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		doGet(request, response);
	}

}
