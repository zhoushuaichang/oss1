package com.shinowit.entity;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "provider")
public class ProviderEntity {
    private String providerCode;
    private String providerName;
    private String providerNameAb;
    private String address;
    private String linkName;
    private String linkTel;
    private String qq;
    private String email;
    private Integer sortId;
    private Boolean status;
//    private Collection<InStockEntity> inStocksByProviderCode;

    @Id
    @Column(name = "provider_code")
    public String getProviderCode() {
        return providerCode;
    }

    public void setProviderCode(String providerCode) {
        this.providerCode = providerCode;
    }

    @Basic
    @Column(name = "provider_name")
    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    @Basic
    @Column(name = "provider_name_ab")
    public String getProviderNameAb() {
        return providerNameAb;
    }

    public void setProviderNameAb(String providerNameAb) {
        this.providerNameAb = providerNameAb;
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
    public Integer getSortId() {
        return sortId;
    }

    public void setSortId(Integer sortId) {
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


//    @OneToMany(mappedBy = "providerByProviderCode")
//    public Collection<InStockEntity> getInStocksByProviderCode() {
//        return inStocksByProviderCode;
//    }
//
//    public void setInStocksByProviderCode(Collection<InStockEntity> inStocksByProviderCode) {
//        this.inStocksByProviderCode = inStocksByProviderCode;
//    }
}
