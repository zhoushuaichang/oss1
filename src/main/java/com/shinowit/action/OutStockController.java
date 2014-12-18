package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.OutStockDetailEntity;
import com.shinowit.entity.OutStockEntity;
import com.shinowit.services.OutStockService;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.List;

/**
 * Created by Administrator on 2014-12-03.
 */
public class OutStockController {

    @Resource
    private OutStockService out_stock_service;
    @Resource
    private BaseDAO<OutStockEntity> out_stock_dao;

    private OutStockEntity outStock;
    private OutStockDetailEntity outStockDetail;
    private List<OutStockDetailEntity> outStockDetailList;
    private String outStockIdList;
    private Integer outStockId;
    private BigDecimal totalMoney;


    private boolean success;
    private boolean state;
    private String message;


    public String insert() {
        boolean result = false;
        try {
            result = out_stock_service.insert(outStock, outStockDetailList);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (result) {
            success = true;
            state = true;
            message = "出库成功！";
        } else {
            success = true;
            state = false;
            message = "出库失败，请重新出库！";
        }
        return "ok";
    }

    public String update() {
        boolean result = false;
        try {
            outStock = out_stock_dao.findById(OutStockEntity.class, outStockId);
            outStock.setTotalMoney(totalMoney);
            result = out_stock_service.update(outStockId, outStock, outStockDetailList);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (result) {
            success = true;
            state = true;
            message = "修改订单成功！";
        } else {
            success = true;
            state = false;
            message = "修改订单失败！！！";
        }
        return "ok";
    }


    public String delete() {
        boolean result = false;
        String outStockIdStr[] = outStockIdList.split(",");
        Integer outStockIdArr[] = new Integer[outStockIdStr.length];
        String out_Stock_hql = "delete from OutStockEntity where outStockId in (";
        String detail_hql = "delete from OutStockDetailEntity where outStockByOutStockId.outStockId in (";
        for (int i = 0; i < outStockIdStr.length; i++) {
            outStockIdArr[i] = Integer.parseInt(outStockIdStr[i]);
            if (i == outStockIdStr.length - 1) {
                out_Stock_hql += "? )";
                detail_hql += "? )";
            } else {
                out_Stock_hql += "? ,";
                detail_hql += "? ,";
            }
        }
        try {
            result = out_stock_service.delete(out_Stock_hql, outStockIdArr, detail_hql);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (result) {
            success = true;
            state = true;
            message = "删除成功";
        } else {
            success = true;
            state = false;
            message = "删除失败";
        }
        return "ok";
    }

    //---------------------------------------------------------------------


    public BigDecimal getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(BigDecimal totalMoney) {
        this.totalMoney = totalMoney;
    }

    public Integer getOutStockId() {
        return outStockId;
    }

    public void setOutStockId(Integer outStockId) {
        this.outStockId = outStockId;
    }

    public String getOutStockIdList() {
        return outStockIdList;
    }

    public void setOutStockIdList(String outStockIdList) {
        this.outStockIdList = outStockIdList;
    }

    public OutStockEntity getOutStock() {
        return outStock;
    }

    public void setOutStock(OutStockEntity outStock) {
        this.outStock = outStock;
    }

    public OutStockDetailEntity getOutStockDetail() {
        return outStockDetail;
    }

    public void setOutStockDetail(OutStockDetailEntity outStockDetail) {
        this.outStockDetail = outStockDetail;
    }

    public List<OutStockDetailEntity> getOutStockDetailList() {
        return outStockDetailList;
    }

    public void setOutStockDetailList(List<OutStockDetailEntity> outStockDetailList) {
        this.outStockDetailList = outStockDetailList;
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
}
