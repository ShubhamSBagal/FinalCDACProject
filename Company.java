package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Company_tbl")
public class Company extends BaseEntity  {
	
	
	@Column(length = 20)
	private String companyName;
	@Column(length = 20)
	private String companyStatus;
	@Column(length = 40)
	private String companyMission;
	@Column(length = 40)
	private String email;
	@Column(length = 40)
	private String password;

	public Company() {
		super();
	}

	public Company(String companyName, String companyStatus, String companyMission, String email, String password) {
		super();
		this.companyName = companyName;
		this.companyStatus = companyStatus;
		this.companyMission = companyMission;
		this.email = email;
		this.password = password;
	}

	@Override
	public String toString() {
		return "Company [companyName=" + companyName + ", companyStatus=" + companyStatus + ", companyMission="
				+ companyMission + ", email=" + email + ", password=" + password + "]";
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyStatus() {
		return companyStatus;
	}

	public void setCompanyStatus(String companyStatus) {
		this.companyStatus = companyStatus;
	}

	public String getCompanyMission() {
		return companyMission;
	}

	public void setCompanyMission(String companyMission) {
		this.companyMission = companyMission;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void add(Integer id) {
		// TODO Auto-generated method stub
		
	}
	
	
//	 public Applicant getApplicant() {
//	        return applicant;
//	    }
//
//	    public void setApplicant(Applicant applicant) {
//	        this.applicant = applicant;
//	    }
//
//	    public Company getCompany() {
//	        return company;
//	    }
//
//	    public void setCompany(Company company) {
//	        this.company = company;
//	    }
	
//	public void addPlayer(Player p) {
//		players.add(p);// parent --> child
//		p.setMyTeam(this);// child --> parent
//	}
//
//	public void removePlayer(Player p) {
//		players.remove(p);
//		p.setMyTeam(null);
//	}

	// Assuming you have an Applicant and a Company instance
//	Applicant applicant = new Applicant(); // Get or create an Applicant instance
//	Company company = new Company();     // Get or create a Company instance
//	
//	Job jobOpening = new Job();

	// Set the Applicant and Company associations
//	jobOpening.setApplicant(applicant);
//	jobOpening.setCompany(company);
//
//	entityManager.persist(jobOpening);
	
	

	
	
}
