//成控版块相关
import {
    Configure
  } from "@/api/mall/home";
  
  const mall = {
    //namespaced: true,
    state: () => ({
      //商城模块筛选条件
      filters: [],
      //产品筛选
      product_searchCondition: {
        PageSize: 20,
        PageIndex: 1,
        orderby: "",
        keyword: "",
        style: "",
        brand: "",
        label:"",
        status: 1,
        categoryId:0,
        typeId:0,
        merchantId:0,
      },
    }),
    mutations: {
      SET_MALL_FILTERS: (state, data) => {
        state.filters = data
      },
    },
    actions: {
      async nuxtServerInit({
        commit,
        state,
        req
      }) {
        return new Promise((resolve, reject) => {
          //设置缓存
          Configure().then(res => {
            state.filters = res.Data
            commit('SET_MALL_FILTERS', res.Data)
            resolve({
              ...state.filters
            })
          })
        });
      },
    }
  }
  
  export default mall
  