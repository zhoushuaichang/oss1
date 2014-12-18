package com.shinowit.entity;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "delivery_info")
public class DeliveryInfoEntity {
    private String deliveryCode;
    private String deliveryName;
    private String address;
    private String linkName;
    private String linkTel;
    private String qq;
    private String email;
    private Byte sortId;
    private Boolean status;
    private Collection<OrderInfoEntity> orderInfosByDeliveryCode;

    @Id
    @Column(name = "delivery_code")
    public String getDeliveryCode() {
        return deliveryCode;
    }

    public void setDeliveryCode(String deliveryCode) {
        this.deliveryCode = deliveryCode;
    }

    @Basic
    @Column(name = "delivery_name")
    public String getDeliveryName() {
        return deliveryName;
    }

    public void setDeliveryName(String deliveryName) {
        this.deliveryName = deliveryName;
    }

    @Basic
    @Column(name = "address")
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Basic
    @Column(name = "link_name")
    public String getLinkName() {
        return linkName;
    }

    public void setLinkName(String linkName) {
        this.linkName = linkName;
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
    @Column(name = "qq")
    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "sort_id")
    public Byte getSortId() {
        return sortId;
    }

    public void setSortId(Byte sortId) {
        this.sortId = sortId;
    }

    @Basic
    @Column(name = "status")
    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @OneToMany(mappedBy = "deliveryInfoByDeliveryCode")
    public Collection<OrderInfoEntity> getOrderInfosByDeliveryCode() {
        return orderInfosByDeliveryCode;
    }

    public void setOrderInfosByDeliveryCode(Collection<OrderInfoEntity> orderInfosByDeliveryCode) {
        this.orderInfosByDeliveryCode = orderInfosByDeliveryCode;
    }
}
