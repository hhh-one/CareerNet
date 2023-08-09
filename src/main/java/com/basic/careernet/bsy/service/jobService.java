package com.basic.careernet.bsy.service;

import java.util.ArrayList;
import java.util.List;

import com.basic.careernet.bsy.util.Criteria;
import com.basic.careernet.command.jobVO;
import com.basic.careernet.command.job_typeVO;

public interface jobService {

	void setJob_type(job_typeVO vo);

	ArrayList<jobVO> getList();
	void setJob(jobVO vo);


	int getTotal();

	List<jobVO> getPage(Criteria cri);

	List<jobVO> getData(List<Integer> list, Criteria cri);

	List<jobVO> getDataOne(int bno);

	int getTotalData(List<Integer> list);

	jobVO getContent(int seq);
	
	
	
}
