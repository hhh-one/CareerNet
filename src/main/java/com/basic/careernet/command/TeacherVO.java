package com.basic.careernet.command;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TeacherVO {

	
	private Integer tea_tno;
	
	@NotBlank(message="이름은 필수입니다.")
	private String tea_name;
	
	@NotBlank(message="아이디는 필수입니다.")
	@Pattern(message="규칙에 맞게 적어주세요", regexp="^[a-zA-Z0-9,_-]{5,20}$")
	private String tea_id;
	
	@NotBlank(message="비밀번호는 필수입니다.")
	@Pattern(message="규칙에 맞게 적어주세요", regexp="^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~`!@#$%^&*()\\-_=+\\\\|]).{8,20}$")
	private String tea_pw;
	
	
	@NotBlank(message="이메일은 필수입니다.")
	@Email(message="이메일 형식에 맞게 입력해주세요")
	private String tea_email;
	
	@NotBlank(message="지역은 필수입니다.")
	private String tea_area;
	
	//선택입력
//	@NotBlank(message="성별은 필수입니다.")
	private Character tea_gender;

	private String tea_school;
	
	private Integer tea_age;
	
	private String tea_birthday;
	
	
	
}
