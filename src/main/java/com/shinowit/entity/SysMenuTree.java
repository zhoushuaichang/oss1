package com.shinowit.entity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2014/11/26.
 */

public class SysMenuTree {
    public SysMenuTree parent;
    private boolean leaf;
    private List<SysMenuTree> children = new ArrayList<SysMenuTree>();
    private SysMenuEntity sys_menu;

    public SysMenuTree getParent() {
        return parent;
    }

    public void addChild(SysMenuTree menuTree) {
        menuTree.parent = this;
        children.add(menuTree);
    }


    public void setParent(SysMenuTree parent) {
        this.parent = parent;
    }

    public boolean isLeaf() {
        return leaf;
    }

    public void setLeaf(boolean leaf) {
        this.leaf = leaf;
    }

    public List<SysMenuTree> getChildren() {
        return children;
    }

    public void setChildren(List<SysMenuTree> children) {
        this.children = children;
    }

    public SysMenuEntity getSys_menu() {
        return sys_menu;
    }

    public void setSys_menu(SysMenuEntity sys_menu) {
        this.sys_menu = sys_menu;
    }

}
