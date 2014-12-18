package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.SysUserEntity;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014-12-09.
 */
public class SysUserAction {

    @Resource
    private BaseDAO<SysUserEntity> sys_user_dao;

    private List<SysUserEntity> sysUserRootList;
    private SysUserEntity sysUser;
    private String userIdList;

    private boolean success;
    private boolean state;
    private String message;


    public String showSysUserRootList() {
        try {
            sysUserRootList = sys_user_dao.listAll(SysUserEntity.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "ok";
    }

    public String saveSysUser() {
        boolean result = false;
        try {
            sys_user_dao.insert(sysUser);
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (result) {
            success = true;
            state = true;
            message = "添加成功！";
        } else {
            success = true;
            state = false;
            message = "添加失败！";
        }
        return "ok";
    }

    public String updateSysUser() {
        boolean result = false;
        try {
            result = sys_user_dao.update(sysUser);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (result) {
            success = true;
            state = true;
            message = "修改成功！";
        } else {
            success = true;
            state = false;
            message = "修改失败！";
        }
        return "ok";
    }

    public String deleteSysUser() {
        String hql = "delete from SysUserEntity where userId in (";
        String userIdStr[] = userIdList.split(",");
        Integer userIdArr[] = new Integer[userIdStr.length];
        int num = 0;
        for (int i = 0; i < userIdStr.length; i++) {
            userIdArr[i] = Integer.parseInt(userIdStr[i]);
            if (i == userIdStr.length - 1) {
                hql += "? )";
            } else {
                hql += "? ,";
            }
        }
        try {
            num = sys_user_dao.extcuteHQL1(hql, userIdArr);

        } catch (Exception e) {
            e.printStackTrace();
        }
        if (num > 0) {
            success = true;
            state = true;
            message = "删除成功！";
        } else {
            success = true;
            state = false;
            message = "删除失败！";
        }
        return "ok";
    }

//-------------------------------------------------------------------------------------------


    public String getUserIdList() {
        return userIdList;
    }

    public void setUserIdList(String userIdList) {
        this.userIdList = userIdList;
    }

    public SysUserEntity getSysUser() {
        return sysUser;
    }

    public void setSysUser(SysUserEntity sysUser) {
        this.sysUser = sysUser;
    }

    public List<SysUserEntity> getSysUserRootList() {
        return sysUserRootList;
    }

    public void setSysUserRootList(List<SysUserEntity> sysUserRootList) {
        this.sysUserRootList = sysUserRootList;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
