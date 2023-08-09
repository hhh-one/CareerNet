package com.basic.careernet.teacher.service;

import java.util.Map;

import javax.validation.Valid;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.validation.Errors;

import com.basic.careernet.command.TeacherVO;

@Mapper 
public interface TeacherMapper {
	
	public void teacherJoin(TeacherVO teacherVO);
	
	//public Map<String, String> joinHandling(Errors errors);
	
	public void login(@Valid TeacherVO teacherVO);
	
	//회원가입 중복확인-교사
	public String getTea_id(String tea_id);
	
	//회원가입 중복확인-학생
	//public String getId(String tea_id);
	
	
}
