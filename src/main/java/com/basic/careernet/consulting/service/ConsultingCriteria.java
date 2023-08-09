package com.basic.careernet.consulting.service;

import lombok.Data;

@Data
public class ConsultingCriteria {
	private int page; //조회하는 페이지
	private int amount = 10; //데이터 개수
	
	//검색에 필요한 변수 선언
	private String searchIdentity;
	private String searchTitle;
	
	public ConsultingCriteria() {
		this.page = 1;
		this.amount = 10;
	}
	
	public ConsultingCriteria(int page, int amount) {
		super();
		this.page = page;
		this.amount = amount;
	}
	
	public int getPageStart() {
		return (page - 1) * amount; //
	}
}
