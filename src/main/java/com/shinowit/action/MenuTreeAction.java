package com.shinowit.action;

import com.opensymphony.xwork2.ActionSupport;
import com.shinowit.dao.TreeDAO;
import com.shinowit.entity.SysMenuTree;
import org.apache.struts2.ServletActionContext;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * Created by Administrator on 2014-12-10.
 */
public class MenuTreeAction extends ActionSupport {

    @Resource
    private TreeDAO dao;

    private SysMenuTree root;

    private boolean success;


    public String showTree() {
        success = true;
        HttpSession session = ServletActionContext.getRequest().getSession();
        String roleCode = (String) session.getAttribute("roleCode");
        root = dao.showTreeNode(roleCode);
        return SUCCESS;
    }


    public SysMenuTree getRoot() {
        return root;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
}
