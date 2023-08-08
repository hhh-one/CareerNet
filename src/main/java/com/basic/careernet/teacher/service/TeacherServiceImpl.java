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


@Service("teacherService")
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
	public ArrayList<TeacherVO> getList(String login) {
		// TODO Auto-generated method stub
		return null;
	}
	
	


	
	
}
