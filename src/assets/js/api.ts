const env: any = import.meta.env.VITE_BASE_ENV;
let baseapi: any = {
  dev: {
    // 联调
    // api: 'http://39.107.247.209'
    api: '',
    web: 'https://www.haigeek.com/developercenter/static/develop.html#/'
  },
  test: {
    // 验收
    // api: 'http://123.57.31.57'
    api: '',
    web: 'https://www.haigeek.com/developercenter/static/develop.html#/'
  },
  prod: {
    // 正式
    api: '',
    web: 'https://www.haigeek.com/developercenter/static/develop.html#/'
  },
  apikaifa: 'https://stp.haier.net/mock/290'
};

if (env === 'development') {
  baseapi = {
    dev: {
      api: '/apidev',
      // api: '/apikaifa',  //开发时使用
      web: 'https://www.haigeek.com/developercenter/static/develop.html#/'
    },
    test: {
      api: '/apitest',
      web: 'https://www.haigeek.com/developercenter/static/develop.html#/'
    },
    prod: {
      api: '/apiprod',
      web: 'https://www.haigeek.com/developercenter/static/develop.html#/'
    }
  };
}
export const envapi: string = 'prod'; // 服务端限制 必须使用host的方式使用正式环境域名访问
export const baseweb: any = baseapi[envapi].web;
export const axiosapi: string = baseapi[envapi].api;
