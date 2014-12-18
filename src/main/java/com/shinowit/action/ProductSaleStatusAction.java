package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.ProductSaleStatusEntity;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Objects;

/**
 * Created by Administrator on 2014/11/26.
 */
public class ProductSaleStatusAction {

    @Resource
    private BaseDAO<ProductSaleStatusEntity> dao;

    private int start;
    private int page;
    private int limit;
    private int count;

    private boolean success;
    private String message;
    private boolean state;

    private ProductSaleStatusEntity productSaleStatus;
    private String statusName;
    private String statusRemark;

    private List<ProductSaleStatusEntity> rootList;
    private String statusIdList;

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

        if (statusName == null || statusRemark == null || (statusName.equals("") && statusRemark.equals(""))) {
            rootList = dao.queryForPage("from ProductSaleStatusEntity", page, limit);
        } else {
            String sql = "";

            //用于解决汉字乱码问题，嵌套try...catch语句
            try {
                byte[] paramStr = statusName.getBytes("ISO-8859-1");
                statusName = new String(paramStr, "UTF-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            if (!statusName.equals("") && !statusRemark.equals("")) {
                sql = "select * from product_sale_status where status_name like ? and status like ? ";
                rootList = dao.findBySql1(sql, ProductSaleStatusEntity.class, "%" + statusName + "%", "%" + statusRemark + "%");
            }
            if (!statusRemark.equals("") && statusName.equals("")) {
                sql = "select * from product_sale_status where status like ? ";
                rootList = dao.findBySql1(sql, ProductSaleStatusEntity.class, "%" + statusRemark + "%");
            }
            if (!statusName.equals("") && statusRemark.equals("")) {
                sql = "select * from product_sale_status where status_name like ? ";
                rootList = dao.findBySql1(sql, ProductSaleStatusEntity.class, "%" + statusName + "%");
            }
        }

        count = rootList.size();
        success = true;
        return "ok";
    }

    public String save() {
        Object result = dao.insert(productSaleStatus);
        if (result != null) {
            success = true;
            message = "插入成功！";
        } else {
            success = true;
            message = "插入失败！";
        }
        return "ok";
    }

    public String delete() {
        String arr[] = statusIdList.split(",");
        int length = arr.length;
        Integer statusIdArr[] = new Integer[length];
        String hql = "delete  from ProductSaleStatusEntity where statusId in (";
        for (int i = 0; i < length; i++) {
            statusIdArr[i] = Integer.parseInt(arr[i]);
            if (i < length - 1) {
                hql += "?,";
            }
            if (i == length - 1) {
                hql += "?)";
            }
        }
        int result = dao.extcuteHQL1(hql, statusIdArr);
        if (result == 0) {
            success = false;
            message = "删除失败！";
        } else {
            success = true;
            message = "删除成功！";
        }
        return "ok";
    }

    public String updata() {
        boolean result = dao.update(productSaleStatus);
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
    public List<ProductSaleStatusEntity> getRootList() {
        return rootList;
    }

    public void setRootList(List<ProductSaleStatusEntity> rootList) {
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

    public ProductSaleStatusEntity getProductSaleStatus() {
        return productSaleStatus;
    }

    public void setProductSaleStatus(ProductSaleStatusEntity productSaleStatus) {
        this.productSaleStatus = productSaleStatus;
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

    public String getStatusIdList() {
        return statusIdList;
    }

    public void setStatusIdList(String statusIdList) {
        this.statusIdList = statusIdList;
    }

    public String getStatusName() {
        return statusName;
    }

    public void setStatusName(String statusName) {
        this.statusName = statusName;
    }

    public String getStatusRemark() {
        return statusRemark;
    }

    public void setStatusRemark(String statusRemark) {
        this.statusRemark = statusRemark;
    }
}
