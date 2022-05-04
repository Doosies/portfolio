package com.song.backfol.domain.phoneInfo.Service;

import java.util.ArrayList;
import java.util.List;

import com.song.backfol.domain.phoneInfo.PhoneInfo;

public interface IPhoneInfoService{
    void infoAdd(List<PhoneInfo> phoneInfoList);
    List<PhoneInfo> getAllInfo();
    void infoUpdate(List<PhoneInfo> phoneInfoList);
    void infoDelete(List<Integer> id);
}