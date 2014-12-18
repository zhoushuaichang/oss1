package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "product_stock", schema = "dbo", catalog = "oss")
public class ProductStockEntity {
    private String productCode;
    private BigDecimal avgPrice;
    private int num;
    private ProductEntity productByProductCode;

    @Id
    @Column(name = "product_code")
    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    @Basic
    @Column(name = "avg_price")
    public BigDecimal getAvgPrice() {
        return avgPrice;
    }

    public void setAvgPrice(BigDecimal avgPrice) {
        this.avgPrice = avgPrice;
    }

    @Basic
    @Column(name = "num")
    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProductStockEntity that = (ProductStockEntity) o;

        if (num != that.num) return false;
        if (avgPrice != null ? !avgPrice.equals(that.avgPrice) : that.avgPrice != null) return false;
        if (productCode != null ? !productCode.equals(that.productCode) : that.productCode != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = productCode != null ? productCode.hashCode() : 0;
        result = 31 * result + (avgPrice != null ? avgPrice.hashCode() : 0);
        result = 31 * result + num;
        return result;
    }

    @OneToOne
    @JoinColumn(name = "product_code", referencedColumnName = "product_code", nullable = false)
    public ProductEntity getProductByProductCode() {
        return productByProductCode;
    }

    public void setProductByProductCode(ProductEntity productByProductCode) {
        this.productByProductCode = productByProductCode;
    }
}
