//成控版块相关
import {
  Configure
} from "@/api/market/home";

const market = {
  //namespaced: true,
  state: () => ({
    //网销模块筛选条件
    filters: [],
    //案例、工地筛选条件
    cases_searchCondition: {
      PageSize: 20,
      PageIndex: 1,
      orderby: "",
      keyword: "",
      status: 1,
      style: 0,
      designerId:0,
      qcid:0,
      pmid:0,
      unit: 0,
      area: 0,
    },
    //vr筛选条件
    vr_searchCondition: {
      PageSize: 20,
      PageIndex: 1,
      orderby: "",
      keyword: "",
      status: 1,
      style: 0,
      unit: 0,
      area: 0,
    },
    //团队筛选条件
    team_searchCondition: {
      PageSize: 20,
      PageIndex: 1,
      keyword: "",
      orderby: "",
      type: 0,
      position: "",
    },
    //新闻筛选条件
    news_searchCondition: {
      PageSize: 20,
      PageIndex: 1,
      keyword: "",
      orderby: "",
      type: 3,
      classification: 0,
    },
    //软装搭配筛选条件
    softfitting_searchCondition: {
      PageSize: 20,
      PageIndex: 1,
      orderby: "",
      keyword: "",
      status: 1,
      style: "",
      space:"",
      colour: "",
    },
  }),
  mutations: {
    SET_MARKET_FILTERS: (state, data) => {
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
          commit('SET_MARKET_FILTERS', res.Data)
          resolve({
            ...state.filters
          })
        })
      });
    },
  }
}

export default market
