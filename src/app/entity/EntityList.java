package com.example.boot.entity;

public class EntityList {
	
	private String name;
	private String status;
	


	public String getname() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}

	public String getstatus() {
		return status;
	}

	public void setstatus(String status) {
		this.status = status;
	}

		

	public EntityList(String name, String status) {
		super();
		this.name = name;
		this.status = status;
		
	}

	public EntityList() {
		super();
	}

	@Override
	public String toString() {
		return "EntityList [name=" + name + ", status=" + status + "]";
	}



}
