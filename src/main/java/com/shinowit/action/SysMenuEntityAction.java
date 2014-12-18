package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.SysMenuEntity;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by Administrator on 2014/11/26.
 */
public class SysMenuEntityAction {

    @Resource
    private BaseDAO dao;

    private List<SysMenuEntity> sysMenuEntityList;

    public String showSysMenu() {
        sysMenuEntityList = dao.listAll(SysMenuEntity.class);
        return "ok";
    }

    public List<SysMenuEntity> getSysMenuEntityList() {

        return sysMenuEntityList;
    }

    public void setSysMenuEntityList(List<SysMenuEntity> sysMenuEntityList) {
        this.sysMenuEntityList = sysMenuEntityList;
    }
}
