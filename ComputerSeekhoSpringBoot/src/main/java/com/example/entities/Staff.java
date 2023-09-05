package com.example.entities;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name="Staff")
public class Staff {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int staff_id;
	
	private String staff_name;
	private String photo_url="https://ajcacollege.in/wp-content/uploads/icon.jpg";
	private String staff_mobile;
	private String staff_email;
	private String staff_username;
	private String staff_password;
	private String staff_role;
	private boolean staff_isactive=true;	
	
	public boolean isStaff_isactive() {
		return staff_isactive;
	}
	public void setStaff_isactive(boolean staff_isactive) {
		this.staff_isactive = staff_isactive;
	}
	public int getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}
	public String getStaff_name() {
		return staff_name;
	}
	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}
	public String getPhoto_url() {
		return photo_url;
	}
	public void setPhoto_url(String photo_url) {
		this.photo_url = photo_url;
	}
	public String getStaff_mobile() {
		return staff_mobile;
	}
	public void setStaff_mobile(String staff_mobile) {
		this.staff_mobile = staff_mobile;
	}
	public String getStaff_email() {
		return staff_email;
	}
	public void setStaff_email(String staff_email) {
		this.staff_email = staff_email;
	}
	public String getStaff_username() {
		return staff_username;
	}
	public void setStaff_username(String staff_username) {
		this.staff_username = staff_username;
	}
	public String getStaff_password() {
		return staff_password;
	}
	public void setStaff_password(String staff_password) {
		this.staff_password = staff_password;
	}
	public String getStaff_role() {
		return staff_role;
	}
	public void setStaff_role(String staff_role) {
		this.staff_role = staff_role;
	}
	
	
	@Override
	public String toString() {
		return "Staff [staff_id=" + staff_id + ", staff_name=" + staff_name + ", photo_url=" + photo_url
				+ ", staff_mobile=" + staff_mobile + ", staff_email=" + staff_email + ", staff_username="
				+ staff_username + ", staff_password=" + staff_password + ", staff_role=" + staff_role
				+ ", staff_isactive=" + staff_isactive + "]";
	}
	
	

	
	
}
