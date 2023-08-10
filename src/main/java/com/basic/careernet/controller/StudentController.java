package com.basic.careernet.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.basic.careernet.command.StudentVO;
import com.basic.careernet.student.service.StudentService;

@Controller
@RequestMapping("/student")
public class StudentController {
	@Autowired
	@Qualifier("studentService")
	private StudentService studentService;
	
	@GetMapping("/join")
	public String join() {
		return "student/join";
	}
	
	@PostMapping("/joinForm")
	public String joinForm(@Valid @ModelAttribute("vo") StudentVO vo, Errors errors, Model model, RedirectAttributes ra) {
		
		
		if (errors.hasErrors()) {
			List<FieldError> errorList = errors.getFieldErrors();

			for (FieldError error : errorList) {
				if (error.isBindingFailure()) {
					model.addAttribute("valid_" + error.getField(), "잘못된 값 입력입니다");
				} else {
					model.addAttribute("valid_" + error.getField(), error.getDefaultMessage());
				}
			}
			return "student/join";
		}
		ra.addFlashAttribute("join_success", "회원가입이 완료되었습니다 !");
		studentService.studentRegist(vo);
		return "redirect:/main/login";
	}
	
	@PostMapping("/idCheck")
	@ResponseBody
	public Map<String, Integer> idCheck(@RequestBody Map<String, String> requestBody) {
		Map<String, Integer> map = new HashMap<>();
		int count = 0;
		String id = requestBody.get("id");
		count = studentService.idCheck(id);
		map.put("cnt", count);
		
		return map;
	}
}
