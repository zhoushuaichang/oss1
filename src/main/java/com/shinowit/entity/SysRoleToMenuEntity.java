package com.shinowit.entity;

import javax.persistence.*;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "sys_role_to_menu", schema = "dbo", catalog = "oss")
@IdClass(SysRoleToMenuEntityPK.class)
public class SysRoleToMenuEntity {
    private String roleCode;
    private String menuCode;

    @Id
    @Column(name = "role_code")
    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    @Id
    @Column(name = "menu_code")
    public String getMenuCode() {
        return menuCode;
    }

    public void setMenuCode(String menuCode) {
        this.menuCode = menuCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SysRoleToMenuEntity that = (SysRoleToMenuEntity) o;

        if (menuCode != null ? !menuCode.equals(that.menuCode) : that.menuCode != null) return false;
        if (roleCode != null ? !roleCode.equals(that.roleCode) : that.roleCode != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = roleCode != null ? roleCode.hashCode() : 0;
        result = 31 * result + (menuCode != null ? menuCode.hashCode() : 0);
        return result;
    }
}
