package com.song.backfol.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http
 			.httpBasic().disable()      // Http basic Auth  기반으로 로그인 인증창이 뜸.  disable 시에 인증창 뜨지 않음. 
 				.csrf().disable()       // rest api이므로 csrf 보안이 필요없으므로 disable처리.
	 			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // jwt token으로 인증하므로 stateless 하도록 처리.
 			.and()
	 			.authorizeRequests()
					// .antMatchers("/login").permitAll()
	 				// .antMatchers("/edit").authenticated()  // 인증권한이 필요한 페이지. 
	 				.anyRequest().permitAll()     // 나머지 모든 요청 허용  ( 생략 가능 )
 			;
	}
	/* @formatter:on */
}
