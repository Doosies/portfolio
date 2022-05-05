// package com.song.backfol.domain.user;

// import com.song.backfol.domain.user.DTO.IdPasswordDTO;

// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// public class CustomUserDetailsService implements UserDetailsService {

//     private final UserMapper userMapper;

//     @Override
//     public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
//         return userMapper.findUserId(userId)
//                 .map(user -> assautho)
//                 .orElseThrow(() -> new UserNotFoundException(userId + "> 찾을 수 없습니다."));
//     }

//     private IdPasswordDTO addAuthorities(IdPasswordDTO user) {
//         user.setAuthorities(Arrays.asList(new SimpleGrantedAuthority(userDto.getRole())));

//         return userDto;
//     }
// }