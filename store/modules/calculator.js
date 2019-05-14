
const calculator = {
    state: () => ({
        goodsList: [],
        userinfo: {},//用户登录信息
        filter_style: {},
        filter_area: {},
        filter_unit: {},
        filter_titles: {},
        WxConfig: {},
        count: '1',//当前展示首页默认的显示页
        routerBack: true, // 返回按钮是否打开
        calculatorInputData: {
            style: null,//风格
            rooms: null,//房间信息
            grade: null,//装修档次
            area: 90
        },
        AiQuoteConfigs: null,
        tabIndex: 0,
        baseClacDate: {
            style: null,
            rooms: null,
            grade: null,
            area: 80,
            total: 57500
        },
        jsqInputDataV2: {
            style: null,//风格
            rooms: null,//房间信息
            grade: null,//装修档次
            area: 80
        },
        calculatorV2Result:null,
        calculatorShareObj:null,
        answergameShareObj:null


    })

}


export default calculator