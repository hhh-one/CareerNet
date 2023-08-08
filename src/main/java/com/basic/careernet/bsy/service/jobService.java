package com.basic.careernet.bsy.service;

import java.util.ArrayList;
import java.util.List;

import com.basic.careernet.command.jobVO;
import com.basic.careernet.command.job_typeVO;

public interface jobService {

	void setJob_type(job_typeVO vo);

	void setJob(jobVO vo);

	ArrayList<jobVO> getList();

	int getTotal();
	
	
	
}
