package com.song.backfol.global.service;

import com.song.backfol.global.mapper.GlobalMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GlobalService {
    
    @Autowired
    GlobalMapper dbInfoMapper;

    public int getNextIncrement(String username) {
        return dbInfoMapper.getNextIncrement(username);
    }
}
