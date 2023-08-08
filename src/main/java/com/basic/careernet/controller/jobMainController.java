package com.basic.careernet.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.basic.careernet.bsy.service.jobService;
import com.basic.careernet.command.jobVO;

@Controller
@RequestMapping("/syBody")
public class jobMainController {

		@Autowired
		private jobService jobService;
		
	
	@GetMapping("/syBody")
	public String syBody(Model model) {
		
//		ArrayList<jobVO> list=jobService.getList();
////		System.out.println(list.toString());
//		int total=jobService.getTotal();
//		
//		model.addAttribute("list",list);
		return "syBody/syBody";
	}
	@GetMapping("/syBody1")
	public String syBody1() {
		
		return "syBody/syBody1";
	}
}


