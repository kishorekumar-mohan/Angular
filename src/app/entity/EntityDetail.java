package com.example.boot.entity;

public class EntityDetail {
    
    private String actionCode;

    public EntityDetail() {
        super();
    }

	public String getActionCode() {
		return actionCode;
	}

	public void setActionCode(String actionCode) {
		this.actionCode = actionCode;
	}

	public EntityDetail(String actionCode) {
		super();
		this.actionCode = actionCode;
	}

	@Override
	public String toString() {
		return "EntityDetail [actionCode=" + actionCode + "]";
	}

    
}
