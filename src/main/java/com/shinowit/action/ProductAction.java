package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.ProductEntity;
import com.shinowit.entity.ProductSaleStatusEntity;
import com.shinowit.entity.ProductTypeEntity;
import com.shinowit.entity.ProductUnitEntity;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2014-12-01.
 */
public class ProductAction {

    @Resource
    private BaseDAO<ProductEntity> dao;

    //-----Ext分页的变量
    private int start;
    private int page;
    private int limit;
    private int count;
    //----Ext判断状态的变量
    private boolean success;
    private String message;
    private boolean state;

    private ProductEntity product;
    private List<ProductEntity> rootList;
    private String productCodeList;


    private String productName;
    private String productNameAb;
    private BigDecimal price;
    private String valid;
    private String typeCode;
    private int statusId;
    private boolean remark;

    public String showRootList() {
        if (valid != null) {
            if (valid.equals("true")) {
                remark = true;
            }
            if (valid.equals("false")) {
                remark = false;
            }
        }

        List<Object> params = new ArrayList<Object>();
        String hql = "from ProductEntity where 1=1 ";
//                "productName like '%?%' and productNameAb like '%?%' and Price like '%?%' and Valid like '%?%' and productTypeByTypeCode.typeCode like '%?%' and productSaleStatusByStatusId.statusId like '%?%' ";
        if (productName != null && productName.trim().length() > 0) {
            //用于解决汉字乱码问题，嵌套try...catch语句
            try {
                byte[] paramStr = productName.getBytes("ISO-8859-1");
                productName = new String(paramStr, "UTF-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            hql += " and productName like ? ";
            params.add("%" + productName + "%");
        }
        if (productNameAb != null && productNameAb.trim().length() > 0) {
            hql += " and productNameAb like ? ";
            params.add("%" + productNameAb + "%");
        }
        if (price != null) {
            hql += " and price = ? ";
            params.add(price);
        }
        if (valid != null && valid.trim().length() > 0) {
            hql += " and valid = ?  ";
            params.add(remark);
        }
        if (typeCode != null && typeCode.trim().length() > 0) {
            hql += " and productTypeByTypeCode.typeCode like ? ";
            params.add("%" + typeCode + "%");
        }
        if (statusId > 0) {
            hql += " and productSaleStatusByStatusId.statusId = ? ";
            params.add(statusId);
        }
        count = dao.queryRecordCount("select count(*) " + hql, params.toArray());
        rootList = dao.findByHql1(hql, params.toArray());


        success = true;
        return "ok";
    }

    public String save() {
        Object result = dao.insert(product);
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
        String productCodeArr[] = productCodeList.split(",");
        int length = productCodeArr.length;
        String hql = "delete  from ProductEntity where productCode in (";
        for (int i = 0; i < length; i++) {
            if (i < length - 1) {
                hql += "?,";
            }
            if (i == length - 1) {
                hql += "?)";
            }
        }
        int result = dao.extcuteHQL1(hql, productCodeArr);
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
        boolean result = dao.update(product);
        if (result) {
            success = true;
            message = "修改成功！";
        } else {
            success = true;
            message = "修改失败！";
        }
        return "ok";
    }


//-------------------------------------华丽丽的分割线---------------------------------------------------------------//


    public boolean isRemark() {
        return remark;
    }

    public void setRemark(boolean remark) {
        this.remark = remark;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getTypeCode() {
        return typeCode;
    }

    public void setTypeCode(String typeCode) {
        this.typeCode = typeCode;
    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
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

    public ProductEntity getProduct() {
        return product;
    }

    public void setProduct(ProductEntity product) {
        this.product = product;
    }

    public List<ProductEntity> getRootList() {
        return rootList;
    }

    public void setRootList(List<ProductEntity> rootList) {
        this.rootList = rootList;
    }

    public String getProductCodeList() {
        return productCodeList;
    }

    public void setProductCodeList(String productCodeList) {
        this.productCodeList = productCodeList;
    }

    public String getValid() {
        return valid;
    }

    public void setValid(String valid) {
        this.valid = valid;
    }

    public String getProductNameAb() {
        return productNameAb;
    }

    public void setProductNameAb(String productNameAb) {
        this.productNameAb = productNameAb;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }
}
