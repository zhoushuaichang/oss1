package com.shinowit.services;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.InStockDetailEntity;
import com.shinowit.entity.InStockEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014-12-03.
 */
@Service
public class InStockService {

    @Resource
    private BaseDAO<InStockDetailEntity> in_stock_detail_dao;
    @Resource
    private BaseDAO<InStockEntity> in_stock_dao;

    @Transactional
    public boolean insert(InStockEntity inStock, List<InStockDetailEntity> inStockDetailList) {
        boolean result = false;
        Integer in_stock_id = (Integer) in_stock_dao.insert(inStock);
        for (InStockDetailEntity detail : inStockDetailList) {
            inStock.setInStockId(in_stock_id);
            detail.setInStockByInStockId(inStock);
            in_stock_detail_dao.insert(detail);
        }
        result = true;

        return result;
    }

    @Transactional
    public boolean update(Integer inStockId, InStockEntity inStock, List<InStockDetailEntity> inStockDetailList) {
        boolean result = false;
        int num = in_stock_detail_dao.extcuteHQL("delete from InStockDetailEntity where inStockByInStockId.inStockId = ?", inStockId);
        if (num > 0) {
            in_stock_dao.update(inStock);
            for (InStockDetailEntity detail : inStockDetailList) {
                detail.setInStockByInStockId(inStock);
                in_stock_detail_dao.insert(detail);
            }
            result = true;
        }
        return result;
    }

    @Transactional
    public boolean delete(String in_stock_hql, Integer[] arr, String detail_hql) {
        boolean result = false;
        int detail_num = in_stock_detail_dao.extcuteHQL1(detail_hql, arr);
        int num = in_stock_dao.extcuteHQL1(in_stock_hql, arr);
        if (detail_num > 0 && num > 0) {
            result = true;
        }
        return result;

    }

}
