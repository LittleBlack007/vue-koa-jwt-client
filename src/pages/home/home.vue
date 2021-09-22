<template>
  <div>
    <el-button type="primary" @click="getContent">查看文章列表</el-button>
    <el-button type="primary" @click="createContent">创建文章列表</el-button>
  </div>
</template>

<script>
import {Base64} from 'js-base64';

export default {
  name: 'Home',
  data(){
    return {

    }
  },
  methods:{
    async getContent(){
      let result = await this.$axios.get('/api/content/list');
      console.log(result);
    },
    async createContent(){
      let result = await this.$axios({
        url: '/api/content/create',
        method: 'post',
        headers: {
          'Authorization': this._encode()  // http base 校验方式
        }
      })
    },
    _encode(){  // base64 对token进行加密传输
      const token = localStorage.getItem('token');
      // base64 接受参数格式 account:password
      const encode = Base64.encode(`${token}:`);
      // authoration 固定格式 Basic encode
      return `Basic ${encode}`;
    }
  }
}
</script>

<style>

</style>