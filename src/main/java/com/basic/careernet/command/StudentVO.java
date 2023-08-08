package com.basic.careernet.command;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentVO {
	private Integer sno;
	@Pattern(message = "아이디를 입력해주세요", regexp = "[a-z0-9_-]{5,20}")
	private String id;

	@Pattern(message = "올바르지 않은 비밀번호입니다", regexp = "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}")
	private String pw;
	
	@NotBlank(message = "이름은 필수정보입니다")
	private String name;
	
	@NotBlank(message = "성별을 선택해주세요")
	private String gender;
	
	@NotBlank(message = "이메일을 입력해주세요")
	@Email(message = "이메일 형식이 맞지 않습니다")
	private String email;
	
	@NotBlank(message = "거주지역을 선택해 주세요")
	private String area;
	private String identity;
	private String birthday;
}
