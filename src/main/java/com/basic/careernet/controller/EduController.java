package com.basic.careernet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.basic.careernet.command.EduVO;
import com.basic.careernet.service.EduService;
import com.basic.careernet.util.Criteria;
import com.basic.careernet.util.PageVO;

@RestController
public class EduController {

    @Autowired
    private EduService eduService;
    
    @PostMapping("/edu/eduBoard")
    public String getJobs(@RequestBody List<EduVO> list, Model model, Criteria cri) {
        System.out.println("======================================================");
    	System.out.println(list.toString());
        System.out.println("======================================================");
    	for(EduVO vo : list) {
    		eduService.getJobs(vo);
    	}
    	
    	int total = eduService.getTotal(cri);
    	PageVO pagevo = new PageVO(cri, total);
    	
    	model.addAttribute("list", list);
    	model.addAttribute("Pagevo", pagevo);
    	
    	
    	
    	return "edu/eduBoard";
    }
    
    
    
}
