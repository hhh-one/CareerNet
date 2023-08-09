package com.basic.careernet.bsy.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.basic.careernet.bsy.util.Criteria;
import com.basic.careernet.command.jobVO;
import com.basic.careernet.command.job_typeVO;

@Mapper
public interface jobMapper {

	void setJob_type(job_typeVO list);

	void setJob(jobVO vo);

	ArrayList<jobVO> getList();
	int getTotal();

	ArrayList<jobVO> getTarget(Criteria cri);

	
	List<jobVO> getData(@Param("list")List<Integer> list, @Param("cir") Criteria cri);

	List<jobVO> getDataOne(int bno);

	int getTotalData(List<Integer> list);

	jobVO getContent(int seq);
	
}
