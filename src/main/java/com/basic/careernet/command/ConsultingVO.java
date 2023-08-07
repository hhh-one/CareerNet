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
public class ConsultingVO {
	private Integer boardId;
	private String title;
	private String content;
	private LocalDateTime regdate;
	private String writer;
	private Integer hit;
}
