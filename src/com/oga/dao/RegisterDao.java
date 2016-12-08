package com.oga.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.google.gson.Gson;
import com.oga.bean.Customer;
import com.oga.bean.UserAuth;

public class RegisterDao {


	private Connection con;
	private PreparedStatement ps;
	
	public String addUser(UserAuth user){
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		String ack = null;
		//fname,Mname,Lname,email,sAddress,city,state,zipcode
		final String insert_Query ="INSERT INTO USERS VALUES(?, ?, ?)";
		
		try {
			ps = con.prepareStatement(insert_Query);
			ps.setString(1, user.getUsername());
			ps.setString(2, user.getPassword());
			ps.setString(3, user.getType());
			
			int rowAffected = ps.executeUpdate();
			
			if(rowAffected != 0){
				ack="saved";
			}
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally{
			try {
				ps.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		System.out.println("User login info: " + ack);
		return ack;
	}
	
	public String addCustomer(Customer customer){
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		String ack = null;
		//fname,Mname,Lname,email,sAddress,city,state,zipcode
		final String insert_Query ="INSERT INTO CUSTOMER VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		
		try {
			ps = con.prepareStatement(insert_Query);
			ps.setInt(1, 1);
			ps.setString(2, customer.getFname());
			ps.setString(3, customer.getMname());
			ps.setString(4, customer.getLname());
			ps.setString(5, customer.getEmail());
			ps.setString(6, customer.getStreetAddress());
			ps.setString(7, customer.getCity());
			ps.setString(8, customer.getState());
			ps.setString(9, customer.getZipcode());
			ps.setInt(10, 0);
			
			int rowAffected = ps.executeUpdate();
			
			if(rowAffected != 0){
				ack="saved";
			}
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			try {
				ps.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		System.out.println("Customer info:" + ack);
		return ack;
	}

	public String authenticateUSer(UserAuth user) {
		
		String customerId = null;
		DataSource ds = new DataSource();
		con = ds.getNewConnection();
		ResultSet rs = null;
		
		boolean status = false;
		
		final String select_Query ="SELECT CID, UNAME FROM USERS, CUSTOMER WHERE USERS.UNAME=? AND USERS.PASSWORD=?";
		
		try {
			ps = con.prepareStatement(select_Query);
			ps.setString(1, user.getUsername());
			ps.setString(2, user.getPassword());
			rs = ps.executeQuery();
			while(rs.next()){
				customerId = rs.getString(1);
			}
			
			status = rs.next();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			try {
				rs.close();
				ps.close();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		System.out.println("Customer ID : " + customerId);
		return customerId;
	}
	
	public String getCustomerByCustId(int custId){
		Customer customer = null;
		ResultSet rs = null;
		final String select_Query ="SELECT * FROM CUSTOMER WHERE CID=?";
		try {
			ps=con.prepareStatement(select_Query);
			ps.setInt(1, custId);
			rs = ps.executeQuery();
			
			while(rs.next()){
				customer = new Customer();
				customer.setFname(rs.getString("FNAME"));
				customer.setLname(rs.getString("LNAME"));
				customer.setMname(rs.getString("MNAME"));
				customer.setCity(rs.getString("CITY"));
				customer.setState(rs.getString("STATE"));
				customer.setStreetAddress(rs.getString("ADDRESS"));
				customer.setZipcode(rs.getString("ZIP"));
				customer.setEmail(rs.getString("EMAIL"));
				customer.setOutbalance(rs.getInt("OBALANCE"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			try {
				rs.close();
				ps.close();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		
		String jsonCustomer = new Gson().toJson(customer);
		
		System.out.println("Customer: " + jsonCustomer);
		
		return jsonCustomer;
	}
}
