package com.basic.careernet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/consulting")
public class ConsultingController {
	@GetMapping("/detail")
	public String detail() {
		return "consulting/boardDetail";
	}
}
