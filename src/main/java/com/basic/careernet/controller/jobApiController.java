package com.basic.careernet.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.basic.careernet.bsy.service.jobService;
import com.basic.careernet.command.jobVO;
import com.basic.careernet.command.job_typeVO;

@RestController
public class jobApiController {

	
	
	
	@PostMapping("/api/getData")
	public void getData(@RequestBody Map<String, List<String>>vo){
		
		
		
	}
	
}
