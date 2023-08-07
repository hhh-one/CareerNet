package com.basic.careernet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.basic.careernet.command.ConsultingVO;
import com.basic.careernet.consulting.service.ConsultingService;

@Controller
@RequestMapping("/consulting")
public class ConsultingController {
	@Autowired
	@Qualifier("consultingService")
	private ConsultingService consultingService;
	
	@GetMapping("/detail")
	public String detail() {
		return "consulting/boardDetail";
	}
	
	@GetMapping("/write")
	public String write() {
		return "consulting/boardWrite";
	}
	
	@GetMapping("/list")
	public String list() {
		return "consulting/boardList";
	}
	
	@PostMapping("/writeForm")
	public String writeForm(@ModelAttribute("consultingVO") ConsultingVO consultingVO) {
		consultingService.writeBoard(consultingVO);
		return "consulting/boardList";
	}
}
