package com.shinowit.entity;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "product_type", schema = "dbo", catalog = "oss")
public class ProductTypeEntity {
    private String typeCode;
    private String typeName;
    private Integer sortId;
    private Boolean status;
//    private Collection<ProductEntity> productsByTypeCode;

    @Id
    @Column(name = "type_code")
    public String getTypeCode() {
        return typeCode;
    }

    public void setTypeCode(String typeCode) {
        this.typeCode = typeCode;
    }

    @Basic
    @Column(name = "type_name")
    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProductTypeEntity that = (ProductTypeEntity) o;

        if (sortId != null ? !sortId.equals(that.sortId) : that.sortId != null) return false;
        if (status != null ? !status.equals(that.status) : that.status != null) return false;
        if (typeCode != null ? !typeCode.equals(that.typeCode) : that.typeCode != null) return false;
        if (typeName != null ? !typeName.equals(that.typeName) : that.typeName != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = typeCode != null ? typeCode.hashCode() : 0;
        result = 31 * result + (typeName != null ? typeName.hashCode() : 0);
        result = 31 * result + (sortId != null ? sortId.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        return result;
    }

//    @OneToMany(mappedBy = "productTypeByTypeCode")
//    public Collection<ProductEntity> getProductsByTypeCode() {
//        return productsByTypeCode;
//    }
//
//    public void setProductsByTypeCode(Collection<ProductEntity> productsByTypeCode) {
//        this.productsByTypeCode = productsByTypeCode;
//    }
}
