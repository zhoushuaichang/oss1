package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.InStockDetailEntity;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014-12-04.
 */
public class InStockDetailAction {

    @Resource
    BaseDAO<InStockDetailEntity> in_stock_detail_dao;

    private List<InStockDetailEntity> inStockDetailList;
    private Integer inStockId;

    public String showDetailByInStockId() {
        inStockDetailList = in_stock_detail_dao.findByHql1("from InStockDetailEntity where inStockByInStockId.inStockId = ? ", inStockId);
        return "ok";
    }

    //-------------------------------------------------------------------------------------------------------


    public Integer getInStockId() {
        return inStockId;
    }

    public void setInStockId(Integer inStockId) {
        this.inStockId = inStockId;
    }

    public List<InStockDetailEntity> getInStockDetailList() {
        return inStockDetailList;
    }

    public void setInStockDetailList(List<InStockDetailEntity> inStockDetailList) {
        this.inStockDetailList = inStockDetailList;
    }
}
