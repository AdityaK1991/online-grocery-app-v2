package com.oga.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.oga.bean.Product;
import com.oga.bean.ProductPricing;

public class ProductDao {
	private Connection con;
	private PreparedStatement ps;
	
	public String addProduct(Product product){
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		String ack = null;
		
		final String insert_Query ="INSERT INTO PRODUCT VALUES(?, ?, ?, ?, ?, ?);";
		
		try {
			ps = con.prepareStatement(insert_Query);
			ps.setInt(1, product.getProdId() );
			ps.setString(2, product.getProdName());
			ps.setString(3, product.getProdType());
			ps.setString(4, product.getProdInfo());
			ps.setDouble(5, product.getProdPrice());
			ps.setInt(6, product.getProdSize());
			
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
	
	public List<Product> getAllProducts() throws Exception{
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		List<Product> productList = new ArrayList<Product>();
		ResultSet rs = null;
		
		final String select_Query ="SELECT * FROM PRODUCT;";
		
		try {
			ps=con.prepareStatement(select_Query);
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
		return ack;		
	}
}
