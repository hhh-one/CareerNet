package com.basic.careernet.service;

import com.basic.careernet.command.EduVO;
import com.basic.careernet.util.Criteria;

public interface EduService {
	
	// 데이터 게시글 등록
    public void getJobs(EduVO vo);
    
    // 페이징
    public int getTotal(Criteria cri);
    
}


