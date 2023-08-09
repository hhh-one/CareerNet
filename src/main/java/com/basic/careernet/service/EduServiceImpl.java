package com.basic.careernet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basic.careernet.command.EduVO;
import com.basic.careernet.util.Criteria;


@Service("eduService")
public class EduServiceImpl implements EduService {
	
	@Autowired
    private EduMapper eduMapper;

	@Override
	public void getJobs(EduVO vo) {
		eduMapper.getJobs(vo); 
	}

	@Override
	public int getTotal(Criteria cri) {
		return eduMapper.getTotal(cri);
	}
}
