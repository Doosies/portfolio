package com.song.backfol.global.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GlobalMapper {
    int getNextIncrement(String tableName);
    
}
