import { Router } from 'express';
import { BuyController } from './controller/buyer.controller';
import { initiliazeServer } from './controller/main.controller';
import { SellerController } from './controller/seller.controller';
import { UserController } from './controller/user.controller';
import { buyOrderValidation } from './middleware/buyOrder.validation';
import { catalogValidation } from './middleware/catalog.validation';
import { loginValidation } from './middleware/login.validation';
import { verifyToken } from './middleware/user-auth';
import { userValidation } from './middleware/user.validation';


export const router: Router = Router(),
    { register, login } = new UserController(),
    { catalogs, ordersPlaced } = new SellerController,
    { sellerCatalog, sellerLists, buyOrder } = new BuyController;



//Health Check
router.get('/start', initiliazeServer);


//Register API
router.post('/auth/register', userValidation, register);

//Login API
router.post('/auth/login', loginValidation, login);

//For auth validation
router.use(verifyToken);

// Seller Catalog
router.post('/seller/create-catalog', catalogValidation, catalogs);

//Seller view order
router.get('/seller/orders', ordersPlaced);

//Buyer Get Seller Data
router.get('/buyer/list-of-sellers', sellerLists);

//Buyer Get Catalog data by Seller Id
router.get('/buyer/seller-catalog/:seller_id', sellerCatalog);

//Buyer creates buy order
router.post('/buyer/create-order/:seller_id', buyOrderValidation, buyOrder);


