package com.basic.careernet.command;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReplyVO {
	
	
	private Integer replyId;
	private String title; 
	private String reply;
	private LocalDateTime regdate;
	private Integer tno;
	private Integer boardId;
	
	

}
