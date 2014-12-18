package com.shinowit.entity;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by Administrator on 2014/11/26.
 */
public class SysRoleToMenuEntityPK implements Serializable {
    private String roleCode;
    private String menuCode;

    @Column(name = "role_code")
    @Id
    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    @Column(name = "menu_code")
    @Id
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

        SysRoleToMenuEntityPK that = (SysRoleToMenuEntityPK) o;

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
