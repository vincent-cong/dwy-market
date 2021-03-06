/**
 * BarHeader模式：默认
 * @type {String}
 */
export const MODE_HEADER_DEF = 'def';

/**
 * BarHeader模式:搜索
 * @type {String}
 */
export const MODE_HEADER_SEARCH = 'search';


export const EVENT_PULLUP_DISABLE = 'pullup:disable';
export const EVENT_PULLUP_ENABLE = 'pullup:enable';
export const EVENT_PULLUP_RESET = 'pullup:reset';

/**
 * 产品项模式：默认
 * @type {String}
 */
export const MODE_PRODUCT_DEF = 0;

/**
 * 产品项模式:推荐位
 * @type {String}
 */
export const MODE_PRODUCT_REC = 1;

/**
 * 产品项模式:购物车
 * @type {String}
 */
export const MODE_PRODUCT_CART = 2;

/**
 * 产品项模式:订单
 * @type {String}
 */
export const MODE_PRODUCT_ORDER = 3;

/**
 * 订单状态，全部
 * @type {String}
 */
export const ORDER_STATUS_ALL = 99;

/**
 * 订单状态：未支付
 * @type {Number}
 */
export const ORDER_STATUS_UNPAY = 0;

/**
 * 订单状态：已支付
 * @type {Number}
 */
export const ORDER_STATUS_PAID = 1;

/**
 * 订单状态：处理中
 * @type {Number}
 */
export const ORDER_STATUS_PROCESS = 2;

/**
 * 订单状态：已发货
 * @type {Number}
 */
export const ORDER_STATUS_DELIVERED = 3;

/**
 * 订单状态：已完成
 * @type {Number}
 */
export const ORDER_STATUS_FINISHED = 4;

/**
 * 订单状态：已取消
 * @type {Number}
 */
export const ORDER_STATUS_CANCELED = -1;

/**
 * 默认收货人状态
 * @type {number}
 */
export const CONSIGNEE_DEFAULT='1';

/**
 * 普通收货人
 * @type {number}
 */
export const CONSIGNEE_NORMAL='0';
