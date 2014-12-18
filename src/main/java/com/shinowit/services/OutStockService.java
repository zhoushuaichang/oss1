package com.shinowit.services;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.OutStockDetailEntity;
import com.shinowit.entity.OutStockEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014-12-03.
 */

@Service
public class OutStockService {

    @Resource
    private BaseDAO<OutStockDetailEntity> out_stock_detail_dao;
    @Resource
    private BaseDAO<OutStockEntity> out_stock_dao;

    @Transactional
    public boolean insert(OutStockEntity outStock, List<OutStockDetailEntity> outStockDetailList) {
        boolean result = false;
        Integer out_stock_id = (Integer) out_stock_dao.insert(outStock);
        for (OutStockDetailEntity detail : outStockDetailList) {
            outStock.setOutStockId(out_stock_id);
            detail.setOutStockByOutStockId(outStock);
            out_stock_detail_dao.insert(detail);
        }
        result = true;
        return result;
    }

    @Transactional
    public boolean delete(String out_stock_hql, Integer[] arr, String detail_hql) {
        boolean result = false;
        int detail_num = out_stock_detail_dao.extcuteHQL1(detail_hql, arr);
        int num = out_stock_dao.extcuteHQL(out_stock_hql, arr);
        if (detail_num > 0 && num > 0) {
            result = true;
        }
        return result;
    }

    @Transactional
    public boolean update(Integer outStockId, OutStockEntity outStock, List<OutStockDetailEntity> outStockDetailList) {
        boolean result = false;
        int num = out_stock_detail_dao.extcuteHQL("delete from OutStockDetailEntity where outStockByOutStockId.outStockId=? ", outStockId);
        if (num > 0) {
            out_stock_dao.update(outStock);
            for (OutStockDetailEntity detail : outStockDetailList) {
                detail.setOutStockByOutStockId(outStock);
                out_stock_detail_dao.insert(detail);
            }
            result = true;
        }

        return result;
    }
}
