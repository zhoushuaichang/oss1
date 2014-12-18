package com.shinowit.entity;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "product_sale_status", schema = "dbo", catalog = "oss")
public class ProductSaleStatusEntity {
    private Integer statusId;
    private String statusName;
    private Boolean status;
    private String memo;
//    private Collection<ProductEntity> productsByStatusId;

    @Id
    @Column(name = "status_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getStatusId() {
        return statusId;
    }

    public void setStatusId(Integer statusId) {
        this.statusId = statusId;
    }

    @Basic
    @Column(name = "status_name")
    public String getStatusName() {
        return statusName;
    }

    public void setStatusName(String statusName) {
        this.statusName = statusName;
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
    @Column(name = "memo")
    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }


//    @OneToMany(mappedBy = "productSaleStatusByStatusId",fetch = FetchType.LAZY)
//    public Collection<ProductEntity> getProductsByStatusId() {
//        return productsByStatusId;
//    }
//
//    public void setProductsByStatusId(Collection<ProductEntity> productsByStatusId) {
//        this.productsByStatusId = productsByStatusId;
//    }
}
