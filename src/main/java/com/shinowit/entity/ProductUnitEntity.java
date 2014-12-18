package com.shinowit.entity;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "product_unit", schema = "dbo", catalog = "oss")
public class ProductUnitEntity {
    private Integer unitId;
    private String name;
    private Boolean status;
    private String memo;
//    private Collection<ProductEntity> productsByUnitId;


    @Id
    @Column(name = "unit_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getUnitId() {
        return unitId;
    }

    public void setUnitId(Integer unitId) {
        this.unitId = unitId;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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


//    @OneToMany(mappedBy = "productUnitByUnitId")
//    public Collection<ProductEntity> getProductsByUnitId() {
//        return productsByUnitId;
//    }
//
//    public void setProductsByUnitId(Collection<ProductEntity> productsByUnitId) {
//        this.productsByUnitId = productsByUnitId;
//    }
}
