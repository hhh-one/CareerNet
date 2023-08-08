package com.basic.careernet.bsy.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.basic.careernet.command.jobVO;
import com.basic.careernet.command.job_typeVO;

@Mapper
public interface jobMapper {

	void setJob_type(job_typeVO list);

	void setJob(jobVO vo);

	ArrayList<jobVO> getList();
	int getTotal();

	
	
	
}
