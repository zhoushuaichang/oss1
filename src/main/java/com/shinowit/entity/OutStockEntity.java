package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "out_stock")
public class OutStockEntity {
    private int outStockId;
    private Timestamp outTime;
    private String handlerName;
    private Byte outType;
    private BigDecimal totalMoney;
    private String remark;
    private Collection<OrderInfoEntity> orderInfosByOutStockId;
    private SysUserEntity sysUserByUserId;
    private Collection<OutStockDetailEntity> outStockDetailsByOutStockId;

    @Id
    @Column(name = "out_stock_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getOutStockId() {
        return outStockId;
    }

    public void setOutStockId(int outStockId) {
        this.outStockId = outStockId;
    }

    @Basic
    @Column(name = "out_time")
    public Timestamp getOutTime() {
        return outTime;
    }

    public void setOutTime(Timestamp outTime) {
        this.outTime = outTime;
    }

    @Basic
    @Column(name = "handler_name")
    public String getHandlerName() {
        return handlerName;
    }

    public void setHandlerName(String handlerName) {
        this.handlerName = handlerName;
    }

    @Basic
    @Column(name = "out_type")
    public Byte getOutType() {
        return outType;
    }

    public void setOutType(Byte outType) {
        this.outType = outType;
    }

    @Basic
    @Column(name = "total_money")
    public BigDecimal getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(BigDecimal totalMoney) {
        this.totalMoney = totalMoney;
    }

    @Basic
    @Column(name = "remark")
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OutStockEntity that = (OutStockEntity) o;

        if (outStockId != that.outStockId) return false;
        if (handlerName != null ? !handlerName.equals(that.handlerName) : that.handlerName != null) return false;
        if (outTime != null ? !outTime.equals(that.outTime) : that.outTime != null) return false;
        if (outType != null ? !outType.equals(that.outType) : that.outType != null) return false;
        if (remark != null ? !remark.equals(that.remark) : that.remark != null) return false;
        if (totalMoney != null ? !totalMoney.equals(that.totalMoney) : that.totalMoney != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = outStockId;
        result = 31 * result + (outTime != null ? outTime.hashCode() : 0);
        result = 31 * result + (handlerName != null ? handlerName.hashCode() : 0);
        result = 31 * result + (outType != null ? outType.hashCode() : 0);
        result = 31 * result + (totalMoney != null ? totalMoney.hashCode() : 0);
        result = 31 * result + (remark != null ? remark.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "outStockByOutStockId")
    public Collection<OrderInfoEntity> getOrderInfosByOutStockId() {
        return orderInfosByOutStockId;
    }

    public void setOrderInfosByOutStockId(Collection<OrderInfoEntity> orderInfosByOutStockId) {
        this.orderInfosByOutStockId = orderInfosByOutStockId;
    }

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    public SysUserEntity getSysUserByUserId() {
        return sysUserByUserId;
    }

    public void setSysUserByUserId(SysUserEntity sysUserByUserId) {
        this.sysUserByUserId = sysUserByUserId;
    }

    @OneToMany(mappedBy = "outStockByOutStockId")
    public Collection<OutStockDetailEntity> getOutStockDetailsByOutStockId() {
        return outStockDetailsByOutStockId;
    }

    public void setOutStockDetailsByOutStockId(Collection<OutStockDetailEntity> outStockDetailsByOutStockId) {
        this.outStockDetailsByOutStockId = outStockDetailsByOutStockId;
    }
}
