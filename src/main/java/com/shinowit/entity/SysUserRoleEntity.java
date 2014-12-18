package com.shinowit.entity;

import javax.persistence.*;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "sys_user_role")
@IdClass(SysUserRoleEntityPK.class)
public class SysUserRoleEntity {
    private int userId;
    private String roleCode;

    private String sysUserByUserId;

    @Id
    @Column(name = "user_id")
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Id
    @Column(name = "role_code")
    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }


    public String getSysUserByUserId() {
        return sysUserByUserId;
    }

    public void setSysUserByUserId(String sysUserByUserId) {
        this.sysUserByUserId = sysUserByUserId;
    }
}
