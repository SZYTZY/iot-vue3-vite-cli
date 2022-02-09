<template>
  <el-dialog
    v-model="showdialog"
    :title="title"
    :custom-class="'custom-dialog'"
    :width="width"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :modal="modal"
    @close="$emit('hclose')"
  >
    <div class="com-dia-content">
      <slot></slot>
    </div>
    <div class="com-dia-footer">
      <el-button v-if="cancelText !== '916'" class="dia-button" @click="$emit('hclose')">{{ cancelText }}</el-button>
      <el-button v-if="cancelText02" class="dia-button" @click="$emit('hcancel')">{{ cancelText02 }}</el-button>
      <el-button v-if="confirmText !== '916'" class="dia-button" type="primary" @click="$emit('hconfirm')">{{ confirmText }}</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  watch
} from 'vue';

export default defineComponent({
  // 事件：hclose-关闭弹窗回调，hconfirm-确定按钮回调
  props: {
    title: {
      // 标题
      type: String,
      required: false,
      default: ''
    },
    show: {
      // 是否展示
      type: Boolean,
      default: false
    },
    cancelText: {
      // 取消按钮文字，如果是916 不展示该按钮
      type: String,
      required: false,
      default: '取消'
    },
    cancelText02: {
      // 备用取消按钮，用于自定义取消事件
      type: String,
      required: false,
      default: ''
    },
    confirmText: {
      // 确定按钮文字，如果是916 不展示该按钮
      type: String,
      required: false,
      default: '确定'
    },
    width: {
      // 弹窗宽度
      type: String,
      required: false,
      default: '750px'
    },
    modal: { // 是否显示蒙层
      type: Boolean,
      default: true
    }
  },
  emits: ['hclose', 'hcancel', 'hconfirm'],
  setup(props: any) {
    const data = reactive<any>({
      showdialog: false
    });
    const setDialogTop = () => {
      // eslint-disable-next-line no-restricted-globals
      if (self !== top) {
        setTimeout(() => {
          const messagebox: any = document.getElementsByClassName('custom-dialog') || [];
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < messagebox.length; i++) {
            messagebox[i].style.marginTop = `${(window.parent.document.documentElement.scrollTop || window.parent.document.body.scrollTop) + 50}px`;
          }
        });
      }
    };
    watch(
      () => props.show,
      (newv) => {
        data.showdialog = newv;
        if (newv) {
          setDialogTop();
        }
      }
    );
    const redata = toRefs(data);
    return {
      ...redata
    };
  }
});
</script>

<style lang="scss" scoped>
.com-dia-content {
  position: relative;
}
.com-dia-footer {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .dia-button {
    min-width: 100px;
  }
}
</style>
