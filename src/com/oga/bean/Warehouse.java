package com.oga.bean;

public class Warehouse {
	
	int prodId,warehouseId,WarehouseCapacity,wZipcode;
	String WstreetAddress,wCity,wstate;
	public int getProdId() {
		return prodId;
	}
	public void setProdId(int prodId) {
		this.prodId = prodId;
	}
	public int getWarehouseId() {
		return warehouseId;
	}
	public void setWarehouseId(int warehouseId) {
		this.warehouseId = warehouseId;
	}
	public int getWarehouseCapacity() {
		return WarehouseCapacity;
	}
	public void setWarehouseCapacity(int warehouseCapacity) {
		WarehouseCapacity = warehouseCapacity;
	}
	public int getwZipcode() {
		return wZipcode;
	}
	public void setwZipcode(int wZipcode) {
		this.wZipcode = wZipcode;
	}
	public String getWstreetAddress() {
		return WstreetAddress;
	}
	public void setWstreetAddress(String wstreetAddress) {
		WstreetAddress = wstreetAddress;
	}
	public String getwCity() {
		return wCity;
	}
	public void setwCity(String wCity) {
		this.wCity = wCity;
	}
	public String getWstate() {
		return wstate;
	}
	public void setWstate(String wstate) {
		this.wstate = wstate;
	}
	

}
