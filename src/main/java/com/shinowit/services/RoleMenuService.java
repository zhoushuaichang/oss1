package com.shinowit.services;

import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.SysRoleEntity;
import com.shinowit.entity.SysRoleToMenuEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014/12/15.
 */
@Service
public class RoleMenuService {

    @Resource
    private BaseDAO<SysRoleEntity> sys_role_dao;
    @Resource
    private BaseDAO<SysRoleToMenuEntity> role_menu_dao;


    @Transactional
    public boolean updateRoleMenu(SysRoleEntity sysRole, List<SysRoleToMenuEntity> role_menu_list) {
        boolean result = false;
        sys_role_dao.update(sysRole);
        String delete_hql = "delete from SysRoleToMenuEntity where roleCode=" + sysRole.getRoleCode();
        role_menu_dao.extcuteHQL(delete_hql);
        for (int i = 0; i < role_menu_list.size(); i++) {
            role_menu_dao.insert(role_menu_list.get(i));
        }
        result = true;
        return result;
    }

}
