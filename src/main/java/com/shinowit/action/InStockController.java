package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.InStockDetailEntity;
import com.shinowit.entity.InStockEntity;
import com.shinowit.services.InStockService;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

/**
 * Created by Administrator on 2014-12-03.
 */

public class InStockController {

    @Resource
    private BaseDAO<InStockEntity> in_stock_dao;
    @Resource
    private InStockService in_stock_services;

    private BigDecimal totalMoney;
    private Integer inStockId;
    private InStockEntity inStock;
    private InStockDetailEntity inStockDetail;
    private List<InStockDetailEntity> inStockDetailList;

    private String inStockCodeList;

    private boolean success;
    private boolean state;
    private String message;

    public String insert() {
        boolean result = in_stock_services.insert(inStock, inStockDetailList);
        if (result) {
            success = true;
            state = true;
            message = "插入库存成功！";
        } else {
            success = true;
            state = false;
            message = "插入库存失败，请重新入库！";
        }
        return "ok";
    }

    public String update() {
        inStock = in_stock_dao.findById(InStockEntity.class, inStockId);
        inStock.setTotalMoney(totalMoney);
        boolean result = in_stock_services.update(inStockId, inStock, inStockDetailList);
        if (result) {
            success = true;
            state = true;
            message = "修改库存成功！";
        } else {
            success = true;
            state = false;
            message = "修改库存失败，请重修改入库！";
        }
        return "ok";
    }

    public String delete() {
        boolean result = false;
        String inStockStrArr[] = inStockCodeList.split(",");
        Integer inStockArr[] = new Integer[inStockStrArr.length];
        String in_stock_hql = "delete from InStockEntity where inStockId in (";
        String detail_hql = "delete from InStockDetailEntity where inStockByInStockId.inStockId in (";
        for (int i = 0; i < inStockStrArr.length; i++) {
            inStockArr[i] = Integer.parseInt(inStockStrArr[i]);
            if (i == inStockStrArr.length - 1) {
                in_stock_hql += "? )";
                detail_hql += "? )";
            } else {
                in_stock_hql += "? ,";
                detail_hql += "? ,";
            }
        }
        try {
            result = in_stock_services.delete(in_stock_hql, inStockArr, detail_hql);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (result) {
            success = true;
            state = true;
            message = "删除入库成功！";
        } else {
            success = true;
            state = false;
            message = "删除入库失败！";
        }
        return "ok";
    }


//-----------------------------------------------------------------------


    public String getInStockCodeList() {
        return inStockCodeList;
    }

    public void setInStockCodeList(String inStockCodeList) {
        this.inStockCodeList = inStockCodeList;
    }

    public Integer getInStockId() {
        return inStockId;
    }

    public void setInStockId(Integer inStockId) {
        this.inStockId = inStockId;
    }

    public BigDecimal getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(BigDecimal totalMoney) {
        this.totalMoney = totalMoney;
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

    public InStockEntity getInStock() {
        return inStock;
    }

    public void setInStock(InStockEntity inStock) {
        this.inStock = inStock;
    }

    public InStockDetailEntity getInStockDetail() {
        return inStockDetail;
    }

    public void setInStockDetail(InStockDetailEntity inStockDetail) {
        this.inStockDetail = inStockDetail;
    }

    public List<InStockDetailEntity> getInStockDetailList() {
        return inStockDetailList;
    }

    public void setInStockDetailList(List<InStockDetailEntity> inStockDetailList) {
        this.inStockDetailList = inStockDetailList;
    }
}
