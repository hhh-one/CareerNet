package com.basic.careernet.main.service;

import org.apache.ibatis.annotations.Mapper;

import com.basic.careernet.command.StudentVO;

@Mapper
public interface MainMapper {
	int loginUser(StudentVO studentVO);
	StudentVO getStudentInfo(StudentVO studentVO);
}
