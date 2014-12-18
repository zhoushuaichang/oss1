/**
 * Created by Administrator on 2014/11/26.
 */

import com.shinowit.dao.BaseDAO;

import com.shinowit.entity.SysMenuListEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by Administrator on 2014/10/23.
 */
@Transactional
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = true)
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application-context.xml"})

public class SysMenuListTest {
    @Resource
    private BaseDAO dao;

    @Test
    public void test() {
        List<SysMenuListEntity> list = dao.listAll(SysMenuListEntity.class);
        System.out.print(list);
    }

}
