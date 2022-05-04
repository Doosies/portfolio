package com.song.backfol.domain.phoneInfo;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class PhoneInfo{
	private int id;
    private String model_name;
    private String machine_name;
    private String shipping_price;
    private String maker;
    private Date created;
    private String battery;
    private String screen_size;
    private String storage;


	public PhoneInfo(
        int id,
        String model_name,
        String machine_name,
        String shipping_price,
        String maker,
        Date created,
        String battery,
        String screen_size,
        String storage)
    {
        this.id=id;
        this.model_name=model_name;
        this.machine_name = machine_name;
        this.shipping_price = shipping_price;
        this.maker = maker;
        this.created = created;
        this.battery = battery;
        this.screen_size = screen_size;
        this.storage = storage;
    }

    // public PhoneInfo(PhoneInfo phoneinfo){
    //     this.id = phoneinfo.getId();
    //     this.model_name=phoneinfo.getModel_name();
    //     this.machine_name = phoneinfo.getMachine_name();
    //     this.shipping_price = phoneinfo.getShipping_price();
    //     this.maker = phoneinfo.getMaker();
    //     this.created = phoneinfo.getCreated();
    //     this.battery = phoneinfo.getBattery();
    //     this.screen_size = phoneinfo.getScreen_size();
    //     this.storage = phoneinfo.getStorage();
    // }
}