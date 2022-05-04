package com.song.backfol.domain.signup;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class UserVo {
    private int userNo;
    // @NotBlank(message = "아이디를 입력해주세요")
    // @Size(min=5, max=20, message = "아이디를 5~20자 사이로 입력해주세요")
    // @Pattern(regexp="^[a-z0-9]{5,20}$", message = "아이디는 영어, 숫자만 가능합니다.")
    private String userId;
    // @NotBlank(message = "비밀번호를 입력해주세요")
    // @Size(min=6, max=20, message = "비밀번호를 6~20자 사이로 입력해주세요")
    // @Pattern(regexp = "^(?=.*[a-zA-Z])((?=.*\\d)(?=.*\\W)).{6,20}$", message="비밀번호는 숫자,영어,특수문자가 최소 한개씩 있어야 합니다")
    private String userPw;
    private String userAuth;
    private String appendDate;
    private String updateDate;
}
