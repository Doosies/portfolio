package com.song.backfol.domain.signup;

import lombok.Data;

@Data
public class UserVo {
    private int userNo;
    private String userId;
    private String userPw;
    private String userAuth;
    private String appendDate;
    private String updateDate;
}
