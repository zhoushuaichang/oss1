package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "member_supply_record")
public class MemberSupplyRecordEntity {
    private int id;
    private String payAccountId;
    private String payBank;
    private String recvAccountId;
    private String recvBank;
    private String remark;
    private BigDecimal totalMoney;
    private Timestamp supplyTime;
    private WebUserEntity webUserByUserName;

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
    @Column(name = "pay_account_id")
    public String getPayAccountId() {
        return payAccountId;
    }

    public void setPayAccountId(String payAccountId) {
        this.payAccountId = payAccountId;
    }

    @Basic
    @Column(name = "pay_bank")
    public String getPayBank() {
        return payBank;
    }

    public void setPayBank(String payBank) {
        this.payBank = payBank;
    }

    @Basic
    @Column(name = "recv_account_id")
    public String getRecvAccountId() {
        return recvAccountId;
    }

    public void setRecvAccountId(String recvAccountId) {
        this.recvAccountId = recvAccountId;
    }

    @Basic
    @Column(name = "recv_bank")
    public String getRecvBank() {
        return recvBank;
    }

    public void setRecvBank(String recvBank) {
        this.recvBank = recvBank;
    }

    @Basic
    @Column(name = "remark")
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
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
    @Column(name = "supply_time")
    public Timestamp getSupplyTime() {
        return supplyTime;
    }

    public void setSupplyTime(Timestamp supplyTime) {
        this.supplyTime = supplyTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MemberSupplyRecordEntity that = (MemberSupplyRecordEntity) o;

        if (id != that.id) return false;
        if (payAccountId != null ? !payAccountId.equals(that.payAccountId) : that.payAccountId != null) return false;
        if (payBank != null ? !payBank.equals(that.payBank) : that.payBank != null) return false;
        if (recvAccountId != null ? !recvAccountId.equals(that.recvAccountId) : that.recvAccountId != null)
            return false;
        if (recvBank != null ? !recvBank.equals(that.recvBank) : that.recvBank != null) return false;
        if (remark != null ? !remark.equals(that.remark) : that.remark != null) return false;
        if (supplyTime != null ? !supplyTime.equals(that.supplyTime) : that.supplyTime != null) return false;
        if (totalMoney != null ? !totalMoney.equals(that.totalMoney) : that.totalMoney != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (payAccountId != null ? payAccountId.hashCode() : 0);
        result = 31 * result + (payBank != null ? payBank.hashCode() : 0);
        result = 31 * result + (recvAccountId != null ? recvAccountId.hashCode() : 0);
        result = 31 * result + (recvBank != null ? recvBank.hashCode() : 0);
        result = 31 * result + (remark != null ? remark.hashCode() : 0);
        result = 31 * result + (totalMoney != null ? totalMoney.hashCode() : 0);
        result = 31 * result + (supplyTime != null ? supplyTime.hashCode() : 0);
        return result;
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
