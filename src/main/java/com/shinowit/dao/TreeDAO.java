package com.shinowit.dao;

import com.shinowit.entity.SysMenuEntity;
import com.shinowit.entity.SysMenuTree;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2014-12-11.
 */
@Service
public class TreeDAO {

    @Resource
    private SessionFactory sessionFactory;
    @Resource
    private BaseDAO<SysMenuEntity> sys_menu_dao;


    private void queryChildren(SysMenuTree parent) {

//        List<SysMenuEntity> childrenList = sys_menu_dao.findBySql1(sql,SysMenuEntity.class);
//        Session session=sessionFactory.openSession();
        String sql = "select distinct * from sys_menu where parent = " + parent.getSys_menu().getMenuCode();
        List<SysMenuEntity> childrenList = sys_menu_dao.findBySql1(sql, SysMenuEntity.class);
//        Query query=session.createSQLQuery(sql).addEntity(SysMenuEntity.class);
//        List<SysMenuEntity> childrenList = query.list();
//        session.close();
        for (SysMenuEntity child : childrenList) {
            SysMenuTree node = new SysMenuTree();
            node.setSys_menu(child);
            parent.addChild(node);
            queryChildren(node);
        }

    }


    @Transactional
    public SysMenuTree showTreeNode(String roleCode) {
        SysMenuTree tree = new SysMenuTree();
        try {
            String sql = "select distinct * from sys_menu right join sys_role_to_menu on sys_menu.menu_code=sys_role_to_menu.menu_code where sys_menu.parent='000' and sys_role_to_menu.role_code= ? ";

            List<SysMenuEntity> rootList = new ArrayList<SysMenuEntity>();
            rootList = sys_menu_dao.findBySql1(sql, SysMenuEntity.class, roleCode);
//            Session session=sessionFactory.openSession();
//            Query query=session.createSQLQuery(sql).addEntity(SysMenuEntity.class);
//            query.setParameter(0,roleCode);
//            List<SysMenuEntity> rootList = query.list();
//            session.close();
            for (SysMenuEntity root : rootList) {
                SysMenuTree node = new SysMenuTree();
                node.setSys_menu(root);
                tree.addChild(node);
                queryChildren(node);
                //tree.setLeaf(true);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return tree;

    }


//    private void queryChildren(SysMenuTree parent) {
//
////        List<SysMenuEntity> childrenList = sys_menu_dao.findBySql1(sql,SysMenuEntity.class);
//        Session session=sessionFactory.openSession();
//        String sql = "select distinct * from sys_menu where parent = " + parent.getSys_menu().getMenuCode();
//        Query query=session.createSQLQuery(sql).addEntity(SysMenuEntity.class);
//        List<SysMenuEntity> childrenList = query.list();
//        session.close();
//        for (SysMenuEntity child : childrenList) {
//            SysMenuTree node = new SysMenuTree();
//            node.setSys_menu(child);
//            parent.addChild(node);
//            queryChildren(node);
//        }
//
//    }
//
//    @Transactional
//    public SysMenuTree showTreeNode(String roleCode) {
//        SysMenuTree tree = new SysMenuTree();
//        try {
////            List<SysMenuEntity> rootList = new ArrayList<SysMenuEntity>();
////            rootList = sys_menu_dao.findBySql1(sql,SysMenuEntity.class,roleCode);
//            Session session=sessionFactory.openSession();
//            String sql="select distinct * from sys_menu right join sys_role_to_menu on sys_menu.menu_code=sys_role_to_menu.menu_code where sys_menu.parent='000' and sys_role_to_menu.role_code= ? ";
//            Query query=session.createSQLQuery(sql).addEntity(SysMenuEntity.class);
//            query.setParameter(0,roleCode);
//            List<SysMenuEntity> rootList = query.list();
//            session.close();
//            for (SysMenuEntity root : rootList) {
//                SysMenuTree node = new SysMenuTree();
//                node.setSys_menu(root);
//                tree.addChild(node);
//                queryChildren(node);
//                //tree.setLeaf(true);
//            }
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return tree;
//
//    }
}
