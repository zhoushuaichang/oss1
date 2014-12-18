package com.shinowit.action;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.SysUserEntity;
import com.shinowit.entity.SysUserRoleEntity;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2014-12-09.
 */
public class LoginAction extends ActionSupport {


    @Resource
    private BaseDAO<SysUserEntity> sys_user_dao;
    @Resource
    private BaseDAO<SysUserRoleEntity> sys_user_role_dao;

    private HttpServletRequest request;
    private List<SysUserEntity> sysUserList;
    private SysUserEntity sysUser;
    private SysUserRoleEntity sysUserRole;

    private String loginName;
    private String loginPass;
    private int validCode;

    private boolean success;
    private boolean state;
    private String message;

    public String login() {
        request = ServletActionContext.getRequest();
        int rand = (Integer) request.getAttribute("validCode");
//        Map map= ActionContext.getContext().getSession();
//        int rand=(int)map.get("rand");
        if (validCode == rand) {
            try {
                sysUserList = sys_user_dao.findByHql1("from SysUserEntity where loginName=? and loginPass=? ", loginName, loginPass);
                if (sysUserList.size() > 0) {
                    sysUser = sysUserList.get(0);
                    sysUserRole = sys_user_role_dao.findByHql1("from SysUserRoleEntity where userId=?", sysUser.getUserId()).get(0);
                    request.getSession().setAttribute("roleCode", sysUserRole.getRoleCode());

                    success = true;
                    state = true;
                    message = "登录成功！！";

                } else {
                    success = true;
                    state = false;
                    message = "登录失败！";
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return "ok";
    }

    //------------------------------------------------------------------------------------------


    public HttpServletRequest getRequest() {
        return request;
    }

    public void setRequest(HttpServletRequest request) {
        this.request = request;
    }

    public SysUserEntity getSysUser() {
        return sysUser;
    }

    public void setSysUser(SysUserEntity sysUser) {
        this.sysUser = sysUser;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<SysUserEntity> getSysUserList() {
        return sysUserList;
    }

    public void setSysUserList(List<SysUserEntity> sysUserList) {
        this.sysUserList = sysUserList;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getLoginPass() {
        return loginPass;
    }

    public void setLoginPass(String loginPass) {
        this.loginPass = loginPass;
    }

    public int getValidCode() {
        return validCode;
    }

    public void setValidCode(int validCode) {
        this.validCode = validCode;
    }
}
