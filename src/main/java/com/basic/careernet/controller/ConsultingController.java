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
	public String write(HttpServletRequest request,
						RedirectAttributes ra) {
		HttpSession session = request.getSession();
		if (session.getAttribute("student_no") == null) {
			ra.addFlashAttribute("login_please", "로그인 후 상담신청이 가능합니다.");
			return "redirect:/main/login";
		}
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
