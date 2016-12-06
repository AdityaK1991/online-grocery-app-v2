package com.oga.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.oga.bean.Orders;

public class OrdersDao {
	private Connection con;
	private PreparedStatement ps;
	
	public String addOrders(Orders order){
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		String ack = null;
		
		final String insert_Query ="INSERT INTO Orders VALUES(?, ?, ?, ?, ?, ?, ?, ?);";
		
		try {
			ps = con.prepareStatement(insert_Query);
			ps.setInt(1, order.getCustId());
			ps.setInt(2, order.getProdId());
			ps.setInt(3, 3); //order id auto generated
			ps.setInt(4, order.getQuantity());
			ps.setDouble(5, order.getTotalPrice());
			ps.setDate(6, order.getOrderDate());
			ps.setString(7, order.getStatus());
			ps.setInt(8, order.getCreditCardNo());
			
			int rowAffected = ps.executeUpdate();
			
			if(rowAffected != 0){
				ack="saved";
			}	
		} catch (SQLException e) {
			e.printStackTrace();
		} finally{
			try {
				ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return ack;
	}
	
	public List<Orders> getAllOrdersByCustomerId(int customerId) throws Exception{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		List<Orders> ordersList = new ArrayList<Orders>();
		ResultSet rs = null;
		
		final String select_Query ="SELECT * FROM Orders WHERE CustId = ?;";
		
		try {
			ps=con.prepareStatement(select_Query);
			ps.setInt(1, customerId);
			rs = ps.executeQuery();
			
			while(rs.next()){
				ordersList.add(formatResultSet(rs));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			try {
				rs.close();
				ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return ordersList;
	}
	
	public List<Orders> getAllOrdersForAdmin() throws Exception{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		List<Orders> ordersList = new ArrayList<Orders>();
		ResultSet rs = null;
		
		final String select_Query ="SELECT * FROM Orders;";
		
		try {
			ps=con.prepareStatement(select_Query);
			rs = ps.executeQuery();
			
			while(rs.next()){
				ordersList.add(formatResultSet(rs));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			try {
				rs.close();
				ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return ordersList;
	}
	
	private Orders formatResultSet(ResultSet rs) throws Exception {
		if (rs == null) {
			return null;
		}
		Orders orderBean = new Orders();
		
		orderBean.setCustId(rs.getInt("CustId"));
		orderBean.setProdId(rs.getInt("prodId"));
		orderBean.setOrderId(rs.getInt("orderId"));
		orderBean.setQuantity(rs.getInt("Quantity"));
		orderBean.setTotalPrice(rs.getDouble("TotalPrice"));
		orderBean.setOrderDate(rs.getDate("Orderdate"));
		orderBean.setStatus(rs.getString("Status"));
		orderBean.setCreditCardNo(rs.getInt("CreditCardNo"));
		
		return orderBean;
	}
}
