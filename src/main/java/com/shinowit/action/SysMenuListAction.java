package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.SysMenuListEntity;
import org.apache.struts2.ServletActionContext;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by Administrator on 2014/11/26.
 */
public class SysMenuListAction {

    @Resource
    private BaseDAO dao;

    private List<SysMenuListEntity> sysMenuList;

    public String showMenuGroup() {

        String sql = "select * from sys_menu_list where menu_list_id in(select distinct menu_list_id from sys_menu where menu_code in (\n" +
                "select menu_code from sys_role_to_menu where role_code=?))";

        HttpSession session = ServletActionContext.getRequest().getSession();
        String roleCode = (String) session.getAttribute("roleCode");

        sysMenuList = (List<SysMenuListEntity>) dao.findBySql1(sql, SysMenuListEntity.class, roleCode);
        return "ok";
    }

    public List<SysMenuListEntity> getSysMenuList() {
        return sysMenuList;
    }

    public void setSysMenuList(List<SysMenuListEntity> sysMenuList) {
        this.sysMenuList = sysMenuList;
    }


}
