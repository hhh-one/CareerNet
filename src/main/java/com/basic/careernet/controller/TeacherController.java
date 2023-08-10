package com.basic.careernet.controller;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.basic.careernet.command.StudentVO;
import com.basic.careernet.command.TeacherVO;
import com.basic.careernet.student.service.StudentService;
import com.basic.careernet.teacher.service.TeacherService;


@Controller
@RequestMapping("/teacher")
public class TeacherController {

	@Autowired
	private TeacherService teacherService;

//	@Autowired
//	private StudentService studentService;

	//화면
	@GetMapping("/login")
	public String login() {
		return "teacher/login";
	}

	@GetMapping("/join")
	public String join() {
		return "teacher/join";
	}

	//회원가입
	@PostMapping("/joinForm")
	public String joinForm(@Valid @ModelAttribute("teacherVO") TeacherVO teacherVO, Errors errors, Model model,RedirectAttributes ra) {

		String tea_duplicate_idcheck = teacherVO.getTea_id();

		String tea_check = teacherService.getTea_id(tea_duplicate_idcheck); //교사 회원가입시 중복체크
		

		if (tea_check == null /* && stu_check==null */) {
			model.addAttribute("msg","사용 가능 아이디 입니다");
		}else {
			model.addAttribute("msg","사용할 수 없는 아이디 입니다.");
		}
		
		//회원가입시 유효성검사
		if(errors.hasErrors()) {
			List<FieldError> list = errors.getFieldErrors();

			for(FieldError err : list) {

				if(err.isBindingFailure()) {
					model.addAttribute("tea_" + err.getField(), "잘못입력하셨습니다.");
				}else {
					model.addAttribute("tea_" + err.getField(), err.getDefaultMessage());
				}
			}
			return "teacher/join";
		}
		teacherService.teacherJoin(teacherVO);
		ra.addFlashAttribute("join_success","회원가입이 완료되었습니다");
		return "redirect:/main/login";
	}

	//회원가입 완료
	@PostMapping("/joinFinish")
	public String joinFinish() {

		return "main/login";
	}
	
	//로그인기능
	
	
	
//	
//	@PostMapping("/login")
//	public String tea_login() {
//		
//		
//		
//		
//	}
	




}
