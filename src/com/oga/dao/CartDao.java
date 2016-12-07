package com.oga.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.oga.bean.Cart;
import com.oga.bean.Orders;
import com.oga.bean.Product;

public class CartDao {
	private Connection con;
	private PreparedStatement ps;
	
	public String addProductToCart(Cart cart){
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		String ack = null;
		
		final String insert_Query ="INSERT INTO Cart VALUES(?, ?, ?)";
		
		try {
			ps = con.prepareStatement(insert_Query);
			ps.setInt(1, cart.getCustId());
			ps.setInt(2, cart.getProdId());
//			ps.setInt(3, 1); 
			ps.setInt(3, cart.getCartQuantity()); 
		
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
		System.out.println("Cart Item: " + ack);
		return ack;
	}
	
	public List<Cart> getCartItemsByCustomerId(int customerId) throws Exception{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		List<Cart> cartItemsList = new ArrayList<Cart>();
		ResultSet rs = null;
		
		final String select_Query ="SELECT * FROM Cart WHERE CustId = ?;";
		
		try {
			ps=con.prepareStatement(select_Query);
			ps.setInt(1, customerId);
			rs = ps.executeQuery();
			
			while(rs.next()){
				cartItemsList.add(formatResultSet(rs));
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
		return cartItemsList;
	}
	
	public int getCartCount(int customerId) throws Exception{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		ResultSet rs = null;
		
		System.out.println("Cart DAO");

		final String select_Query ="SELECT * FROM Cart WHERE CustId = ?";
		int cartCount = 0;
		
		try {
			ps=con.prepareStatement(select_Query);
			ps.setInt(1, customerId);
			rs = ps.executeQuery();
			
			while(rs.next()){
				cartCount += 1;
			}
			
//			cartCount = rs.getInt("cartCount");
			
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
		System.out.println("Cart count: " + cartCount);
		
		return cartCount;
	}
	
	
	
	private Cart formatResultSet(ResultSet rs) throws Exception {
		if (rs == null) {
			return null;
		}
		Cart cartBean = new Cart();
		
		cartBean.setCustId(rs.getInt("CustId"));
		cartBean.setProdId(rs.getInt("prodId"));
		cartBean.setCartQuantity(rs.getInt("cartQuantity"));
		
		return cartBean;
	}
}
