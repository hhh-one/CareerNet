package com.basic.careernet.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basic.careernet.command.StudentVO;
import com.basic.careernet.command.TeacherVO;

@Service("mainService")
public class MainServiceImpl implements MainService {
	@Autowired
	private MainMapper mainMapper;
	
	@Override
	public int loginStudent(StudentVO studentVO) {
		return mainMapper.loginStudent(studentVO);
	}

	@Override
	public StudentVO getStudentInfo(StudentVO studentVO) {
		return mainMapper.getStudentInfo(studentVO);
	}

	@Override
	public int loginTeacher(TeacherVO teachVO) {
		return mainMapper.loginTeacher(teachVO);
	}

	@Override
	public TeacherVO getTeacherInfo(TeacherVO teacherVO) {
		return mainMapper.getTeacherInfo(teacherVO);
	}

}
