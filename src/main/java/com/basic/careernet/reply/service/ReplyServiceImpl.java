package com.basic.careernet.reply.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basic.careernet.command.ReplyVO;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService{

	@Autowired
	private ReplyMapper replyMapper;
	
//	@Override
//	public int replyWrite(ReplyVO vo) {
//		// TODO Auto-generated method stub
//		return 0;
//	}
	
	//답글달기
	@Override
	public int writeReply(ReplyVO replyVO) {
		return replyMapper.writeReply(replyVO);
	}



}
