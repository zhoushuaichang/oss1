import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.ProductSaleStatusEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * Created by Administrator on 2014-11-27.
 */

@Transactional
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = true)
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application-context.xml"})
public class ProductSaleStatusTest {

    @Resource
    private BaseDAO dao;

    @Test
    public void test() {
        ProductSaleStatusEntity pss = new ProductSaleStatusEntity();

        pss.setMemo("");
        pss.setStatus(true);
        pss.setStatusName("bucuxiao");

        dao.insert(pss);

    }

}
