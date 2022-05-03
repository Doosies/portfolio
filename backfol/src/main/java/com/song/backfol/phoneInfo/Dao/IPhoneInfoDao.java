package com.song.backfol.phoneInfo.Dao;

import java.util.ArrayList;
import java.util.List;

import com.mysql.cj.x.protobuf.MysqlxDatatypes.Array;
import com.song.backfol.phoneInfo.PhoneInfo;

public interface IPhoneInfoDao {
    void phoneInfoInsert(List<PhoneInfo> list);
    void phoneInfoUpdate(List<PhoneInfo> list);
    void phoneInfoDelete(List<Integer> id);
    List<PhoneInfo> phoneInfoSelect();
}
