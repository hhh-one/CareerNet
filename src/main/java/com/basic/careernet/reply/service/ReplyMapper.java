package com.basic.careernet.reply.service;

import org.apache.ibatis.annotations.Mapper;

import com.basic.careernet.command.ReplyVO;

@Mapper
public interface ReplyMapper {

	//int replyWrite(ReplyVO vo); 
	int writeReply(ReplyVO replyVO);//답글달기
	
}
