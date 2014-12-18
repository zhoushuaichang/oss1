package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.ProductUnitEntity;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.util.List;

/**
 * Created by Administrator on 2014-11-28.
 */
public class ProductUnitAction {

    @Resource
    private BaseDAO<ProductUnitEntity> dao;

    //-----Ext分页的变量
    private int start;
    private int page;
    private int limit;
    private int count;
    //----Ext判断状态的变量
    private boolean success;
    private String message;
    private boolean state;

    private ProductUnitEntity productUnit;
    private String name;
    private String statusRemark;

    private List<ProductUnitEntity> rootList;
    private String unitIdList;

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

        if (name == null || statusRemark == null || (name.equals("") && statusRemark.equals(""))) {
            count = dao.queryRecordCount("select count(*) from ProductUnitEntity");
            rootList = dao.queryForPage("from ProductUnitEntity", page, limit);
        } else {
            String sql = "";

            //用于解决汉字乱码问题，嵌套try...catch语句
            try {
                byte[] paramStr = name.getBytes("ISO-8859-1");
                name = new String(paramStr, "UTF-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

//            if(!name.equals("")&&!statusRemark.equals("")){
//                sql="select * from product_unit where name like ? and status like ? ";
//                rootList=dao.findBySql1(sql,ProductUnitEntity.class,"%"+name+"%","%"+statusRemark+"%");
            String hql = "from ProductUnitEntity where name like ? and status like ?";

            count = dao.queryRecordCount("select count(*)" + hql, "%" + name + "%", remark);
            if ((count % limit == 0) && (count / limit < page)) {
                page = page - 1;
            }
            rootList = dao.queryForPage(hql, page, limit, "%" + name + "%", remark);
//            }
//            if(!statusRemark.equals("")&&name.equals("")){
////                sql="select * from product_unit where status like ? ";
////                rootList=dao.findBySql1(sql, ProductUnitEntity.class, "%"+statusRemark+"%");
//                String hql="from ProductUnitEntity where status = ?";
//
//                count=dao.queryRecordCount("select count(*)"+ hql,remark);
//                if((count%limit==0)&&(count/limit<page)){
//                    page=page-1;
//                }
//                rootList=dao.queryForPage(hql,page,limit,remark);
//            }
//            if(!name.equals("")&&statusRemark.equals("")){
////                sql="select * from product_unit where name like ? ";
////                rootList=dao.findBySql1(sql,ProductUnitEntity.class,"%"+name+"%");
//                String hql="from ProductUnitEntity where name like ? ";
//
//                count=dao.queryRecordCount("select count(*)"+ hql,"%"+name+"%");
//                if((count%limit==0)&&(count/limit<page)){
//                    page=page-1;
//                }
//                rootList=dao.queryForPage(hql,page,limit,"%"+name+"%");
//            }
        }


        success = true;
        return "ok";
    }

    public String save() {
        Object result = dao.insert(productUnit);
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
        String arr[] = unitIdList.split(",");
        int length = arr.length;
        Integer statusIdArr[] = new Integer[length];
        String hql = "delete  from ProductUnitEntity where unitId in (";
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
        boolean result = dao.update(productUnit);
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

    public ProductUnitEntity getProductUnit() {
        return productUnit;
    }

    public void setProductUnit(ProductUnitEntity productUnit) {
        this.productUnit = productUnit;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatusRemark() {
        return statusRemark;
    }

    public void setStatusRemark(String statusRemark) {
        this.statusRemark = statusRemark;
    }

    public List<ProductUnitEntity> getRootList() {
        return rootList;
    }

    public void setRootList(List<ProductUnitEntity> rootList) {
        this.rootList = rootList;
    }

    public String getUnitIdList() {
        return unitIdList;
    }

    public void setUnitIdList(String unitIdList) {
        this.unitIdList = unitIdList;
    }
}
