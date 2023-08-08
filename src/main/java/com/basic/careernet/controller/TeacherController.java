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

import com.basic.careernet.command.TeacherVO;
import com.basic.careernet.teacher.service.TeacherService;


@Controller
@RequestMapping("/teacher")
public class TeacherController {

	@Autowired
	@Qualifier("teacherService")
	private TeacherService teacherService;


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
	public String joinForm(@Valid @ModelAttribute("teacherVO") TeacherVO teacherVO, Errors errors, Model model) {

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

			return "main/login";
		}

		//회원가입 완료
		@PostMapping("/joinFinish")
		public String joinFinish() {

			return "main/login";
		}




	}
