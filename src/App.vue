<template>
  <div v-cloak class="app-content">
    <div class="main-content">
      <keep-alive>
        <router-view v-if="router.currentRoute.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!router.currentRoute.meta.keepAlive"></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs
} from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainApp',
  setup() {
    const data = reactive({
      router: useRouter()
    });
    const refData = toRefs(data);
    onMounted(() => {

    });
    return {
      ...refData
    };
  }
});
</script>

<style scoped lang="scss">
:after,
:before {
  box-sizing: content-box;
}
html,
body,
p,
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  // user-select: none;
}
.main-content{
  min-height: 400px;
}
.app-content {
  padding-top: $body-padding-top;
}
// ::-webkit-scrollbar {
//   width: 5px;
// }
// ::-webkit-scrollbar-thumb {
//   background: #143e7c;
//   border-radius: 3px;
// }
</style>
