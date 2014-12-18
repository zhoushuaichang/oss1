package com.shinowit.entity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2014/12/14.
 */
public class MenuRoleTreeNode {


    public MenuRoleTreeNode parent;
    private boolean leaf;
    private List<MenuRoleTreeNode> children = new ArrayList<MenuRoleTreeNode>();
    private SysMenuEntity sys_menu;
    private boolean checked;

    public boolean isChecked() {
//        this.checked=true;
        return checked;
    }

    public void setChecked(boolean checked) {
        this.checked = checked;
    }

    public MenuRoleTreeNode getParent() {
        return parent;
    }

    public void addChild(MenuRoleTreeNode menuTree) {
        menuTree.parent = this;
        children.add(menuTree);
    }

    public void setParent(MenuRoleTreeNode parent) {
        this.parent = parent;
    }

    public boolean isLeaf() {
        return leaf;
    }

    public void setLeaf(boolean leaf) {
        this.leaf = leaf;
    }

    public List<MenuRoleTreeNode> getChildren() {
        return children;
    }

    public void setChildren(List<MenuRoleTreeNode> children) {
        this.children = children;
    }

    public SysMenuEntity getSys_menu() {
        return sys_menu;
    }

    public void setSys_menu(SysMenuEntity sys_menu) {
        this.sys_menu = sys_menu;
    }
}
