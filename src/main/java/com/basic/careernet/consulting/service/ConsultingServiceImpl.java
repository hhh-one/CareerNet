package com.basic.careernet.consulting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basic.careernet.command.ConsultingVO;

@Service("consultingService")
public class ConsultingServiceImpl implements ConsultingService {
	@Autowired
	private ConsultingMapper consultingMapper;
	
	@Override
	public int writeBoard(ConsultingVO vo) {
		return consultingMapper.writeBoard(vo);
	}

}
