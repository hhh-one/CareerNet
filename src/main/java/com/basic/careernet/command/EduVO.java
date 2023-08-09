package com.basic.careernet.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EduVO {

	private String eduId;
	private String targt;
	private String achieveType;
	private String year;
	private String author;
	private String dataTitle;
	private String selCount;
	private String regDate;
	private String activityType;
	private String seq;
	private String attFile;
	
	
}
