package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "in_stock_detail")
public class InStockDetailEntity {
    private int inStockDetailId;
    private int num;
    private BigDecimal price;
    private BigDecimal inTotal;
    private InStockEntity inStockByInStockId;
    private ProductEntity productByProductCode;

    @Id
    @Column(name = "in_stock_detail_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getInStockDetailId() {
        return inStockDetailId;
    }

    public void setInStockDetailId(int inStockDetailId) {
        this.inStockDetailId = inStockDetailId;
    }

    @Basic
    @Column(name = "num")
    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
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
    @Column(name = "in_total")

    public BigDecimal getInTotal() {
        return inTotal;
    }

    public void setInTotal(BigDecimal inTotal) {
        this.inTotal = inTotal;
    }

    @ManyToOne
    @JoinColumn(name = "in_stock_id", referencedColumnName = "in_stock_id")
    public InStockEntity getInStockByInStockId() {
        return inStockByInStockId;
    }

    public void setInStockByInStockId(InStockEntity inStockByInStockId) {
        this.inStockByInStockId = inStockByInStockId;
    }

    @ManyToOne
    @JoinColumn(name = "product_code", referencedColumnName = "product_code")
    public ProductEntity getProductByProductCode() {
        return productByProductCode;
    }

    public void setProductByProductCode(ProductEntity productByProductCode) {
        this.productByProductCode = productByProductCode;
    }

}
