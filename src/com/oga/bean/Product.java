package com.oga.bean;

public class Product {

	int prodId,ProdSize;
	String prodName,prodType,ProdInfo,ProdImage,ProdState;
	double ProdPrice;
	public int getProdId() {
		return prodId;
	}
	public void setProdId(int prodId) {
		this.prodId = prodId;
	}
	public int getProdSize() {
		return ProdSize;
	}
	public void setProdSize(int prodSize) {
		ProdSize = prodSize;
	}

	public String getProdName() {
		return prodName;
	}
	public void setProdName(String prodName) {
		this.prodName = prodName;
	}
	public String getProdType() {
		return prodType;
	}
	public void setProdType(String prodType) {
		this.prodType = prodType;
	}
	public String getProdInfo() {
		return ProdInfo;
	}
	public void setProdInfo(String prodInfo) {
		ProdInfo = prodInfo;
	}
	public String getProdImage() {
		return ProdImage;
	}
	public void setProdImage(String prodImage) {
		ProdImage = prodImage;
	}
	public double getProdPrice() {
		return ProdPrice;
	}
	public void setProdPrice(double prodPrice) {
		ProdPrice = prodPrice;
	}
	public String getProdState() {
		return ProdState;
	}
	public void setProdState(String prodState) {
		ProdState = prodState;
	}
}
