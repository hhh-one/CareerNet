package com.basic.careernet.main.service;

import com.basic.careernet.command.StudentVO;

public interface MainService {
	int loginUser(StudentVO studentVO);
	StudentVO getStudentInfo(StudentVO studentVO);
}
