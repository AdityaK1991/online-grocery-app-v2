package com.oga.bean;

public class Cart {
int CustId,ProdId,cartQuantity;

public int getCustId() {
	return CustId;
}

public void setCustId(int custId) {
	CustId = custId;
}

public int getProdId() {
	return ProdId;
}

public void setProdId(int prodId) {
	ProdId = prodId;
}

public int getCartQuantity() {
	return cartQuantity;
}

public void setCartQuantity(int cartQuantity) {
	this.cartQuantity = cartQuantity;
}
}
