import com.shinowit.dao.BaseDAO;
import com.shinowit.entity.InStockDetailEntity;
import com.shinowit.entity.InStockEntity;
import com.shinowit.entity.ProductEntity;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import javax.transaction.Transaction;
import java.math.BigDecimal;

/**
 * Created by Administrator on 2014/12/15.
 */


@Transactional
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = true)
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application-context.xml"})
public class InsertTest {

    @Resource
    private BaseDAO<InStockDetailEntity> in_stock_detail_dao;
    @Resource
    private BaseDAO<ProductEntity> product_dao;
    @Resource
    private BaseDAO<InStockEntity> in_stock_dao;
    @Resource
    private SessionFactory sessionFactory;

    @Test
    public void test() {
        InStockDetailEntity inStockDetail = new InStockDetailEntity();

        ProductEntity pro = product_dao.findById(ProductEntity.class, "00001");
        InStockEntity inStock = in_stock_dao.findById(InStockEntity.class, 38);

        BigDecimal pr = new BigDecimal(5.0);
        BigDecimal total = new BigDecimal(25.0);
        inStockDetail.setNum(5);
        inStockDetail.setInTotal(total);
        inStockDetail.setPrice(pr);
        inStockDetail.setProductByProductCode(pro);
        inStockDetail.setInStockByInStockId(inStock);

        for (int i = 0; i < 100000; i++) {
            Session session = sessionFactory.openSession();

            org.hibernate.Transaction tra = session.beginTransaction();
            session.save(inStockDetail);
            tra.commit();
            session.close();
        }


    }


}
