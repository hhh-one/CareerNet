package com.basic.careernet.consulting.service;

import java.util.List;

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

	@Override
	public List<ConsultingVO> getBoardList(ConsultingCriteria consultingCri) {
		return consultingMapper.getBoardList(consultingCri);
	}

	@Override
	public int getBoardTotal(ConsultingCriteria consultingCri) {
		return consultingMapper.getBoardTotal(consultingCri);
	}

	@Override
	public ConsultingVO getBoardDetail(int boardId) {
		return consultingMapper.getBoardDetail(boardId);
	}

}
