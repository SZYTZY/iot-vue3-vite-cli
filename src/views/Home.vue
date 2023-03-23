<template>
  <div class="base-con">
    <el-form ref="ruleForm" :model="form" label-width="120px" @submit.prevent>
      <el-form-item label="访问地址">
        <el-input v-model.trim="form.url" type="text"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <div>接口地址：{{ result.url }}</div>
        <div>请求方式：{{ result.method }}</div>
        <div>请求参数：</div>
        <div>返回数据：</div>
      </el-form-item>
    </el-form>
    <div class="footer-div">
      <el-button class="apply-btn" type="primary" @click="onSubmit()">保存</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRefs } from 'vue';
import { iotAxios } from 'iot-axios';

const data = reactive<any>({
  form: {
    // 消息详情
    url: ''
  },
  result: {}
});
const { form, result } = toRefs(data);
const onSubmit = async () => {
  // 保存
  iotAxios
    .post('/puppeteer', { url: data.form.url })
    .then((res: any) => {
      data.result = res.data;
    })
    .catch(() => {});
};
</script>
<style lang="scss" scoped>
.base-con {
  width: 800px;
  margin: 0 auto;
}
.footer-div {
  width: 800px;
  text-align: center;
  padding-top: 30px;
  .apply-btn {
    width: 160px;
  }
}
</style>
