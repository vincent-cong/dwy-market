<template lang="html">
  <div class="">
    <tab active-color="#222">
      <tab-item v-for="tab of tabList"
                :selected="tab.status===status"
                @click="status = tab.status">{{tab.text}}
      </tab-item>
    </tab>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-show="orders.length>0" v-ref:scroller>
        <div class="padding-vertical">
          <template v-if="orders.length>0">
            <order-item
                    v-for="item of orders"
                    track-by="orderid"
                    :order="item"
                    @on-cancel="cancelOrder"
                    @on-remove="removeOrder"
                    @on-pay="pay"
                    v-link="{name:'orderDetail',params:{id:item.orderid}}">

            </order-item>
          </template>

        </div>
      </scroller>

      <none-data-view v-show="orders.length===0">

      </none-data-view>
    </div>
  </div>
</template>

<script lang="babel">
  import BaseView from './BaseView'
  import {
          ORDER_STATUS_CANCELED,
          ORDER_STATUS_UNPAY,
          ORDER_STATUS_PROCESS,
          ORDER_STATUS_DELIVERED,
          ORDER_STATUS_FINISHED,
          ORDER_STATUS_PAID
  } from '../const'

  import Order, {OrderProductItem} from '../services/Order';

  import User from '../services/User';

  import {find} from 'lodash'

  export default BaseView.extend({
    data() {
      return {
        status: ORDER_STATUS_UNPAY,
        tabList: [
          {status: ORDER_STATUS_UNPAY, text: '未付款'},
          {status: ORDER_STATUS_PAID, text: '已付款'},
          {status: ORDER_STATUS_PROCESS, text: '处理中'},
          {status: ORDER_STATUS_DELIVERED, text: '已发货'},
          {status: ORDER_STATUS_FINISHED, text: '已完成'},
          {status: ORDER_STATUS_CANCELED, text: '已取消'}

        ],
        orders: []
      }
    },
    route: {
      data(){
        return this.fetchOrders();
      },
      activate(){
        User.configWeiXinJSSDK(location.href)
                .then(resp=>{
                  console.log(resp);
                })
                .catch(err=>{
                  console.error(err);
                });
      }
    },
    ready(){
      this.$on('cancel-order-success', function (orderid) {
        let order = find(this.orders, {orderid});
        this.orders.$remove(order);
      });
    },
    watch: {
      status(){
        this.fetchOrders();
      },
      orders(){
        this.$rerender();
      }
    },
    methods: {
      fetchOrders(){
        return Order.fetchByStatus(this.$root.UID, this.status)
                .then(({datalist})=> {
                  this.orders = datalist;
                  this.$scrollTop();
                });
      },
      cancelOrder(order){
        Order.cancelById(order.orderid)
                .then(()=> {
                  this.orders.$remove(order);
                  this.$toast('取消订单成功');
                });
      },
      removeOrder(order){
        Order.removeById(order.orderid)
                .then(()=> {
                  this.orders.$remove(order);
                  this.$toast('删除订单成功');
                });
      },
      pay(order){

        let {paidmoney, orderno}=order;
        Order.pay(paidmoney, orderno, this.$root.UID)
                .then(resp=> {
                  debugger;
                  this.roders.$remove(order);
                  this.$alert('订单支付成功');
                });
      }
    }
  });
</script>
