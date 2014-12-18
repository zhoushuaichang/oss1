package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.SysRoleEntity;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.util.List;

/**
 * Created by Administrator on 2014-12-01.
 */
public class SysRoleAction {

    @Resource
    private BaseDAO<SysRoleEntity> dao;

    //-----Ext分页的变量
    private int start;
    private int page;
    private int limit;
    private int count;
    //----Ext判断状态的变量
    private boolean success;
    private String message;
    private boolean state;

    private SysRoleEntity sysRole;
    private String roleName;
    private String statusRemark;

    private List<SysRoleEntity> rootList;
    private String roleCode;

    public String showRootList() {
        boolean remark = false;
        if (statusRemark != null) {
            if (statusRemark.equals("true")) {
                remark = true;
            }
            if (statusRemark.equals("false")) {
                remark = false;
            }
        }

        if (roleName == null || statusRemark == null || (roleName.equals("") && statusRemark.equals(""))) {
            count = dao.queryRecordCount("select count(*) from SysRoleEntity");
            rootList = dao.queryForPage("from SysRoleEntity", page, limit);
        } else {
            String sql = "";

            //用于解决汉字乱码问题，嵌套try...catch语句
            try {
                byte[] paramStr = roleName.getBytes("ISO-8859-1");
                roleName = new String(paramStr, "UTF-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            String hql = "from SysRoleEntity where roleName like ? and status like ?";
            count = dao.queryRecordCount("select count(*)" + hql, "%" + roleName + "%", remark);
            if ((count % limit == 0) && (count / limit < page)) {
                page = page - 1;
            }
            rootList = dao.queryForPage(hql, page, limit, "%" + roleName + "%", remark);

        }


        success = true;
        return "ok";
    }

    public String save() {
        Object result = dao.insert(sysRole);
        if (result != null) {
            success = true;
            message = "插入成功！";
        } else {
            success = true;
            message = "插入失败！";
        }
        return "ok";
    }

    public String endSysRole() {

        sysRole = dao.findById(SysRoleEntity.class, roleCode);
        sysRole.setStatus(false);
        boolean result = dao.update(sysRole);
        if (result) {
            success = false;
            message = "已禁用！";
        } else {
            success = true;
            message = "禁用失败！";
        }
        return "ok";
    }

    public String startSysRole() {

        sysRole = dao.findById(SysRoleEntity.class, roleCode);
        sysRole.setStatus(true);
        boolean result = dao.update(sysRole);
        if (result) {
            success = false;
            message = "已启用！";
        } else {
            success = true;
            message = "启用失败！";
        }
        return "ok";
    }

    public String updata() {
        boolean result = dao.update(sysRole);
        if (result) {
            success = true;
            message = "修改成功！";
        } else {
            success = true;
            message = "修改失败！";
        }
        return "ok";
    }

//-------------------------------------华丽的分割线---------------------------------------------------------------//


    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public SysRoleEntity getSysRole() {
        return sysRole;
    }

    public void setSysRole(SysRoleEntity sysRole) {
        this.sysRole = sysRole;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getStatusRemark() {
        return statusRemark;
    }

    public void setStatusRemark(String statusRemark) {
        this.statusRemark = statusRemark;
    }

    public List<SysRoleEntity> getRootList() {
        return rootList;
    }

    public void setRootList(List<SysRoleEntity> rootList) {
        this.rootList = rootList;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }
}
