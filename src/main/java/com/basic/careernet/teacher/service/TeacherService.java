package com.basic.careernet.teacher.service;

import java.util.ArrayList;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.validation.Errors;

import com.basic.careernet.command.TeacherVO;


public interface TeacherService {
	
	public void teacherJoin(TeacherVO teacherVO); //등록?
	
	public void login(@Valid TeacherVO teacherVO);
	
	public ArrayList<TeacherVO> getList(TeacherVO teacherVO);

	//회원가입 중복확인-교사
	public String getTea_id(String tea_id);
	
	//회원가입 중복확인-학생
	//public String getId(String tea_id);
	
	
	
	
}
