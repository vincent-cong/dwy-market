<template>
  <div class="view">
    <bar-header title="添加收货人"></bar-header>
    <div class="scroll-content has-header">
      <consignee-form @on-submit="onSubmit" :form-model="model"></consignee-form>
    </div>
  </div>
</template>
<script type="text/babel">
  import BaseView from './BaseView.vue'
  import {Consignee,Address} from '../services/Consignee'
  import regions from 'vux/src/components/address/list.json'
  import {find} from 'lodash'

  export default BaseView.extend({
    data(){
      return {
        model:{
          name:'',
          mobile:'',
          address:[],
          detail:''
        }
      }
    },
    ready(){
      this.$on('create-consignee-success',()=>{
        this.$toast('添加收货人成功！');
        this.$goBack();
      });
    },
    methods: {
      onSubmit(){
        var model=Object.assign({},this.model);

        model.address=model.address.map(id=>{
          var region=find(regions,{value:id});
          return region?region.name:'';
        });

        this.createConsignee(this.$root.UID,model);
      }
    }
  });
</script>
<style lang="scss">

</style>
