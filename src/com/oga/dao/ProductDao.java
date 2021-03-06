package com.oga.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.oga.bean.Product;
import com.oga.bean.ProductPricing;

public class ProductDao {
	private Connection con;
	private PreparedStatement ps;
	
	public List<Product> getProductInfo(int prodId) throws Exception{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		List<Product> productList = new ArrayList<Product>();
		ResultSet rs = null;
		
		final String select_Query ="SELECT * FROM PRODUCT WHERE prodId = ?";
		
		try {
			ps = con.prepareStatement(select_Query);
			ps.setInt(1, prodId);
			rs = ps.executeQuery();
			
			while(rs.next()){
				productList.add(formatResultSet(rs));
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
		Gson gson = new Gson();
		
		String json = gson.toJson(productList);
		
		System.out.println(json);
		return productList;
	}
	
	public String addProduct(Product product){
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		String ack = null;
		
		final String insert_Query ="INSERT INTO PRODUCT VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
		
		try {
			ps = con.prepareStatement(insert_Query);
			ps.setInt(1, 1);
			ps.setString(2, product.getProdName());
			ps.setString(3, product.getProdType());
			ps.setString(4, product.getProdInfo());
			ps.setDouble(5, product.getProdPrice());
			ps.setInt(6, product.getProdSize());
			ps.setString(7, product.getProdImage());
			ps.setString(8, product.getProdState());

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
	
	public List<Product> getAllProducts(String state) throws Exception{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		List<Product> productList = new ArrayList<Product>();
		ResultSet rs = null;
		
		final String select_Query ="SELECT * FROM PRODUCT WHERE ProdState = ?";
		
		try {
			ps=con.prepareStatement(select_Query);
			ps.setString(1, state);
			rs = ps.executeQuery();
			
			while(rs.next()){
				productList.add(formatResultSet(rs));
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
		Gson gson = new Gson();
		
		String json = gson.toJson(productList);
		
		System.out.println("Product list by state:" + json);	
		
		return productList;
	}
	
	public List<Product> getAllProductsByCategory(String prodType) throws Exception{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		List<Product> productList = new ArrayList<Product>();
		ResultSet rs = null;
		
		final String select_Query ="SELECT * FROM PRODUCT WHERE prodType = ?";
		
		try {
			ps=con.prepareStatement(select_Query);
			ps.setString(1, prodType);
			rs = ps.executeQuery();
			
			while(rs.next()){
				productList.add(formatResultSet(rs));
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
		Gson gson = new Gson();
		
		String json = gson.toJson(productList);
		
		System.out.println("Product list by Category:" + json);
		return productList;
	}
	
	private Product formatResultSet(ResultSet rs) throws Exception {
		if (rs == null) {
			return null;
		}
		
		Product productBean = new Product();
		
		productBean.setProdId(rs.getInt("prodId"));
		productBean.setProdName(rs.getString("prodName"));
		productBean.setProdType(rs.getString("prodType"));
		productBean.setProdInfo(rs.getString("ProdInfo"));
		productBean.setProdPrice(rs.getDouble("ProdPrice"));
		productBean.setProdId(rs.getInt("ProdSize"));
		
		return productBean;
	}
	
	public String addPricePerState(ProductPricing prodPricing)
	{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		String ack = null;
		
		final String insert_prodPrice_Query ="INSERT INTO ProductPricing VALUES(?, ?, ?);";
		
		try {
			ps = con.prepareStatement(insert_prodPrice_Query);
			ps.setInt(1, prodPricing.getProdId());
			ps.setDouble(2, prodPricing.getProdPrice());
			ps.setString(3, prodPricing.getProdState());

			int rowAffected = ps.executeUpdate();
			
			if(rowAffected != 0){
				ack="added";
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
	
	public String updateProductInfo(Product prod)
	{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		String ack = null;
		
		final String update_Query ="UPDATE Product SET prodName = ?, prodType = ?, ProdPrice = ?, ProdSize = ?, ProdInfo = ? WHERE ProdId = ?";
		
		try {
			ps = con.prepareStatement(update_Query);
			ps.setString(1, prod.getProdName());
			ps.setString(2, prod.getProdType());
			ps.setDouble(3, prod.getProdPrice());
			ps.setInt(4, prod.getProdSize());
			ps.setString(5, prod.getProdInfo());
			ps.setInt(6, prod.getProdId());

			int rowAffected = ps.executeUpdate();
			
			if(rowAffected != 0){
				ack="updated";
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
		System.out.println(ack);
		return ack;		
	}
	
	public String updatePricePerState(ProductPricing prodPricing)
	{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		String ack = null;
		
		final String update_Query ="UPDATE ProductPricing SET ProdPrice = ? WHERE ProdId = ? AND ProdState = ?;";
		
		try {
			ps = con.prepareStatement(update_Query);
			ps.setDouble(1, prodPricing.getProdPrice());
			ps.setInt(2, prodPricing.getProdId());
			ps.setString(3, prodPricing.getProdState());

			int rowAffected = ps.executeUpdate();
			
			if(rowAffected != 0){
				ack="updated";
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
		System.out.println(ack);
		return ack;		
	}
}
