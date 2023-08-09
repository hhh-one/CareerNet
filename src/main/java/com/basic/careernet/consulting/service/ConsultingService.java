package com.basic.careernet.consulting.service;

import java.util.List;

import com.basic.careernet.command.ConsultingVO;

public interface ConsultingService {
	int writeBoard(ConsultingVO vo);
	List<ConsultingVO> getBoardList(ConsultingCriteria consultingCri);
	int getBoardTotal(ConsultingCriteria consultingCri);
	ConsultingVO getBoardDetail(int boardId);
}
