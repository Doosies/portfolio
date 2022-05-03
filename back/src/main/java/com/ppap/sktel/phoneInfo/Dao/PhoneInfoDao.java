package com.ppap.sktel.phoneInfo.Dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

import com.ppap.sktel.phoneInfo.PhoneInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;


@Component(value="phoneInfoDao")
public class PhoneInfoDao implements IPhoneInfoDao {

    @Autowired(required = false)
    private JdbcTemplate jdbcTemplate;

    @Override
    public void phoneInfoInsert(List<PhoneInfo> insertList) {
        System.out.println("data insert");
        System.out.println(insertList.size());
        this.jdbcTemplate.batchUpdate("insert into phn_info_tb(id, model_name, machine_name, shipping_price, maker, created, battery, screen_size, storage) values(?,?,?,?,?,?,?,?,?)",
            new BatchPreparedStatementSetter(){
                @Override
                public void setValues(PreparedStatement ps, int i) throws SQLException{
                    ps.setInt(1, insertList.get(i).getId());
                    ps.setString(2, insertList.get(i).getModel_name());
                    ps.setString(3, insertList.get(i).getMachine_name());
                    ps.setString(4, insertList.get(i).getShipping_price());
                    ps.setString(5, insertList.get(i).getMaker());
                    ps.setDate(6, insertList.get(i).getCreated());
                    ps.setString(7, insertList.get(i).getBattery());
                    ps.setString(8, insertList.get(i).getScreen_size());
                    ps.setString(9, insertList.get(i).getStorage());
                }
                @Override
                public int getBatchSize() {
                    return insertList.size();
                }
            });

    }

    @Override
    public void phoneInfoUpdate(List<PhoneInfo> updateList) {
        System.out.println("data update");
        this.jdbcTemplate.batchUpdate(
            "UPDATE phn_info_tb "
                +"SET model_name=ifnull(?,model_name), machine_name=ifnull(?,machine_name), shipping_price=ifnull(?,shipping_price), "
                +"maker=ifnull(?,maker), created=ifnull(?,created), battery=if(?='',null,ifnull(?,battery)), screen_size=if(?='',null,ifnull(?,screen_size)), storage=if(?='',null,ifnull(?,storage)) "
                +"WHERE id = ?",
                new BatchPreparedStatementSetter(){
                    @Override
                    public void setValues(PreparedStatement ps, int i) throws SQLException{
                        ps.setString(1, updateList.get(i).getModel_name());
                        ps.setString(2, updateList.get(i).getMachine_name());
                        ps.setString(3, updateList.get(i).getShipping_price());
                        ps.setString(4, updateList.get(i).getMaker());
                        ps.setDate(5, updateList.get(i).getCreated());
                        ps.setString(6, updateList.get(i).getBattery());
                        ps.setString(7, updateList.get(i).getBattery());
                        ps.setString(8, updateList.get(i).getScreen_size());
                        ps.setString(9, updateList.get(i).getScreen_size());
                        ps.setString(10, updateList.get(i).getStorage());
                        ps.setString(11, updateList.get(i).getStorage());
                        ps.setInt(12, updateList.get(i).getId());
                    }
                    @Override
                    public int getBatchSize() {
                        return updateList.size();
                    }
                });
    }

    @Override
    public void phoneInfoDelete(List<Integer>id) {
        System.out.println("data delete");
        System.out.println(id);
        List<Object[]> ts = id.stream().map(i -> new Object[]{i}).collect(Collectors.toList());
        this.jdbcTemplate.batchUpdate("delete from phn_info_tb where ID = ?", ts);
    }

    @Override
    public List<PhoneInfo> phoneInfoSelect() {
        System.out.println("data select");
        String sql = "SELECT id, model_name, machine_name, FORMAT(shipping_price, 0)as shipping_price, maker, created, if(isnull(battery),'',FORMAT(battery,0))as battery , if(isnull(screen_size),'',FORMAT(screen_size,0))as screen_size, if(isnull(storage),'',FORMAT(storage,0))as storage FROM phn_info_tb;";
        return jdbcTemplate.query(sql,
            (rs, rowNum) -> new PhoneInfo(
                rs.getInt("id"),
                rs.getString("model_name"),
                rs.getString("machine_name"),
                rs.getString(4),// FORMAT( data, 0)
                rs.getString("maker"),
                rs.getDate("created"),
                rs.getString(7),
                rs.getString(8),
                rs.getString(9)
            )
        );
    }
	
}
