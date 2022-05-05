package com.song.backfol.domain.phoneInfo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.song.backfol.domain.phoneInfo.PhoneInfo;
import com.song.backfol.domain.phoneInfo.Service.PhoneInfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
@Controller
// @CrossOrigin(origins = {"http://localhost:5000", "http://localhost:3001", "http://192.168.206.109:5000"})
public class PhoneInfoController{
 
    @Autowired
    PhoneInfoService phoneInfoService;
    
    @GetMapping(value = "/api/phoneinfo")
    public HashMap<String, Object>  test() {
        HashMap<String, Object> result = new HashMap<String, Object>();
        List<PhoneInfo> lists = phoneInfoService.getAllInfo();
        int lastId;
        // 서버에 데이터가 있을 때 처리
        if (lists.size() > 0) {
            lastId =  lists.get(lists.size()-1).getId();
    
            result.put("lastId",lastId);
            result.put("rows",lists);
        // db에 데이터가 없을 때 처리
        }else {
            lastId = 0;
            result.put("lastId",0);
            result.put("rows",lists);
        }
        return result;
    }

    @RequestMapping(value = "api/phoneinfo/a", method = RequestMethod.PATCH, consumes="application/json")
    public  ResponseEntity<String> patchData(@RequestBody Map<String,List<PhoneInfo>> object) {
        List<Integer> deleteList = new ArrayList<Integer>();
        List<PhoneInfo> addList = new ArrayList<PhoneInfo>();
        List<PhoneInfo> updateList = new ArrayList<PhoneInfo>();

        object.forEach((key,val)->{
            if( key == "deleteList"){
                val.forEach(lists->{
                    deleteList.add(lists.getId());
                });
            }
            if( key == "addList"){
                val.forEach(lists->{
                    addList.add(lists);
                });
            }
            if( key == "updateList"){
                val.forEach(lists->{
                    updateList.add(lists);
                });
            }
        });
        phoneInfoService.infoUpdate(updateList);
        phoneInfoService.infoDelete(deleteList);
        phoneInfoService.infoAdd(addList);

        return ResponseEntity.ok("ok");
    }
}
