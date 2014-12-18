package com.shinowit.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "web_user", schema = "dbo", catalog = "oss")
public class WebUserEntity {
    private int id;
    private String userName;
    private String userPass;
    private String email;
    private String realName;
    private BigDecimal balance;
    private Boolean status;
    private Timestamp regDate;
    private Timestamp activeDate;
    private String remark;
    private Collection<MemberAddressEntity> memberAddressesByUserName;
    private Collection<MemberSupplyRecordEntity> memberSupplyRecordsByUserName;
    private Collection<OrderInfoEntity> orderInfosByUserName;

    @Basic
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Id
    @Column(name = "user_name")
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Basic
    @Column(name = "user_pass")
    public String getUserPass() {
        return userPass;
    }

    public void setUserPass(String userPass) {
        this.userPass = userPass;
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
    @Column(name = "real_name")
    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    @Basic
    @Column(name = "balance")
    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    @Basic
    @Column(name = "status")
    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Basic
    @Column(name = "reg_date")
    public Timestamp getRegDate() {
        return regDate;
    }

    public void setRegDate(Timestamp regDate) {
        this.regDate = regDate;
    }

    @Basic
    @Column(name = "active_date")
    public Timestamp getActiveDate() {
        return activeDate;
    }

    public void setActiveDate(Timestamp activeDate) {
        this.activeDate = activeDate;
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

        WebUserEntity that = (WebUserEntity) o;

        if (id != that.id) return false;
        if (activeDate != null ? !activeDate.equals(that.activeDate) : that.activeDate != null) return false;
        if (balance != null ? !balance.equals(that.balance) : that.balance != null) return false;
        if (email != null ? !email.equals(that.email) : that.email != null) return false;
        if (realName != null ? !realName.equals(that.realName) : that.realName != null) return false;
        if (regDate != null ? !regDate.equals(that.regDate) : that.regDate != null) return false;
        if (remark != null ? !remark.equals(that.remark) : that.remark != null) return false;
        if (status != null ? !status.equals(that.status) : that.status != null) return false;
        if (userName != null ? !userName.equals(that.userName) : that.userName != null) return false;
        if (userPass != null ? !userPass.equals(that.userPass) : that.userPass != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (userName != null ? userName.hashCode() : 0);
        result = 31 * result + (userPass != null ? userPass.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (realName != null ? realName.hashCode() : 0);
        result = 31 * result + (balance != null ? balance.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (regDate != null ? regDate.hashCode() : 0);
        result = 31 * result + (activeDate != null ? activeDate.hashCode() : 0);
        result = 31 * result + (remark != null ? remark.hashCode() : 0);
        return result;
    }

    @OneToMany(mappedBy = "webUserByUserName")
    public Collection<MemberAddressEntity> getMemberAddressesByUserName() {
        return memberAddressesByUserName;
    }

    public void setMemberAddressesByUserName(Collection<MemberAddressEntity> memberAddressesByUserName) {
        this.memberAddressesByUserName = memberAddressesByUserName;
    }

    @OneToMany(mappedBy = "webUserByUserName")
    public Collection<MemberSupplyRecordEntity> getMemberSupplyRecordsByUserName() {
        return memberSupplyRecordsByUserName;
    }

    public void setMemberSupplyRecordsByUserName(Collection<MemberSupplyRecordEntity> memberSupplyRecordsByUserName) {
        this.memberSupplyRecordsByUserName = memberSupplyRecordsByUserName;
    }

    @OneToMany(mappedBy = "webUserByUserName")
    public Collection<OrderInfoEntity> getOrderInfosByUserName() {
        return orderInfosByUserName;
    }

    public void setOrderInfosByUserName(Collection<OrderInfoEntity> orderInfosByUserName) {
        this.orderInfosByUserName = orderInfosByUserName;
    }
}
