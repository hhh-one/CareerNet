package com.basic.careernet.teacher.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import com.basic.careernet.command.TeacherVO;


@Service
public class TeacherServiceImpl implements TeacherService{

	@Autowired
	private TeacherMapper teacherMapper;

	@Override
	public void teacherJoin(TeacherVO teacherVO) {
		teacherMapper.teacherJoin(teacherVO);
	}
	
	@Override
	public void login(@Valid TeacherVO teacherVO) {
		// TODO Auto-generated method stub
	}

	@Override
	public ArrayList<TeacherVO> getList(TeacherVO teacherVO) {
		// TODO Auto-generated method stub
		return null;
	}

	//회원가입 중복확인-교사
	@Override
	public String getTea_id(String tea_id) {
		
		return teacherMapper.getTea_id(tea_id);
	}



//	@Override
//	public String getId(String tea_id) {
//		// TODO Auto-generated method stub
//		return null;
//	}


	
	


	
	
}
