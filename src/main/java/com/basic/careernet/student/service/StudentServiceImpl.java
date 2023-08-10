package com.basic.careernet.student.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basic.careernet.command.StudentVO;

@Service("studentService")
public class StudentServiceImpl implements StudentService {
	@Autowired
	private StudentMapper studentMapper;
	
	@Override
	public int studentRegist(StudentVO vo) {
		return studentMapper.studentRegist(vo);
	}

	@Override
	public int idCheck(String id) {
		return studentMapper.idCheck(id);
	}


}
