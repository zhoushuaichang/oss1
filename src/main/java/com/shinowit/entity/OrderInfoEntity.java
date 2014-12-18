package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "order_info", schema = "dbo", catalog = "oss")
public class OrderInfoEntity {
    private int id;
    private String billCode;
    private String postBillCode;
    private byte billStatus;
    private Timestamp orderTime;
    private String recvName;
    private String linkTel;
    private String recvAddress;
    private String postCode;
    private BigDecimal totalMoney;
    private String remark;
    private Collection<OrderDetailEntity> orderDetailsByBillCode;
    private DeliveryInfoEntity deliveryInfoByDeliveryCode;
    private OutStockEntity outStockByOutStockId;
    private SysUserEntity sysUserByUserId;
    private WebUserEntity webUserByUserName;

    @Basic
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Id
    @Column(name = "bill_code")
    public String getBillCode() {
        return billCode;
    }

    public void setBillCode(String billCode) {
        this.billCode = billCode;
    }

    @Basic
    @Column(name = "post_bill_code")
    public String getPostBillCode() {
        return postBillCode;
    }

    public void setPostBillCode(String postBillCode) {
        this.postBillCode = postBillCode;
    }

    @Basic
    @Column(name = "bill_status")
    public byte getBillStatus() {
        return billStatus;
    }

    public void setBillStatus(byte billStatus) {
        this.billStatus = billStatus;
    }

    @Basic
    @Column(name = "order_time")
    public Timestamp getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Timestamp orderTime) {
        this.orderTime = orderTime;
    }

    @Basic
    @Column(name = "recv_name")
    public String getRecvName() {
        return recvName;
    }

    public void setRecvName(String recvName) {
        this.recvName = recvName;
    }

    @Basic
    @Column(name = "link_tel")
    public String getLinkTel() {
        return linkTel;
    }

    public void setLinkTel(String linkTel) {
        this.linkTel = linkTel;
    }

    @Basic
    @Column(name = "recv_address")
    public String getRecvAddress() {
        return recvAddress;
    }

    public void setRecvAddress(String recvAddress) {
        this.recvAddress = recvAddress;
    }

    @Basic
    @Column(name = "post_code")
    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
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

        OrderInfoEntity that = (OrderInfoEntity) o;

        if (billStatus != that.billStatus) return false;
        if (id != that.id) return false;
        if (billCode != null ? !billCode.equals(that.billCode) : that.billCode != null) return false;
        if (linkTel != null ? !linkTel.equals(that.linkTel) : that.linkTel != null) return false;
        if (orderTime != null ? !orderTime.equals(that.orderTime) : that.orderTime != null) return false;
        if (postBillCode != null ? !postBillCode.equals(that.postBillCode) : that.postBillCode != null) return false;
        if (postCode != null ? !postCode.equals(that.postCode) : that.postCode != null) return false;
        if (recvAddress != null ? !recvAddress.equals(that.recvAddress) : that.recvAddress != null) return false;
        if (recvName != null ? !recvName.equals(that.recvName) : that.recvName != null) return false;
        if (remark != null ? !remark.equals(that.remark) : that.remark != null) return false;
        if (totalMoney != null ? !totalMoney.equals(that.totalMoney) : that.totalMoney != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (billCode != null ? billCode.hashCode() : 0);
        result = 31 * result + (postBillCode != null ? postBillCode.hashCode() : 0);
        result = 31 * result + (int) billStatus;
        result = 31 * result + (orderTime != null ? orderTime.hashCode() : 0);
        result = 31 * result + (recvName != null ? recvName.hashCode() : 0);
        result = 31 * result + (linkTel != null ? linkTel.hashCode() : 0);
        result = 31 * result + (recvAddress != null ? recvAddress.hashCode() : 0);
        result = 31 * result + (postCode != null ? postCode.hashCode() : 0);
        result = 31 * result + (totalMoney != null ? totalMoney.hashCode() : 0);
        result = 31 * result + (remark != null ? remark.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "orderInfoByBillCode")
    public Collection<OrderDetailEntity> getOrderDetailsByBillCode() {
        return orderDetailsByBillCode;
    }

    public void setOrderDetailsByBillCode(Collection<OrderDetailEntity> orderDetailsByBillCode) {
        this.orderDetailsByBillCode = orderDetailsByBillCode;
    }

    @ManyToOne
    @JoinColumn(name = "delivery_code", referencedColumnName = "delivery_code")
    public DeliveryInfoEntity getDeliveryInfoByDeliveryCode() {
        return deliveryInfoByDeliveryCode;
    }

    public void setDeliveryInfoByDeliveryCode(DeliveryInfoEntity deliveryInfoByDeliveryCode) {
        this.deliveryInfoByDeliveryCode = deliveryInfoByDeliveryCode;
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
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    public SysUserEntity getSysUserByUserId() {
        return sysUserByUserId;
    }

    public void setSysUserByUserId(SysUserEntity sysUserByUserId) {
        this.sysUserByUserId = sysUserByUserId;
    }

    @ManyToOne
    @JoinColumn(name = "user_name", referencedColumnName = "user_name")
    public WebUserEntity getWebUserByUserName() {
        return webUserByUserName;
    }

    public void setWebUserByUserName(WebUserEntity webUserByUserName) {
        this.webUserByUserName = webUserByUserName;
    }
}
