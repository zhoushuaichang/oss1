package com.shinowit.entity;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "sys_user")
public class SysUserEntity {
    private int userId;
    private String realName;
    private String loginName;
    private String loginPass;
    private String address;
    private String linkTel;
    private String qq;
    private String email;
    private String mobile;
    private Short sortId;
    private Boolean status;
//    private Collection<InStockEntity> inStocksByUserId;
//    private Collection<OrderInfoEntity> orderInfosByUserId;
//    private Collection<OutStockEntity> outStocksByUserId;
//    private Collection<SysLogEntity> sysLogsByUserId;
//    private List<SysUserRoleEntity> sysUserRolesByUserId;

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "real_name")
    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    @Basic
    @Column(name = "login_name")
    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    @Basic
    @Column(name = "login_pass")
    public String getLoginPass() {
        return loginPass;
    }

    public void setLoginPass(String loginPass) {
        this.loginPass = loginPass;
    }

    @Basic
    @Column(name = "address")
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Basic
    @Column(name = "link_tel")
    public String getLinkTel() {
        return linkTel;
    }

    public void setLinkTel(String linkTel) {
        this.linkTel = linkTel;
    }

    @Basic
    @Column(name = "qq")
    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "mobile")
    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    @Basic
    @Column(name = "sort_id")
    public Short getSortId() {
        return sortId;
    }

    public void setSortId(Short sortId) {
        this.sortId = sortId;
    }

    @Basic
    @Column(name = "status")
    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }


//    @OneToMany(mappedBy = "sysUserByUserId")
//    public Collection<InStockEntity> getInStocksByUserId() {
//        return inStocksByUserId;
//    }
//
//    public void setInStocksByUserId(Collection<InStockEntity> inStocksByUserId) {
//        this.inStocksByUserId = inStocksByUserId;
//    }

//    @OneToMany(mappedBy = "sysUserByUserId")
//    public Collection<OrderInfoEntity> getOrderInfosByUserId() {
//        return orderInfosByUserId;
//    }
//
//    public void setOrderInfosByUserId(Collection<OrderInfoEntity> orderInfosByUserId) {
//        this.orderInfosByUserId = orderInfosByUserId;
//    }

//    @OneToMany(mappedBy = "sysUserByUserId")
//    public Collection<OutStockEntity> getOutStocksByUserId() {
//        return outStocksByUserId;
//    }
//
//    public void setOutStocksByUserId(Collection<OutStockEntity> outStocksByUserId) {
//        this.outStocksByUserId = outStocksByUserId;
//    }

//    @OneToMany(mappedBy = "sysUserByUserId")
//    public Collection<SysLogEntity> getSysLogsByUserId() {
//        return sysLogsByUserId;
//    }
//
//    public void setSysLogsByUserId(Collection<SysLogEntity> sysLogsByUserId) {
//        this.sysLogsByUserId = sysLogsByUserId;
//    }

//    @OneToMany(mappedBy = "sysUserByUserId")
//    public List<SysUserRoleEntity> getSysUserRolesByUserId() {
//        return sysUserRolesByUserId;
//    }
//
//    public void setSysUserRolesByUserId(List<SysUserRoleEntity> sysUserRolesByUserId) {
//        this.sysUserRolesByUserId = sysUserRolesByUserId;
//    }
}
