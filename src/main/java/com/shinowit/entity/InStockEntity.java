package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "in_stock")
public class InStockEntity {
    private int inStockId;
    private Byte inType;
    private Timestamp inTime;
    private String handlerName;
    private BigDecimal totalMoney;
    private String memo;
    private ProviderEntity providerByProviderCode;
    private SysUserEntity sysUserByUserId;
//    private Collection<InStockDetailEntity> inStockDetailsByInStockId;

    @Id
    @Column(name = "in_stock_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getInStockId() {
        return inStockId;
    }

    public void setInStockId(int inStockId) {
        this.inStockId = inStockId;
    }

    @Basic
    @Column(name = "in_type")
    public Byte getInType() {
        return inType;
    }

    public void setInType(Byte inType) {
        this.inType = inType;
    }

    @Basic
    @Column(name = "in_time")
    public Timestamp getInTime() {
        return inTime;
    }

    public void setInTime(Timestamp inTime) {
        this.inTime = inTime;
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
    @Column(name = "total_money")
    public BigDecimal getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(BigDecimal totalMoney) {
        this.totalMoney = totalMoney;
    }

    @Basic
    @Column(name = "memo")
    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    @ManyToOne
    @JoinColumn(name = "provider_code", referencedColumnName = "provider_code")
    public ProviderEntity getProviderByProviderCode() {
        return providerByProviderCode;
    }

    public void setProviderByProviderCode(ProviderEntity providerByProviderCode) {
        this.providerByProviderCode = providerByProviderCode;
    }

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    public SysUserEntity getSysUserByUserId() {
        return sysUserByUserId;
    }

    public void setSysUserByUserId(SysUserEntity sysUserByUserId) {
        this.sysUserByUserId = sysUserByUserId;
    }

//    @OneToMany(mappedBy = "inStockByInStockId")
//    public Collection<InStockDetailEntity> getInStockDetailsByInStockId() {
//        return inStockDetailsByInStockId;
//    }
//
//    public void setInStockDetailsByInStockId(Collection<InStockDetailEntity> inStockDetailsByInStockId) {
//        this.inStockDetailsByInStockId = inStockDetailsByInStockId;
//    }
}
