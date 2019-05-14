import Vue from 'vue';
import store from '@/store';
import cache from './localstorage';

let Fc = {};
if (window)
  window.Fc = Fc;
/**
 * 该Fc对象放置所有的共用方法
 * Fc.dialog()是调用弹框的方法
 */
Fc.dialog = function (option) {
  var m = document.createElement('div');
  if (option.parentel != null) {
    option.parentel.appendChild(m);
  } else {
    document.getElementsByTagName('body')[0].appendChild(m);
  }
  var _d = Fc.clone(option.data == null ? {} : option.data);
  var v = '';
  var component = option.component;
  let template = '';

  if (typeof component == 'string') {
    template = `<el-dialog :title="title" :close-on-click-modal="modalshow" :width="width" :visible.sync="show" append-to-body @close="close"><${component} v-on:callback="callback" :init_data="data"> </${component}></el-dialog>`;
  } else if (option.htmlText != null) {
    template = `<el-dialog :title="title" :close-on-click-modal="modalshow" :width="width" :visible.sync="show" append-to-body  @close="close">${option.htmlText}</el-dialog>`;
  } else {
    //加载子组件
    template = '<el-dialog v-el-drag-dialog :style="style" :close-on-click-modal="modalshow" :width="width" :title="title" :visible.sync="show" top="4vh" append-to-body :before-close="handleClose" @close="close"><child v-on:callback="callback" :init_data="data"> \
        </child></el-dialog>';
  }
  if (option.type && option.type == 'iframe') {
    v = new Vue({
      el: m,
      store,
      data: function () {
        return {
          width: option.width,
          title: option.title,
          url: option.url,
          modal: true,
          custom_class: 'dialg-class',
          close_on_press_escape: false,
          show_close: true,
          show: true,
          data: _d,
          modalshow: false
        };
      },
      template: '<el-dialog :width="width" :title="title" visible.sync="show" :close-on-click-modal="modalshow" append-to-body><iframe :src="url" style="width:100%;height:100%;"></iframe></el-dialog>',
    });
  } else {
    v = new Vue({
      el: m,
      store,
      data: function () {
        return {
          width: option.width,
          title: option.title,
          style: option.style,
          modal: false,
          custom_class: 'dialg-class',
          close_on_press_escape: false,
          show_close: true,
          show: true,
          top: '',
          data: _d,
          modalshow: false
        };
      },
      template: template,
      mounted: function () {},
      methods: {
        handleClose(done) {
          if (option.close) {
            option.close();
          }
          done();
        },
        close() {
          if (option.close) {
            option.close();
          }
        },
        callback(result) {
          if (option._source != null) {
            option.callback.call(option._source, result);
            this.show = false;
            return;
          }
          //如果不传type或者type等于close或cancel直接关闭弹框
          if (!result.type || result.type == 'close' || result.type == 'cancel') {
            this.show = false;
          } else if (result.type == 'sure') {
            //如果type等于sure则调用parent传递过来的回调函
            this.show = false;
            if (option.callback) {
              option.callback(result.data);
            }
          }
        },
      },
      components: {
        child: option.component,
      },
    });
  }
  return v;
};

Fc.clone = function clone(obj) {
  // Handle the 3 simple types, and null or undefined
  if (null == obj || 'object' != typeof obj) return obj;
  // Handle Date
  if (obj instanceof Date) {
    var copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  // Handle Array
  if (obj instanceof Array) {
    var copy = [];
    for (var i = 0, len = obj.length; i < len; ++i) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }
  // Handle Object
  if (obj instanceof Object) {
    var copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }
  throw new Error("Unable to copy obj! Its type isn't supported.");
};

//弹窗提示选择框并执行具体方法 type=>success/warning/info/error
import {
  MessageBox
} from 'element-ui';
Fc.confirm = function (msg, func, title = "提示", type = "warning") {
  MessageBox.confirm(msg, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: type
  }).then(() => {
    func(); //执行具体的方法
  }).catch(() => {});
};
Fc.alert = function (msg, type = "warning", title = "提示") {
  MessageBox.alert(msg, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: type
  });
};



import {
  Message
} from 'element-ui';
Fc.message = function (msg, type = "") {
  Message({
    showClose: true,
    message: msg,
    type: type
  });
};

Fc.LoadingTips = function (msg = "正在处理数据…请稍后") {
  Message({
    showClose: false,
    message: msg,
    type: "warning",
    center: true,
    //duration:0,
    iconClass: 'el-icon-loading'
  });
};

import {
  Notification
} from 'element-ui';
Fc.notice = function (msg, type = "warning", title = '提示', ) {
  Notification({
    title: title,
    message: msg,
    type: type
  });
};

//加载提示
import {
  Loading
} from 'element-ui';
Fc.Loading = function (msg = "正在处理一些事情，请稍后", customClass = "complete-list-mask", isAutoClose = false) {
  let loadingInstance = Loading.service({
    lock: true,
    text: msg,
    customClass: customClass,
    background: "rgba(0, 0, 0, 0.7)"
  });
  if (isAutoClose) {
    setTimeout(() => {
      loadingInstance.close();
    }, 2000);
  }
  return loadingInstance;
}

/*  
 *   全局缓存 
 *   @parms: key为缓存名称  
 */
Fc.ClearCache = function (key) {
  if (cache.getLocal(key)) {
    cache.removeLocal(key);
    return store.dispatch("Set_" + key);
  }
  if (key === 'all') {
    cache.clearLocal();
  }
};

//获取当前登录人
Fc.CurrentLoginInfo = function () {
  var result = {};
  var cacheVal = cache.getCookie('User_LoginInfo');
  if (cacheVal != null && cacheVal != undefined) {
    result = JSON.parse(cacheVal);
  }
  return result;
}




export default Fc;



