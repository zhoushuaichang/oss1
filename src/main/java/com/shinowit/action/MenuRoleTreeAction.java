package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.MenuRoleTreeNode;
import com.shinowit.entity.SysMenuEntity;
import com.shinowit.entity.SysRoleEntity;
import com.shinowit.entity.SysRoleToMenuEntity;
import com.shinowit.services.RoleMenuService;
import net.sf.ehcache.transaction.xa.EhcacheXAException;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2014/12/14.
 */
public class MenuRoleTreeAction {


    @Resource
    private BaseDAO<SysMenuEntity> sys_menu_dao;
    @Resource
    private RoleMenuService role_menu_service;

    private String roleCode;
    private MenuRoleTreeNode root;
    private SysRoleEntity sysRole;
    private SysRoleEntity updateRoleArr;
    private List<SysRoleToMenuEntity> roleMenuTree;

    private void queryChildren(MenuRoleTreeNode parent) {
        String sql = "select distinct * from sys_menu where parent = " + parent.getSys_menu().getMenuCode();
        List<SysMenuEntity> childrenList = sys_menu_dao.findBySql1(sql, SysMenuEntity.class);

        for (SysMenuEntity child : childrenList) {
            MenuRoleTreeNode node = new MenuRoleTreeNode();
            node.setSys_menu(child);
            parent.addChild(node);
            queryChildren(node);
        }

    }

    private MenuRoleTreeNode showTreeNode() {
        MenuRoleTreeNode tree = new MenuRoleTreeNode();
        try {
            String sql = "select distinct * from sys_menu right join sys_role_to_menu on sys_menu.menu_code=sys_role_to_menu.menu_code where sys_menu.parent='000' ";

            List<SysMenuEntity> rootList = new ArrayList<SysMenuEntity>();
            rootList = sys_menu_dao.findBySql1(sql, SysMenuEntity.class);

            for (SysMenuEntity root : rootList) {
                MenuRoleTreeNode node = new MenuRoleTreeNode();
                node.setSys_menu(root);
                tree.addChild(node);
                queryChildren(node);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return tree;

    }

    public String showMenuRole() {
        try {
            root = showTreeNode();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "ok";
    }

    public String updateMenuRole() {

        for (SysRoleToMenuEntity roleMenu : roleMenuTree) {
            roleMenu.setRoleCode(updateRoleArr.getRoleCode());
        }
        try {
            role_menu_service.updateRoleMenu(updateRoleArr, roleMenuTree);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return "ok";
    }

//--------------------------------------------------------------------------------------------------------------------


    public SysRoleEntity getSysRole() {
        return sysRole;
    }

    public void setSysRole(SysRoleEntity sysRole) {
        this.sysRole = sysRole;
    }

    public SysRoleEntity getUpdateRoleArr() {
        return updateRoleArr;
    }

    public void setUpdateRoleArr(SysRoleEntity updateRoleArr) {
        this.updateRoleArr = updateRoleArr;
    }

    public List<SysRoleToMenuEntity> getRoleMenuTree() {
        return roleMenuTree;
    }

    public void setRoleMenuTree(List<SysRoleToMenuEntity> roleMenuTree) {
        this.roleMenuTree = roleMenuTree;
    }

    public MenuRoleTreeNode getRoot() {
        return root;
    }

    public void setRoot(MenuRoleTreeNode root) {
        this.root = root;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }
}
