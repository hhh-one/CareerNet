package com.basic.careernet.bsy.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basic.careernet.command.jobVO;
import com.basic.careernet.command.job_typeVO;

@Service
public class jobServiceImpl implements jobService{

	@Autowired
	jobMapper jobmapper;

	@Override
	public void setJob_type(job_typeVO list) {


		jobmapper.setJob_type(list);
		
	}

	@Override
	public void setJob(jobVO vo) {
		jobmapper.setJob(vo);
		
	}

	@Override
	public ArrayList<jobVO> getList() {


		
		return jobmapper.getList();
	}

	@Override
	public int getTotal() {
		// TODO Auto-generated method stub
		return jobmapper.getTotal();
	}
	
	
}
