<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    vue 模板
    <button @click="login">
      按钮
    </button>
    <SvgIcon icon-class="chart" />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { doLogin } from '@/apis/demo';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  mounted() {
    console.log('log');
    console.error('error');
    console.info('info');
  },
  methods: {
    login() {
      const params = {
        encryptReq: true,
        password: 'ZfZn2c9/1eAvZC3fN4mGUA== 11HDESaAhiHHugDz',
        skipCaptcha: '1',
        systemCode: '0001',
        username: 'ZfZn2c9/1eAvZC3fN4mGUA== 11HDESaAhiHHugDz',
      };
      doLogin(params).then((res) => {
        console.log(res, 'res');
      }).catch((err) => {
        console.log(err, 'err');
      });
    },
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100px;
}
</style>
