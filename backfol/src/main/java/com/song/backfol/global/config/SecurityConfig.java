package com.song.backfol.global.config;

import com.song.backfol.global.filter.CorsFilter;
import com.song.backfol.global.jwt.JwtAccessDeniedHandler;
import com.song.backfol.global.jwt.JwtAuthenticationEntryPoint;
// import com.song.backfol.global.jwt.JwtExceptionFilter;
import com.song.backfol.global.jwt.JwtFilter;
import com.song.backfol.global.jwt.JwtSecurityConfig;
import com.song.backfol.global.jwt.TokenProvider;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)

public class SecurityConfig extends WebSecurityConfigurerAdapter{
    private final TokenProvider tokenProvider;
    private final CorsFilter corsFilter;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;
	// private final JwtFilter jwtFilter;
	// private final JwtExceptionFilter jwtExceptionFilter;
	
	public SecurityConfig(
		TokenProvider tokenProvider,
		CorsFilter corsFilter,
		JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
		JwtAccessDeniedHandler jwtAccessDeniedHandler
		// JwtFilter jwtFilter
		// JwtExceptionFilter jwtExceptionFilter
	
	){
        this.tokenProvider = tokenProvider;
        this.corsFilter = corsFilter;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
		// this.jwtFilter = jwtFilter;
		// this.jwtExceptionFilter = jwtExceptionFilter;
	}


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http			
		
			.cors().configurationSource(corsConfigurationSource())    // rest api이므로 csrf 보안이 필요없으므로 disable처리.
			.and().csrf().disable()
 			.httpBasic().disable();
			      

	 	http.sessionManagement()
		 	.sessionCreationPolicy(SessionCreationPolicy.STATELESS);  // jwt token으로 인증하므로 stateless 하도록 처리.
 			// .and()

		http.authorizeRequests()	
			// .antMatchers("/board/create").hasRole("USER")  // 인증권한이 필요한 페이지. 
			// .antMatchers("/api/v1/board/edit").hasRole("USER")  // 인증권한이 필요한 페이지. 
			.antMatchers("/api/v1/get").permitAll()
			.antMatchers("/api/v1/login").permitAll()
			.antMatchers("/api/v1/join").permitAll();
			// .antMatchers("/api/v1/board/edit").permitAll();
		
		http
			.addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
			// .addFilterBefore(usernamepass, JwtFilter.class)
			.exceptionHandling()
			.authenticationEntryPoint(jwtAuthenticationEntryPoint)
			.accessDeniedHandler(jwtAccessDeniedHandler);
			// .expressionHanling
			// .antMatchers("/api/").permitAll();
			// .antMatchers("/").permitAll()
			// .anyRequest().authenticated();     // 나머지 모든 요청 불허  ( 생략 가능 )

		http.apply(new JwtSecurityConfig(tokenProvider));

		// http.addFilter(jwtau)

	}
	@Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOrigin("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
	}
	


}
