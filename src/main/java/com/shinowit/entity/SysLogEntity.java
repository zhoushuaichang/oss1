package com.shinowit.entity;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Administrator on 2014/11/26.
 */
@Entity
@Table(name = "sys_log")
public class SysLogEntity {
    private int logId;
    private Timestamp logTime;
    private String ip;
    private String content;
    private SysMenuEntity sysMenuByMenuCode;
    private SysUserEntity sysUserByUserId;

    @Id
    @Column(name = "log_id")
    public int getLogId() {
        return logId;
    }

    public void setLogId(int logId) {
        this.logId = logId;
    }

    @Basic
    @Column(name = "log_time")
    public Timestamp getLogTime() {
        return logTime;
    }

    public void setLogTime(Timestamp logTime) {
        this.logTime = logTime;
    }

    @Basic
    @Column(name = "ip")
    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    @Basic
    @Column(name = "content")
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SysLogEntity that = (SysLogEntity) o;

        if (logId != that.logId) return false;
        if (content != null ? !content.equals(that.content) : that.content != null) return false;
        if (ip != null ? !ip.equals(that.ip) : that.ip != null) return false;
        if (logTime != null ? !logTime.equals(that.logTime) : that.logTime != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = logId;
        result = 31 * result + (logTime != null ? logTime.hashCode() : 0);
        result = 31 * result + (ip != null ? ip.hashCode() : 0);
        result = 31 * result + (content != null ? content.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "menu_code", referencedColumnName = "menu_code")
    public SysMenuEntity getSysMenuByMenuCode() {
        return sysMenuByMenuCode;
    }

    public void setSysMenuByMenuCode(SysMenuEntity sysMenuByMenuCode) {
        this.sysMenuByMenuCode = sysMenuByMenuCode;
    }

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    public SysUserEntity getSysUserByUserId() {
        return sysUserByUserId;
    }

    public void setSysUserByUserId(SysUserEntity sysUserByUserId) {
        this.sysUserByUserId = sysUserByUserId;
    }
}
