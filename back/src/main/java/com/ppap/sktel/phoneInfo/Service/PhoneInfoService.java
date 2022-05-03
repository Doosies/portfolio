package com.ppap.sktel.phoneInfo.Service;

import java.util.ArrayList;
import java.util.List;

import com.ppap.sktel.phoneInfo.PhoneInfo;
import com.ppap.sktel.phoneInfo.Dao.PhoneInfoDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PhoneInfoService implements IPhoneInfoService {

    @Autowired
    private PhoneInfoDao phoneInfoDao;

    public PhoneInfoService(){
        
    }

    @Override
    public void infoAdd(List<PhoneInfo> addList) {
        // TODO 폰 정보 추가
        if( addList.size() > 0){
            phoneInfoDao.phoneInfoInsert(addList);
        }
    }

    @Override
    public List<PhoneInfo> getAllInfo() {
        return phoneInfoDao.phoneInfoSelect();
    }

    @Override
    public void infoUpdate(List<PhoneInfo> updateList) {
        // TODO 폰 정보 수정
        if( updateList.size() > 0){
            phoneInfoDao.phoneInfoUpdate(updateList);
        }

    }

    @Override
    public void infoDelete(List<Integer> deleteListId){
        // TODO 폰 정보 삭제
        if( deleteListId.size() > 0)
            phoneInfoDao.phoneInfoDelete(deleteListId);
    }

}