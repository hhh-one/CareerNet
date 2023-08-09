package com.basic.careernet.main.service;

import org.apache.ibatis.annotations.Mapper;

import com.basic.careernet.command.StudentVO;
import com.basic.careernet.command.TeacherVO;

@Mapper
public interface MainMapper {
	int loginStudent(StudentVO studentVO);
	int loginTeacher(TeacherVO teachVO);
	StudentVO getStudentInfo(StudentVO studentVO);
	TeacherVO getTeacherInfo(TeacherVO teacherVO);
}
