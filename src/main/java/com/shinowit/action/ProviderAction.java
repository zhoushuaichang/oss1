package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.ProviderEntity;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.util.List;

/**
 * Created by Administrator on 2014-12-12.
 */
public class ProviderAction {

    @Resource
    private BaseDAO<ProviderEntity> provider_dao;

    private List<ProviderEntity> providerList;
    private ProviderEntity provider;
    private String status;
    private String providerCodeList;

    private boolean success;
    private boolean state;
    private String message;

    public String showProviderList() {
        String hql = "from ProviderEntity where 1=1 ";
        if (status != null) {
            //解决汉子乱码
            try {
                byte[] paramStr = status.getBytes("ISO-8859-1");
                status = new String(paramStr, "UTF-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            if (status.equals("true")) {
                hql += " and status = true";
            }
            if (status.equals("false")) {
                hql += " and status = false";
            }
        }
        try {
            providerList = provider_dao.findByHql1(hql);
            success = true;
        } catch (Error e) {
            e.printStackTrace();
        }
        return "ok";
    }

    public String saveProvider() {
        try {
            Object result = provider_dao.insert(provider);
            if (result != null) {
                success = true;
                state = true;
                message = "添加成功！";
            } else {
                success = true;
                state = true;
                message = "添加失败！";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "ok";
    }

    public String updateProvider() {
        try {
            boolean result = provider_dao.update(provider);
            if (result) {
                success = true;
                state = true;
                message = "更新成功！";
            } else {
                success = true;
                state = true;
                message = "更新失败！";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "ok";
    }

    public String deleteProvider() {
        String[] providerCodeStr = providerCodeList.split(",");
        String hql = "delete from ProviderEntity where providerCode in (";

        for (int i = 0; i < providerCodeStr.length; i++) {
            if (i == providerCodeStr.length - 1) {
                hql += "?)";
            }
            if (i < providerCodeStr.length - 1) {
                hql += "?,";
            }
        }

        try {
            int result = provider_dao.extcuteHQL1(hql, providerCodeStr);
            if (result > 0) {
                success = true;
                state = true;
                message = "删除成功！";
            } else {
                success = true;
                state = false;
                message = "删除失败！";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "ok";
    }

    //----------------------------------------------------------------------------------


    public String getProviderCodeList() {
        return providerCodeList;
    }

    public void setProviderCodeList(String providerCodeList) {
        this.providerCodeList = providerCodeList;
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

    public ProviderEntity getProvider() {
        return provider;
    }

    public void setProvider(ProviderEntity provider) {
        this.provider = provider;
    }

    public List<ProviderEntity> getProviderList() {
        return providerList;
    }

    public void setProviderList(List<ProviderEntity> providerList) {
        this.providerList = providerList;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
