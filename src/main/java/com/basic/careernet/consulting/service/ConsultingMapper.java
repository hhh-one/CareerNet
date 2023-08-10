package com.basic.careernet.consulting.service;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.basic.careernet.command.ConsultingVO;
import com.basic.careernet.command.ReplyVO;

@Mapper
public interface ConsultingMapper {
	int writeBoard(ConsultingVO vo);
	List<ConsultingVO> getBoardList(ConsultingCriteria consultingCri);
	int getBoardTotal(ConsultingCriteria consultingCri);
	ConsultingVO getBoardDetail(int boardId);
	ReplyVO getReplyDetail(int boardId);
}
