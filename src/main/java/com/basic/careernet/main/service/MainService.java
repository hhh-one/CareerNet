package com.basic.careernet.main.service;

import com.basic.careernet.command.StudentVO;
import com.basic.careernet.command.TeacherVO;

public interface MainService {
	int loginStudent(StudentVO studentVO);
	int loginTeacher(TeacherVO teachVO);
	StudentVO getStudentInfo(StudentVO studentVO);
	TeacherVO getTeacherInfo(TeacherVO teacherVO);
}
