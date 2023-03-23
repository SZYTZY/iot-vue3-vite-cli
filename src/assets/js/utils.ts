// eslint-disable-line
import VueCookies from 'vue-cookies';
import { baseweb } from './api';

const vuecookie: any = VueCookies;
// 通过时间戳获取时间格式
export const changetime = (time: Date, type: Number | void) => {
  const d = new Date(time);
  const y = d.getFullYear();
  const m = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
  const D = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
  const h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  const M = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  const s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
  switch (type) {
    case 1:
      return y + '-' + m + '-' + D + ' ' + h + ':' + M + ':' + s;
    case 2:
      return y + '-' + m + '-' + D;
    case 3:
      return y + '年' + m + '月' + D + '日  ' + h + ':' + M;
    default:
      return y + '-' + m + '-' + D + ' ' + h + ':' + M;
  }
};
/**
 * 去除字符串前后空格
 * @param str 要操作的数据
 * @param type 修改类型
 * @returns 修改后的数据
 */
export const trim = (str: string, type?: number) => {
  // type:1-只去除末尾空格
  if (!str) {
    return '';
  }
  return type === 1
    ? str
      .toString()
      .replace(/(\s*$)/g, '')
      .replace(/(↵$)/g, '')
    : str.toString().replace(/(^\s*)|(\s*$)/g, '');
};
// 浅剔除对象的空属性
export const filterParams = (obj: any) => {
  const newObj: any = {};
  for (const key in obj) {
    if (obj[key] || obj[key] === 0) {
      if (trim(obj[key]) || obj[key] === 0) {
        newObj[key] = trim(obj[key]);
      }
    }
  }
  return newObj;
};
// cookie统一管理
export const cookies = {
  get: (name: any) => {
    const getcookie = vuecookie.get(name);
    try {
      return JSON.parse(getcookie);
    } catch (e) {
      return getcookie;
    }
  },
  set: (key: any, value: any, time: any) => {
    if (!time) {
      time = '1d';
    }
    if (Object.prototype.toString.call(value) === '[object Object]') {
      value = JSON.stringify(value);
    }
    vuecookie.set(key, value, time);
  },
  remove: (name: any) => {
    vuecookie.remove(name);
  }
};
export const formRuleError = () => {
  // form表单校验-失败后自动获取焦点
  setTimeout(() => {
    const isError: any | null = document.getElementsByClassName('is-error')[0];
    if (isError.querySelector('input')) {
      isError.querySelector('input').focus();
    } else if (isError.querySelector('textarea')) {
      isError.querySelector('textarea').focus();
    }
  }, 100);
};
export const openPage = (path: any, newpage?: any) => {
  // 其他项目页面跳转-兼容iframe
  if (path.indexOf('http') !== 0) {
    path = baseweb + path;
  }
  if (self !== top) {
    if (newpage === -1) {
      parent.window.history.go(-1);
    } else if (newpage) {
      parent.window.open(path);
    } else {
      parent.window.location.href = path;
    }
  } else if (newpage === -1) {
    window.history.go(-1);
  } else if (newpage) {
    window.open(path);
  } else {
    window.location.href = path;
  }
};
