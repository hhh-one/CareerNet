package com.basic.careernet.consulting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basic.careernet.command.ConsultingVO;
import com.basic.careernet.command.ReplyVO;

@Service("consultingService")
public class ConsultingServiceImpl implements ConsultingService {
	@Autowired
	private ConsultingMapper consultingMapper;
	
	@Override
	public int writeBoard(ConsultingVO vo) {
		return consultingMapper.writeBoard(vo);
	}

	@Override
	public List<ConsultingVO> getBoardList() {
		return consultingMapper.getBoardList();
	}

	@Override
	public ConsultingVO getBoardDetail(int boardId) {
		return consultingMapper.getBoardDetail(boardId);
	}

	@Override
	public ReplyVO getReplyDetail(int boardId) {
		
		return consultingMapper.getReplyDetail(boardId);
	}

}
