package com.basic.careernet.student.service;

import org.apache.ibatis.annotations.Mapper;

import com.basic.careernet.command.StudentVO;

@Mapper
public interface StudentMapper {
	int studentRegist(StudentVO vo);
	int idCheck(String id);
}
