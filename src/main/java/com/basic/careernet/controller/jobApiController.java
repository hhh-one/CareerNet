package com.basic.careernet.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.basic.careernet.bsy.service.jobService;
import com.basic.careernet.bsy.util.Criteria;
import com.basic.careernet.bsy.util.pageVO;
import com.basic.careernet.command.jobVO;
import com.basic.careernet.command.job_typeVO;

@RestController
public class jobApiController {

	
	@Autowired
	private jobService jobService;
	private Criteria cri=new Criteria();
	
	@PostMapping("/api/getData")
	public List<jobVO> getData(@RequestBody Map<String, List<String>>vo,Model model){
		List<Integer>list=new ArrayList<>();
		for(int i=0; i<vo.get("aptd_type_code").size(); i++) {
			list.add(Integer.parseInt(vo.get("aptd_type_code").get(i)));
		}
		cri.setAmount(9);
		cri.setPage(1);
		
		List<jobVO> get= jobService.getData(list,cri);
			
		int total=jobService.getTotalData(list);
		
		pageVO pageVO=new pageVO(cri,total);
		
		model.addAttribute("page",pageVO);
		
		return get;
		
	}
	@GetMapping("/api/getDataOne")
	public List<jobVO> getDataOne(int bno){
		
		
		List<jobVO> get= jobService.getDataOne(bno);
		
		return get;
		
	}
	
	
	
	
	@GetMapping("/api/getTarget")
	public List<jobVO> getTarget(int bno, int amount,Model model) {
		
		cri.setPage(bno);
		cri.setAmount(amount);
		List<jobVO> list= jobService.getPage(cri);
		
		
		return list;
		
		
	}
	
	@GetMapping("/api/getNumList")
	public List<jobVO> getNumList(int bno, int amount,Model model) {
		
		cri.setPage(bno);
		cri.setAmount(amount);
		List<jobVO> list= jobService.getPage(cri);
		
		
		return list;
		
		
	}
	
	@GetMapping("/api/getPageN")
	public pageVO apigetPageN(int bno, int amount,Model model) {
		
		int total=jobService.getTotal();
		cri.setPage(bno);
		cri.setAmount(amount);
		pageVO pageVO=new pageVO(cri,total);
		System.out.println(pageVO.toString()+"asjklldbnaskfbakjsfbajksfkjf");
//		List<jobVO> list= jobService.getPage(cri);
		
		
		return pageVO;
		
		
	}
	
	@CrossOrigin("*")
	@GetMapping(value="/api/content")
	public jobVO content(int bno) {
		
		jobVO vo=jobService.getContent(bno);
		
		return vo;
	}
	
	
}
