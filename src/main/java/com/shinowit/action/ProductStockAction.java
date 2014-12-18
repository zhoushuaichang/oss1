package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.ProductStockEntity;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014-12-03.
 */
public class ProductStockAction {

    @Resource
    private BaseDAO<ProductStockEntity> product_stock_dao;

    private String productCode;
    private ProductStockEntity productStock;
    private List<ProductStockEntity> productStockList;

    public String queryById() {
        productStock = product_stock_dao.findById(ProductStockEntity.class, productCode);
        return "ok";
    }

    public String showProductStockList() {
        try {
            productStockList = product_stock_dao.listAll(ProductStockEntity.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "ok";
    }
//-----------------------------------------------------------------------------------------------------


    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public ProductStockEntity getProductStock() {
        return productStock;
    }

    public void setProductStock(ProductStockEntity productStock) {
        this.productStock = productStock;
    }
}
