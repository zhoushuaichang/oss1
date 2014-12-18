package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.InStockEntity;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2014-12-03.
 */
public class InStockAction {

    @Resource
    BaseDAO<InStockEntity> in_stock_dao;

    private List<InStockEntity> inStockRootList;

    private int count;

    private boolean success;
    private boolean state;
    private String message;

    private Integer in_stock_code;
    private String provider_code;
    private Date in_start_time;
    private Date in_end_time;

    public String showInStockList() {

        List<Object> params = new ArrayList<Object>();
        String hql = "from InStockEntity where 1=1 ";
        if (in_stock_code != null && in_stock_code != 0) {
            //用于解决汉字乱码问题，嵌套try...catch语句
//            try {
//                byte[] paramStr = productName.getBytes("ISO-8859-1");
//                productName = new String(paramStr, "UTF-8");
//            } catch (UnsupportedEncodingException e) {
//                e.printStackTrace();
//            }
            hql += " and inStockId = ? ";
            params.add(in_stock_code);
        }
        if (provider_code != null && provider_code.trim().length() > 0) {
            hql += " and providerByProviderCode.providerCode = ? ";
            params.add(provider_code);
        }
        if (in_start_time != null && in_end_time != null) {
            if (in_start_time.getTime() < in_end_time.getTime()) {
                hql += " and inTime between ? and  ? ";
                params.add(in_start_time);
                params.add(in_end_time);
            } else {
                hql += " and inTime between ? and  ? ";
                params.add(in_end_time);
                params.add(in_start_time);
            }

        }
        if (in_start_time != null && in_end_time == null) {
            hql += " and inTime >= ? ";
            params.add(in_start_time);
        }
        if (in_end_time != null && in_start_time == null) {
            hql += " and inTime =< ?  ";
            params.add(in_end_time);
        }
        count = in_stock_dao.queryRecordCount("select count(*) " + hql, params.toArray());
        inStockRootList = in_stock_dao.findByHql1(hql, params.toArray());
        success = true;
        return "ok";

    }


//----------------------------------------------------------------------------------------


    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Integer getIn_stock_code() {
        return in_stock_code;
    }

    public void setIn_stock_code(Integer in_stock_code) {
        this.in_stock_code = in_stock_code;
    }

    public String getProvider_code() {
        return provider_code;
    }

    public void setProvider_code(String provider_code) {
        this.provider_code = provider_code;
    }

    public Date getIn_start_time() {
        return in_start_time;
    }

    public void setIn_start_time(Date in_start_time) {
        this.in_start_time = in_start_time;
    }

    public Date getIn_end_time() {
        return in_end_time;
    }

    public void setIn_end_time(Date in_end_time) {
        this.in_end_time = in_end_time;
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

    public List<InStockEntity> getInStockRootList() {
        return inStockRootList;
    }

    public void setInStockRootList(List<InStockEntity> inStockRootList) {
        this.inStockRootList = inStockRootList;
    }
}
