package com.shinowit.entity;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "sys_menu")
public class SysMenuEntity {
    private String menuCode;
    private String menuName;
    private String menuUrl;
    private Short sortId;
    private Boolean status;
    private String icon;
    private String remark;
    private String parent;

    //private List<SysLogEntity> sysLogsByMenuCode;
    private SysMenuListEntity sysMenuListByMenuListId;

    //    private Collection<SysRoleToMenuEntity> sysRoleToMenusByMenuCode;

    @Id
    @Column(name = "menu_code")
    public String getMenuCode() {
        return menuCode;
    }

    public void setMenuCode(String menuCode) {
        this.menuCode = menuCode;
    }

    @Basic
    @Column(name = "menu_name")
    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    @Basic
    @Column(name = "menu_url")
    public String getMenuUrl() {
        return menuUrl;
    }

    public void setMenuUrl(String menuUrl) {
        this.menuUrl = menuUrl;
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

    @Basic
    @Column(name = "icon")
    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    @Basic
    @Column(name = "remark")
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Basic
    @Column(name = "parent")
    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

//    @OneToMany(mappedBy = "sysMenuByMenuCode")
//    public List<SysLogEntity> getSysLogsByMenuCode() {
//        return sysLogsByMenuCode;
//    }
//
//    public void setSysLogsByMenuCode(List<SysLogEntity> sysLogsByMenuCode) {
//        this.sysLogsByMenuCode = sysLogsByMenuCode;
//    }

    @ManyToOne
    @JoinColumn(name = "menu_list_id", referencedColumnName = "menu_list_id")
    public SysMenuListEntity getSysMenuListByMenuListId() {
        return sysMenuListByMenuListId;
    }

    public void setSysMenuListByMenuListId(SysMenuListEntity sysMenuListByMenuListId) {
        this.sysMenuListByMenuListId = sysMenuListByMenuListId;
    }

//    @OneToMany(mappedBy = "sysMenuByMenuCode")
//    public Collection<SysRoleToMenuEntity> getSysRoleToMenusByMenuCode() {
//        return sysRoleToMenusByMenuCode;
//    }
//
//    public void setSysRoleToMenusByMenuCode(Collection<SysRoleToMenuEntity> sysRoleToMenusByMenuCode) {
//        this.sysRoleToMenusByMenuCode = sysRoleToMenusByMenuCode;
//    }

}
