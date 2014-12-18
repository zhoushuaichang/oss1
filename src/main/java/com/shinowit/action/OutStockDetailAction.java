package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.OutStockDetailEntity;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014-12-04.
 */
public class OutStockDetailAction {

    @Resource
    BaseDAO<OutStockDetailEntity> out_stock_detail_dao;

    private List<OutStockDetailEntity> outStockDetailList;
    private Integer outStockId;


    public String showDetailByOutStockId() {
        try {
            outStockDetailList = out_stock_detail_dao.findByHql1(" from OutStockDetailEntity where outStockByOutStockId.outStockId = ? ", outStockId);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "ok";
    }
    //-------------------------------------------------------------------------

    public List<OutStockDetailEntity> getOutStockDetailList() {
        return outStockDetailList;
    }

    public void setOutStockDetailList(List<OutStockDetailEntity> outStockDetailList) {
        this.outStockDetailList = outStockDetailList;
    }

    public Integer getOutStockId() {
        return outStockId;
    }

    public void setOutStockId(Integer outStockId) {
        this.outStockId = outStockId;
    }
}
