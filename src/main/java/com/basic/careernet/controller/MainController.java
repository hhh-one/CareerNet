package com.basic.careernet.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.basic.careernet.command.StudentVO;
import com.basic.careernet.main.service.MainService;

@Controller
@RequestMapping("/main")
public class MainController {
	@Autowired
	@Qualifier("mainService")
	private MainService mainService;
	
	@GetMapping("/login")
	public String login() {
		return "main/login";
	}
	
	@PostMapping("/loginForm")
	public String loginForm(@ModelAttribute("studentVO") StudentVO studentVO,
							RedirectAttributes ra,
							HttpServletRequest request) {
		if (mainService.loginUser(studentVO) != 1) {
			ra.addFlashAttribute("login_fail", "아이디 / 비밀번호를 맞게 입력해주세요");
			return "redirect:/main/login";
		}
		HttpSession session = request.getSession();
		
		StudentVO student = mainService.getStudentInfo(studentVO);
		session.setAttribute("student_no", student.getSno());
		session.setAttribute("student_name", student.getName());
		session.setAttribute("student_identity", student.getIdentity());
		return "test/test";
	}
}
