package com.shinowit.entity;

import javax.persistence.*;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "member_address")
public class MemberAddressEntity {
    private int id;
    private String recvMan;
    private String tel;
    private String recvAddress;
    private String postCode;
    private Boolean defaultAddr;
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
    @Column(name = "recv_man")
    public String getRecvMan() {
        return recvMan;
    }

    public void setRecvMan(String recvMan) {
        this.recvMan = recvMan;
    }

    @Basic
    @Column(name = "tel")
    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
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
    @Column(name = "default_addr")
    public Boolean getDefaultAddr() {
        return defaultAddr;
    }

    public void setDefaultAddr(Boolean defaultAddr) {
        this.defaultAddr = defaultAddr;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MemberAddressEntity that = (MemberAddressEntity) o;

        if (id != that.id) return false;
        if (defaultAddr != null ? !defaultAddr.equals(that.defaultAddr) : that.defaultAddr != null) return false;
        if (postCode != null ? !postCode.equals(that.postCode) : that.postCode != null) return false;
        if (recvAddress != null ? !recvAddress.equals(that.recvAddress) : that.recvAddress != null) return false;
        if (recvMan != null ? !recvMan.equals(that.recvMan) : that.recvMan != null) return false;
        if (tel != null ? !tel.equals(that.tel) : that.tel != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (recvMan != null ? recvMan.hashCode() : 0);
        result = 31 * result + (tel != null ? tel.hashCode() : 0);
        result = 31 * result + (recvAddress != null ? recvAddress.hashCode() : 0);
        result = 31 * result + (postCode != null ? postCode.hashCode() : 0);
        result = 31 * result + (defaultAddr != null ? defaultAddr.hashCode() : 0);
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
