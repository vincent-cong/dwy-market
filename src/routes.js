import IndexView from './views/IndexView'
import MainView from './views/Main'
import HomeView from './views/HomeView'
import SearchView from './views/SearchView'
import CategoryListView from './views/CategoryListView'
import ShoppingCartView from './views/ShoppingCartView'
import OrderCreateView from './views/OrderCreateView.vue'
import OrderListView from './views/OrderListView'
import OrderDetailView from './views/OrderDetailView'
import PersonalView from './views/PersonalView'
import ProductListView from './views/ProductListView'
import ProductDetailView from './views/ProductDetailView'
import BonusView from './views/BonusView'
import CashInfoView from './views/CashInfoView'
import FansListView from './views/FansListView'
import ConsigneeListView from './views/ConsigneeInfoListView';
import ConsigneeInfoEditView from './views/ConsigneeInfoEditView';
import ConsigneeCreateView from './views/ConsigneeCreateView.vue';
import TabView from './views/TabView.vue'
/**
 * 登录
 * @type {String}
 */
export const ROUTE_LOGIN = 'login';

/**
 * 首页
 * @type {String}
 */
export const ROUTE_HOME = 'home';

/**
 * 搜索页
 * @type {String}
 */
export const ROUTE_SEARCH = 'search';

/**
 * 产品分类列表
 * @type {String}
 */
export const ROUTE_CATEGORY_LIST = 'categories';

/**
 * 购物车
 * @type {String}
 */
export const ROUTE_SHOPPING_CART = 'shoppingCart';

/**
 * 关于我
 * @type {String}
 */
export const ROUTE_ME = 'me';

/**
 * 收货人信息
 * @type {String}
 */
export const ROUTE_CONSIGNEE_INFO = 'consigneeInfo';

/**
 * 收货人管理
 */
export const ROUTE_CONSIGNEE_LIST = 'consigneeList';

/**
 * 收货人编辑
 */
export const ROUTE_CONSIGNEE_EDIT = 'consigneeEdit';

/**
 * 创建收货人
 */
export const ROUTE_CONSIGNEE_CREATE = 'consigneeCreate';


/**
 * 提现
 * @type {String}
 */
export const ROUTE_CASH_INFO = 'cashInfo';

/**
 * 我的二维码
 * @type {String}
 */
export const ROUTE_QR_CODE = 'QRCode';

/**
 * 我的奖励
 * @type {String}
 */
export const ROUTE_BONUS = 'bonus';

/**
 * 我的粉丝
 * @type {String}
 */
export const ROUTE_FANS = 'fans';

/**
 * 订单列表
 * @type {String}
 */
export const ROUTE_ORDER_LIST = 'orders';

/**
 * 订单详情
 * @type {String}
 */
export const ROUTE_ORDER_DETAIL = 'orderDetail';

/**
 * 订单详情
 * @type {String}
 */
export const ROUTE_ORDER_CREATE = 'orderCreate';

/**
 * 订单确认表单
 * @type {String}
 */
export const ROUTE_ORDER_FORM = 'orderForm';

/**
 * 产品列表
 * @type {String}
 */
export const ROUTE_PRODUCT_LIST = 'products';

/**
 * 产品详情
 * @type {String}
 */
export const ROUTE_PRODUCT_DETAIL = 'productDetail';



/**
 * 路由配置
 */
export default {
  '/': {
    component: IndexView,
    subRoutes: {
      '/': {
        component: MainView,
        subRoutes: {
          '/': {
            name: ROUTE_HOME,
            component: HomeView
          },
          '/categories': {
            name: ROUTE_CATEGORY_LIST,
            component: CategoryListView
          },
          '/shopping-cart': {
            name: ROUTE_SHOPPING_CART,
            component: ShoppingCartView
          },
          '/orders': {
            name: ROUTE_ORDER_LIST,
            component: OrderListView
          },
          '/me': {
            name: ROUTE_ME,
            component: PersonalView
          }
        }
      },
      '/products': {
        name: ROUTE_PRODUCT_LIST,
        component: ProductListView
      },
      '/products/:id': {
        name: ROUTE_PRODUCT_DETAIL,
        component: ProductDetailView
      },
      '/orders/:id': {
        name: ROUTE_ORDER_DETAIL,
        component: OrderDetailView
      },
      '/orders/create': {
        name: ROUTE_ORDER_CREATE,
        component: OrderCreateView
      },
      '/search': {
        name: ROUTE_SEARCH,
        component: SearchView
      },
      '/bonus': {
        name: ROUTE_BONUS,
        component: BonusView
      },
      '/cash': {
        name: ROUTE_CASH_INFO,
        component: CashInfoView
      },
      '/fans': {
        name: ROUTE_FANS,
        component: FansListView
      },
      '/consignees': {
        name: ROUTE_CONSIGNEE_LIST,
        component: ConsigneeListView
      },
      '/consignees/:id/edit': {
        name: ROUTE_CONSIGNEE_EDIT,
        component: ConsigneeInfoEditView
      },
      '/consignees/create': {
        name: ROUTE_CONSIGNEE_CREATE,
        component: ConsigneeCreateView
      }
    }
  },
  '/login': {
    component: {}
  },
  '/test':{
    component:TabView
  },
  '*': {
    component: {
      template: `<div>404</div>`
    }
  }
}
