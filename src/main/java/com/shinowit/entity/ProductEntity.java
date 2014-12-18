package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "product")
public class ProductEntity {
    private String productCode;
    private String productName;
    private String productNameAb;
    private BigDecimal price;
    private boolean valid;
    private String spec;
    private String describe;
    private String picPath;
    private Integer clickCount;
    private String memo;
    //    private Collection<InStockDetailEntity> inStockDetailsByProductCode;
//    private Collection<OrderDetailEntity> orderDetailsByProductCode;
//    private Collection<OutStockDetailEntity> outStockDetailsByProductCode;
    private ProductSaleStatusEntity productSaleStatusByStatusId;
    private ProductTypeEntity productTypeByTypeCode;
    private ProductUnitEntity productUnitByUnitId;
    private ProductStockEntity productStockByProductCode;

    @Id
    @Column(name = "product_code")
    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    @Basic
    @Column(name = "product_name")
    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    @Basic
    @Column(name = "product_name_ab")
    public String getProductNameAb() {
        return productNameAb;
    }

    public void setProductNameAb(String productNameAb) {
        this.productNameAb = productNameAb;
    }

    @Basic
    @Column(name = "price")
    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @Basic
    @Column(name = "valid")
    public boolean isValid() {
        return valid;
    }

    public void setValid(boolean valid) {
        this.valid = valid;
    }

    @Basic
    @Column(name = "spec")
    public String getSpec() {
        return spec;
    }

    public void setSpec(String spec) {
        this.spec = spec;
    }

    @Basic
    @Column(name = "describe")
    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    @Basic
    @Column(name = "pic_path")
    public String getPicPath() {
        return picPath;
    }

    public void setPicPath(String picPath) {
        this.picPath = picPath;
    }

    @Basic
    @Column(name = "click_count")
    public Integer getClickCount() {
        return clickCount;
    }

    public void setClickCount(Integer clickCount) {
        this.clickCount = clickCount;
    }

    @Basic
    @Column(name = "memo")
    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

//    @OneToMany(mappedBy = "productByProductCode")
//    public Collection<InStockDetailEntity> getInStockDetailsByProductCode() {
//        return inStockDetailsByProductCode;
//    }
//
//    public void setInStockDetailsByProductCode(Collection<InStockDetailEntity> inStockDetailsByProductCode) {
//        this.inStockDetailsByProductCode = inStockDetailsByProductCode;
//    }
//
//    @OneToMany(mappedBy = "productByProductCode")
//    public Collection<OrderDetailEntity> getOrderDetailsByProductCode() {
//        return orderDetailsByProductCode;
//    }
//
//    public void setOrderDetailsByProductCode(Collection<OrderDetailEntity> orderDetailsByProductCode) {
//        this.orderDetailsByProductCode = orderDetailsByProductCode;
//    }
//
//    @OneToMany(mappedBy = "productByProductCode")
//    public Collection<OutStockDetailEntity> getOutStockDetailsByProductCode() {
//        return outStockDetailsByProductCode;
//    }
//
//    public void setOutStockDetailsByProductCode(Collection<OutStockDetailEntity> outStockDetailsByProductCode) {
//        this.outStockDetailsByProductCode = outStockDetailsByProductCode;
//    }

    @ManyToOne
    @JoinColumn(name = "status_id", referencedColumnName = "status_id")
    public ProductSaleStatusEntity getProductSaleStatusByStatusId() {
        return productSaleStatusByStatusId;
    }

    public void setProductSaleStatusByStatusId(ProductSaleStatusEntity productSaleStatusByStatusId) {
        this.productSaleStatusByStatusId = productSaleStatusByStatusId;
    }

    @ManyToOne
    @JoinColumn(name = "type_code", referencedColumnName = "type_code")
    public ProductTypeEntity getProductTypeByTypeCode() {
        return productTypeByTypeCode;
    }

    public void setProductTypeByTypeCode(ProductTypeEntity productTypeByTypeCode) {
        this.productTypeByTypeCode = productTypeByTypeCode;
    }

    @ManyToOne
    @JoinColumn(name = "unit_id", referencedColumnName = "unit_id")
    public ProductUnitEntity getProductUnitByUnitId() {
        return productUnitByUnitId;
    }

    public void setProductUnitByUnitId(ProductUnitEntity productUnitByUnitId) {
        this.productUnitByUnitId = productUnitByUnitId;
    }

    @OneToOne(mappedBy = "productByProductCode")
    public ProductStockEntity getProductStockByProductCode() {
        return productStockByProductCode;
    }

    public void setProductStockByProductCode(ProductStockEntity productStockByProductCode) {
        this.productStockByProductCode = productStockByProductCode;
    }
}
