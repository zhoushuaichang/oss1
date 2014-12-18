package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "order_detail")
public class OrderDetailEntity {
    private int id;
    private Integer num;
    private BigDecimal price;
    private OrderInfoEntity orderInfoByBillCode;
    private ProductEntity productByProductCode;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
    @Column(name = "price")
    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }


    @ManyToOne
    @JoinColumn(name = "bill_code", referencedColumnName = "bill_code")
    public OrderInfoEntity getOrderInfoByBillCode() {
        return orderInfoByBillCode;
    }

    public void setOrderInfoByBillCode(OrderInfoEntity orderInfoByBillCode) {
        this.orderInfoByBillCode = orderInfoByBillCode;
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
