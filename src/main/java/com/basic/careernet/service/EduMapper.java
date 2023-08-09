package com.basic.careernet.service;

import org.apache.ibatis.annotations.Mapper;

import com.basic.careernet.command.EduVO;
import com.basic.careernet.util.Criteria;


@Mapper
public interface EduMapper {
	
	// 데이터 게시글 등록
    public void getJobs(EduVO vo);
    
    // 페이징
    public int getTotal(Criteria cri);
    
}
