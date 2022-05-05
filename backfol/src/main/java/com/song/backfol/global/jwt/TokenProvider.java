package com.song.backfol.global.jwt;

import java.security.Key;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class TokenProvider implements InitializingBean{

    private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);

    private static final String AUTHORITIES_KEY = "auth";
    private final long accessTokenValidityInMilliseconds;
    private final long refreshTokenValidityInMilliseconds;
    private final String secret;
    private Key key;


    @Autowired
    UserDetailsService userDetailsService;


    public TokenProvider(
        @Value("${jwt.secret}") String secret,
        @Value("${jwt.access-token-validity-in-seconds}") long accessTokenValidityInSeconds,
        @Value("${jwt.refresh-token-validity-in-seconds}") long refreshTokenValidityInSeconds
    ){
        this.secret = secret;
        this.accessTokenValidityInMilliseconds = accessTokenValidityInSeconds * 1000;
        this.refreshTokenValidityInMilliseconds = refreshTokenValidityInSeconds * 1000;
    }


    @Override
    public void afterPropertiesSet() {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    /**
     * 액세스 토큰 생성 메서드
     * @param userId 발급받는 유저의 아이디
     * @param roles 발급받는 유저의 권한
     * @return 발급받은 토큰을 리턴해줌
     */
    public String createAcessToken(String userId, List<String> roles) {
        Claims claims = Jwts.claims().setSubject(userId);
        claims.put("roles", roles);
        // 토큰 만료기간
        Date now = new Date();
        Date validity = new Date(now.getTime() + this.accessTokenValidityInMilliseconds);
        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(now) //토큰 발행 시간정보
                .setExpiration(validity) // 토큰 만료일 설정
                .signWith(key, SignatureAlgorithm.HS512) // 암호화
                .compact();
    }
    
    /**
     * 리프레시 토큰 생성 메서드
     * @param userId 발급받는 유저의 아이디
     * @param roles 발급받는 유저의 권한
     * @return 발급받은 토큰을 리턴해줌
     */
    public String createRefreshToken(String userId, List<String> roles) {
        Claims claims = Jwts.claims().setSubject(userId);
        claims.put("roles", roles);
        // 토큰 만료기간
        Date now = new Date();
        Date validity = new Date(now.getTime() + this.refreshTokenValidityInMilliseconds);
        return Jwts.builder()
                .setIssuedAt(now) //토큰 발행 시간정보
                .setExpiration(validity) // 토큰 만료일 설정
                .signWith(key, SignatureAlgorithm.HS512) // 암호화
                .compact();
    }
    
    /**
     * Token에 담겨있는 정보를 이용해 Authentication 객체를 반환하는 메서드
     */
    public Authentication getAuthentication(String token) {
        UserDetails userDetails = 
        userDetailsService.loadUserByUsername(this.getUserId(token));
        
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }
    // // 유저 이름 추출
    public String getUserId(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Request header에서 token 꺼내옴
    public String resolveToken(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        // 가져온 Authorization Header 가 문자열이고, Bearer 로 시작해야 가져옴
        if (StringUtils.hasText(token) && token.startsWith("Bearer ")) {
            return token.substring(7);
        }
        return null;
    }
    /**
     * 토큰을 파싱하고 발생하는 예외를 처리, 문제가 있을경우 false 반환
     */
    public boolean validateToken(String token) {
        try {
            Claims claim = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
            // if ())
            
            // System.out.println(claim.getIssuedAt());
        //    return true;
            // 만료기간 검사
            boolean test = claim.getExpiration().before(new Date());
            System.out.println(claim.getExpiration().before(new Date()));
            System.out.println(claim.getExpiration());
            System.out.println(new Date());
            return test;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
           logger.info("잘못된 JWT 서명입니다.");
           System.out.println("잘못된 JWT 서명입니다!");
        } catch (ExpiredJwtException e) {
           logger.info("만료된 JWT 토큰입니다.");
           System.out.println("만료된 JWT 토큰입니다!");
        } catch (UnsupportedJwtException e) {
           logger.info("지원되지 않는 JWT 토큰입니다.");
           System.out.println("지원되지 않는 JWT 토큰입니다!");
        } catch (IllegalArgumentException e) {
           logger.info("JWT 토큰이 잘못되었습니다.");
           System.out.println("JWT 토큰이 잘못되었습니다!");
        }
        return false;
     }
}
