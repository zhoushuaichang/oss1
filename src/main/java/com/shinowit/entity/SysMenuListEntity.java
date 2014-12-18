package com.shinowit.entity;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "sys_menu_list", schema = "dbo", catalog = "oss")
public class SysMenuListEntity {
    private String menuListId;
    private String menuListName;
    private Collection<SysMenuEntity> sysMenusByMenuListId;

    @Id
    @Column(name = "menu_list_id")
    public String getMenuListId() {
        return menuListId;
    }

    public void setMenuListId(String menuListId) {
        this.menuListId = menuListId;
    }

    @Basic
    @Column(name = "menu_list_name")
    public String getMenuListName() {
        return menuListName;
    }

    public void setMenuListName(String menuListName) {
        this.menuListName = menuListName;
    }


    @OneToMany(mappedBy = "sysMenuListByMenuListId")
    public Collection<SysMenuEntity> getSysMenusByMenuListId() {
        return sysMenusByMenuListId;
    }

    public void setSysMenusByMenuListId(Collection<SysMenuEntity> sysMenusByMenuListId) {
        this.sysMenusByMenuListId = sysMenusByMenuListId;
    }
}
