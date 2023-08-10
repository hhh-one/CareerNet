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
import com.basic.careernet.command.TeacherVO;
import com.basic.careernet.main.service.MainService;

@Controller
@RequestMapping("/main")
public class mainController {
	@Autowired
	@Qualifier("mainService")
	private MainService mainService;
	
	
	@GetMapping("/login")
	public String login() {
		return "main/login";
	}
	
	@GetMapping("/main")
	public String main() {
		return "main/main";
	}
	
	@GetMapping("/studentBenner")
	public String studentBenner() {
		return "main/studentBenner";
	}
	
	@GetMapping("/signup")
	public String signup() {
		return "main/signup";
	}
	
	@PostMapping("/loginForm")
	public String loginForm(@ModelAttribute("id") String id,
							@ModelAttribute("pw") String pw,
							RedirectAttributes ra,
							HttpServletRequest request) {
		HttpSession session = request.getSession();
		
		StudentVO studentVO = StudentVO.builder().id(id).pw(pw).build();
		TeacherVO teacherVO = TeacherVO.builder().tea_id(id).tea_pw(pw).build();
		System.out.println(studentVO);
		System.out.println(teacherVO);
		if (mainService.loginStudent(studentVO) == 1) {
			StudentVO student = mainService.getStudentInfo(studentVO);
			session.setAttribute("student_no", student.getSno());
			session.setAttribute("student_name", student.getName());
			session.setAttribute("student_identity", student.getIdentity());
			System.out.println(student.toString());
			return "redirect:/main/main";
			
			
		} 
		
		if (mainService.loginTeacher(teacherVO) == 1) {
			TeacherVO teacher = mainService.getTeacherInfo(teacherVO);
			session.setAttribute("teacher_no", teacher.getTea_tno());
			session.setAttribute("teacher_name", teacher.getTea_name());
			return "redirect:/main/main";
		}
		
		ra.addFlashAttribute("login_fail", "아이디 / 비밀번호를 맞게 입력해주세요");
		return "redirect:/main/login";
	}
//	
	@PostMapping("/studentForm")
	public String studentForm() {
		return "/student/join";
	}
	
	@PostMapping("/teacherForm")
	public String teacherForm() {
		return "/teacher/join";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		
		return "redirect:/main/main";
	}
}
