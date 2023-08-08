package com.basic.careernet.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basic.careernet.command.StudentVO;

@Service("mainService")
public class MainServiceImpl implements MainService {
	@Autowired
	private MainMapper mainMapper;
	
	@Override
	public int loginUser(StudentVO studentVO) {
		return mainMapper.loginUser(studentVO);
	}

	@Override
	public StudentVO getStudentInfo(StudentVO studentVO) {
		return mainMapper.getStudentInfo(studentVO);
	}

}
