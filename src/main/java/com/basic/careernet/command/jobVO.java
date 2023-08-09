package com.basic.careernet.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class jobVO {

	private String jobdicSeq;
	private String profession;
	private String summary;
	private String similarJob;
	private String salery;
	private String equalemployment;
	private String totalCount;
	private String aptd_type_code;
	private String prospect;
	private String job_ctg_code;
	private String job_code;
	private String job;
	private String possibility;
	
}
