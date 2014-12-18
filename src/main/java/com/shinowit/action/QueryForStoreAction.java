package com.shinowit.action;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014-12-01.
 */
public class QueryForStoreAction {

    @Resource
    private BaseDAO<ProductTypeEntity> product_type_dao;
    @Resource
    private BaseDAO<ProductSaleStatusEntity> product_sale_status_dao;
    @Resource
    private BaseDAO<ProductUnitEntity> product_unit_dao;
    @Resource
    private BaseDAO<DeliveryInfoEntity> delivery_info_dao;
    @Resource
    private BaseDAO<SysUserEntity> sys_user_dao;
    @Resource
    private BaseDAO<ProviderEntity> provider_dao;
    @Resource
    private BaseDAO<ProductEntity> product_dao;
    @Resource
    private BaseDAO<ProductStockEntity> product_stock_dao;
    @Resource
    BaseDAO<InStockEntity> in_stock_dao;

    private List<InStockEntity> inStockRootList;
    private List<ProductTypeEntity> typeNameList;
    private List<ProductSaleStatusEntity> productSaleStatusList;
    private List<ProductUnitEntity> productUnitList;
    private List<DeliveryInfoEntity> deliveryInfoList;
    private List<SysUserEntity> sysUserList;
    private List<ProviderEntity> providerList;
    private List<ProductEntity> productList;
    private List<ProductStockEntity> productStockList;


    //商品信息
    public String showProductList() {
        productList = product_dao.listAll(ProductEntity.class);
        return "ok";
    }

    //商品库存信息表
    public String showProductStockList() {
        productStockList = product_stock_dao.listAll(ProductStockEntity.class);
        return "ok";
    }

    //商品类型
    public String showTypeNameList() {
        typeNameList = product_type_dao.listAll(ProductTypeEntity.class);
        return "ok";
    }

    //销售状态
    public String showStatusList() {
        productSaleStatusList = product_sale_status_dao.listAll(ProductSaleStatusEntity.class);
        return "ok";
    }

    //商品单位
    public String showUnitList() {
        productUnitList = product_unit_dao.listAll(ProductUnitEntity.class);
        return "ok";
    }

    //配送商
    public String showDeliveryInfoList() {
        deliveryInfoList = delivery_info_dao.listAll(DeliveryInfoEntity.class);
        return "ok";
    }

    //系统用户
    public String showSysUserList() {
        sysUserList = sys_user_dao.listAll(SysUserEntity.class);
        return "ok";
    }

    //供应商
    public String showProviderList() {
        providerList = provider_dao.listAll(ProviderEntity.class);
        return "ok";
    }

    //--------------------------华丽丽的分割线-----------------------------


    public List<InStockEntity> getInStockRootList() {
        return inStockRootList;
    }

    public void setInStockRootList(List<InStockEntity> inStockRootList) {
        this.inStockRootList = inStockRootList;
    }

    public List<ProductStockEntity> getProductStockList() {
        return productStockList;
    }

    public void setProductStockList(List<ProductStockEntity> productStockList) {
        this.productStockList = productStockList;
    }

    public List<ProductEntity> getProductList() {
        return productList;
    }

    public void setProductList(List<ProductEntity> productList) {
        this.productList = productList;
    }

    public List<ProviderEntity> getProviderList() {
        return providerList;
    }

    public void setProviderList(List<ProviderEntity> providerList) {
        this.providerList = providerList;
    }

    public List<SysUserEntity> getSysUserList() {
        return sysUserList;
    }

    public void setSysUserList(List<SysUserEntity> sysUserList) {
        this.sysUserList = sysUserList;
    }

    public List<DeliveryInfoEntity> getDeliveryInfoList() {
        return deliveryInfoList;
    }

    public void setDeliveryInfoList(List<DeliveryInfoEntity> deliveryInfoList) {
        this.deliveryInfoList = deliveryInfoList;
    }

    public List<ProductTypeEntity> getTypeNameList() {
        return typeNameList;
    }

    public void setTypeNameList(List<ProductTypeEntity> typeNameList) {
        this.typeNameList = typeNameList;
    }

    public List<ProductSaleStatusEntity> getProductSaleStatusList() {
        return productSaleStatusList;
    }

    public void setProductSaleStatusList(List<ProductSaleStatusEntity> productSaleStatusList) {
        this.productSaleStatusList = productSaleStatusList;
    }

    public List<ProductUnitEntity> getProductUnitList() {
        return productUnitList;
    }

    public void setProductUnitList(List<ProductUnitEntity> productUnitList) {
        this.productUnitList = productUnitList;
    }
}
