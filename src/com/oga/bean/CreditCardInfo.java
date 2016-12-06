package com.oga.bean;

public class CreditCardInfo {
	
	int custId,zipcode,CreditCardNo;
	String StreetAddress,city,state;
	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	public int getZipcode() {
		return zipcode;
	}
	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}
	public int getCreditCardNo() {
		return CreditCardNo;
	}
	public void setCreditCardNo(int creditCardNo) {
		CreditCardNo = creditCardNo;
	}
	public String getStreetAddress() {
		return StreetAddress;
	}
	public void setStreetAddress(String streetAddress) {
		StreetAddress = streetAddress;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}

}
