package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "out_stock_detail")
public class OutStockDetailEntity {
    private int outStockDetailId;
    private Integer num;
    private BigDecimal sellPrice;
    private BigDecimal stockPrice;
    private BigDecimal outTotal;
    private OutStockEntity outStockByOutStockId;
    private ProductEntity productByProductCode;

    @Id
    @Column(name = "out_stock_detail_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getOutStockDetailId() {
        return outStockDetailId;
    }

    public void setOutStockDetailId(int outStockDetailId) {
        this.outStockDetailId = outStockDetailId;
    }

    @Basic
    @Column(name = "num")
    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    @Basic
    @Column(name = "sell_price")
    public BigDecimal getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(BigDecimal sellPrice) {
        this.sellPrice = sellPrice;
    }

    @Basic
    @Column(name = "stock_price")
    public BigDecimal getStockPrice() {
        return stockPrice;
    }

    public void setStockPrice(BigDecimal stockPrice) {
        this.stockPrice = stockPrice;
    }


    @Basic
    @Column(name = "out_total")
    public BigDecimal getOutTotal() {
        return outTotal;
    }

    public void setOutTotal(BigDecimal outTotal) {
        this.outTotal = outTotal;
    }


    @ManyToOne
    @JoinColumn(name = "out_stock_id", referencedColumnName = "out_stock_id")
    public OutStockEntity getOutStockByOutStockId() {
        return outStockByOutStockId;
    }

    public void setOutStockByOutStockId(OutStockEntity outStockByOutStockId) {
        this.outStockByOutStockId = outStockByOutStockId;
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
