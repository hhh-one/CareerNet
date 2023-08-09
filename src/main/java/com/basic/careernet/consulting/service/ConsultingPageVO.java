package com.basic.careernet.consulting.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import lombok.Data;

@Data
public class ConsultingPageVO {
	private int start;			//시작 페이지네이션
	private int end;			//끝 페이지네이션
	private boolean prev;		//이전버튼 활성화 여부
	private boolean next;		//다음버튼 활성화 여부
	private int realEnd;		//실제 보여지는 끝 번호
	
	private int total;			//전체 게시글 개수
	private int page;			//cri에 있는 현재 조회하는 페이지
	private int amount;			//cri에 있는 데이터 개수
	private ConsultingCriteria consultingCri; //페이지 기준
	
	private int pnCount = 10;	//페이지네이션 개수
	
	private List<Integer> pageList; //페이지네이션을 리스트로 저장
	

	public ConsultingPageVO(ConsultingCriteria consultingCri, int total) {
		this.consultingCri = consultingCri;
		this.page = consultingCri.getPage();
		this.amount = consultingCri.getAmount();
		this.total = total;
		
		// <end페이지 계산>
		//page가 1을 가리킬 때 end = 10 
		// 		11을 가리킬 때 end = 20
		//		...
		this.end = ((int) Math.ceil(this.page / (double) this.pnCount )) * this.pnCount;
		
		// <start페이지 계산>
		this.start = this.end - this.pnCount + 1;
		
		// <realEnd 계산>
		this.realEnd = (int) Math.ceil(this.total / (double) this.pnCount);
		
		// <end 페이지 재결정>
		//total이 25 -> realEnd = 3, end도 10인데 사실 3이여야한다
		//		  133 ->		  14, end는 20인데 사실 14여야한다
		if (this.end > this.realEnd) {
			this.end = this.realEnd;
		}
		
		// <prev 활성화 여부>
		//start는 1(이때만 false), 11, 21, 31, 41, ...
		this.prev = this.start > 1;
		
		// <next 활성화 여부>
		//end는 10, 20, ..., realEnd(이때만 false)
		this.next = this.realEnd > this.end;
		
		//타임리프 - 리스트에 페이지네이션
		// int자체로는 List에 담지 못하기 때문에 원시타입을 wrapper타입으로 변환하기 위해 boxed()이용
		this.pageList = IntStream.rangeClosed(this.start, this.end).boxed().collect(Collectors.toList());
	}
}
