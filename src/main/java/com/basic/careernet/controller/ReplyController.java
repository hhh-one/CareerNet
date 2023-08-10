package com.basic.careernet.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.basic.careernet.command.ConsultingVO;
import com.basic.careernet.command.ReplyVO;
import com.basic.careernet.consulting.service.ConsultingService;
import com.basic.careernet.reply.service.ReplyService;

@Controller
@RequestMapping("/reply")
public class ReplyController {
	
	

	@Autowired
	@Qualifier("replyService")
	private ReplyService replyService;
	
	//교사 로그인후 가능한지 확인, 학생 로그인 후 안되는지 확인
//	@GetMapping("/detail/{boardId}/{replyId}")
//	public String replyWrite(HttpServletRequest request,
//							 RedirectAttributes ra) {
//		HttpSession session = request.getSession();
//		
//		if(session.getAttribute("teacher_no") == null) {
//			ra.addFlashAttribute("login_please", "교사만 답변이 가능합니다.");
//			return "redirect:/consulting/boardDetail";
//		}
//		return "reply/writeReply";
//	}
	@GetMapping("/writeReply")
	public String writeReply(HttpServletRequest request,//
							@RequestParam("key") String boardId,
							Model model) {
		HttpSession session = request.getSession();//
		
		session.setAttribute("teacher_no", 1);//
		model.addAttribute("key", boardId);
		
		return "reply/writeReply";
	}
	
	@PostMapping("/replyForm")
	public String replyForm(@ModelAttribute("replyVO") ReplyVO replyVO,
							HttpServletRequest request) {
//		replyService.writeReply(replyVO);
		HttpSession session = request.getSession();
		
		replyVO.setTno((int)session.getAttribute("teacher_no")); 
//		System.out.println(replyVO.toString());
		replyService.writeReply(replyVO);
		
		return "redirect:/consulting/list";		
	}
	

	
	
	
	
	
	
	



}
