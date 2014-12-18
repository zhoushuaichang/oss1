package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.OutStockEntity;

import javax.annotation.Resource;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2014-12-04.
 */
public class OutStockAction {

    @Resource
    private BaseDAO<OutStockEntity> out_stock_dao;

    private List<OutStockEntity> outStockList;
    private int count;
    private Integer out_stock_code;
    private Date out_start_time;
    private Date out_end_time;

    public String showOutStockList() {
        List<Object> params = new ArrayList<Object>();
        String hql = "from OutStockEntity where 1=1 ";
        if (out_stock_code != null && out_stock_code != 0) {
            hql += "and outStockId = ? ";
            params.add(out_stock_code);
        }
        if (out_start_time != null && out_end_time != null) {
            if (out_start_time.getTime() < out_end_time.getTime()) {
                hql += "and outTime between ? and ? ";
                params.add(out_start_time);
                params.add(out_end_time);
            } else {
                hql += "and outTime between ? and ? ";
                params.add(out_end_time);
                params.add(out_start_time);
            }
        }
        if (out_start_time != null && out_end_time == null) {
            hql += " and outTime > ?";
            params.add(out_start_time);
        }
        if (out_end_time != null && out_start_time == null) {
            hql += " and outTime < ?";
            params.add(out_end_time);
        }
        try {
            outStockList = out_stock_dao.findByHql1(hql, params.toArray());
            count = out_stock_dao.queryRecordCount("select count(*) " + hql, params.toArray());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "ok";
    }
//---------------------------------------------------------------------------------------------------

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Integer getOut_stock_code() {
        return out_stock_code;
    }

    public void setOut_stock_code(Integer out_stock_code) {
        this.out_stock_code = out_stock_code;
    }

    public Date getOut_start_time() {
        return out_start_time;
    }

    public void setOut_start_time(Date out_start_time) {
        this.out_start_time = out_start_time;
    }

    public Date getOut_end_time() {
        return out_end_time;
    }

    public void setOut_end_time(Date out_end_time) {
        this.out_end_time = out_end_time;
    }

    public List<OutStockEntity> getOutStockList() {
        return outStockList;
    }

    public void setOutStockList(List<OutStockEntity> outStockList) {
        this.outStockList = outStockList;
    }
}
