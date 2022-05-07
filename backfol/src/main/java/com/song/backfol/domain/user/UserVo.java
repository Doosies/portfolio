package com.song.backfol.domain.user;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserVo {
    public UserVo(String subject, String string, Collection<? extends GrantedAuthority> authorities) {
    }
    private int userNo;
    private String userId;
    private String userPw;
}
