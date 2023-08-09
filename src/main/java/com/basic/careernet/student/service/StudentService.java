package com.basic.careernet.student.service;

import com.basic.careernet.command.StudentVO;

public interface StudentService {
	int studentRegist(StudentVO vo);
	int idCheck(String id);
}
