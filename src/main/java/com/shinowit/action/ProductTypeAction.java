package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.ProductTypeEntity;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.util.List;

/**
 * Created by Administrator on 2014-11-27.
 */
public class ProductTypeAction {

    @Resource
    private BaseDAO<ProductTypeEntity> dao;

    private ProductTypeEntity productType;
    private List<ProductTypeEntity> rootList;

    private int start;
    private int page;
    private int limit;
    private int count;
    private boolean success;
    private boolean state;
    private String message;

    private String typeCodeList;
    private String statusRemark;
    private String typeName;

    public String showRootList() {
        int remark = -1;
        if (statusRemark != null) {
            if (statusRemark.equals("true")) {
                remark = 1;
            }
            if (statusRemark.equals("false")) {
                remark = 0;
            }
        }

        if (typeName == null || statusRemark == null || (typeName.equals("") && statusRemark.equals(""))) {
            rootList = dao.queryForPage("from ProductTypeEntity", page, limit);
        } else {
            String sql = "";

            //用于解决汉字乱码问题，嵌套try...catch语句
            try {
                byte[] paramStr = typeName.getBytes("ISO-8859-1");
                typeName = new String(paramStr, "UTF-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            if (!typeName.equals("") && !statusRemark.equals("")) {
                sql = "select * from product_type where type_name like ? and status like ? ";
                rootList = dao.findBySql1(sql, ProductTypeEntity.class, "%" + typeName + "%", "%" + statusRemark + "%");
            }
            if (!statusRemark.equals("") && typeName.equals("")) {
                sql = "select * from product_type where status=? ";
                rootList = dao.findBySql1(sql, ProductTypeEntity.class, statusRemark);
            }
            if (!typeName.equals("") && statusRemark.equals("")) {
                sql = "select * from product_type where type_name like ? ";
                rootList = dao.findBySql1(sql, ProductTypeEntity.class, "%" + typeName + "%");
            }
        }

        count = rootList.size();
        success = true;
        return "ok";
    }

    public String save() {
        Object result = dao.insert(productType);
        if (result != null) {
            state = true;
            message = "插入成功！";
        } else {
            state = false;
            message = "插入失败！";
        }
        success = true;
        return "ok";
    }

    public String updata() {
        boolean result = dao.update(productType);
        if (result) {
            state = true;
            message = "修改成功！";
        } else {
            state = false;
            message = "修改失败！";
        }
        success = true;
        return "ok";
    }

    public String delete() {

        //用于解决汉字乱码问题，嵌套try...catch语句
        try {
            byte[] paramStr = typeCodeList.getBytes("ISO-8859-1");
            typeCodeList = new String(paramStr, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        String typeCodeArr[] = typeCodeList.split(",");
        int length = typeCodeArr.length;
        String hql = "delete  from ProductTypeEntity where typeCode in (";
        for (int i = 0; i < length; i++) {
            if (i < length - 1) {
                hql += "?,";
            }
            if (i == length - 1) {
                hql += "?)";
            }
        }
        int result = dao.extcuteHQL1(hql, typeCodeArr);
        if (result == 0) {
            success = false;
            message = "删除失败！";
        } else {
            success = true;
            message = "删除成功！";
        }
        return "ok";
    }


    //---------------------------------华丽丽的分割线-------------------------------------


    public String getStatusRemark() {
        return statusRemark;
    }

    public void setStatusRemark(String statusRemark) {
        this.statusRemark = statusRemark;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public ProductTypeEntity getProductType() {
        return productType;
    }

    public void setProductType(ProductTypeEntity productType) {
        this.productType = productType;
    }

    public List<ProductTypeEntity> getRootList() {
        return rootList;
    }

    public void setRootList(List<ProductTypeEntity> rootList) {
        this.rootList = rootList;
    }

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

    public String getTypeCodeList() {
        return typeCodeList;
    }

    public void setTypeCodeList(String typeCodeList) {
        this.typeCodeList = typeCodeList;
    }
}
