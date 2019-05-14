import Cookies from 'js-cookie'

export default {
    getCookie: function(key) {
        return Cookies.get(key)
    },
    setCookie: function(key,value) {
        return Cookies.set(key, value, { expires: 7 })  //  expires 为存储time，单位 天
    },
    removeCookie: function(key) {
        return Cookies.remove(key)
    },
    getSession: function(name) {
        if (!name) return
        return window.sessionStorage.getItem(name)
    },
    setSession: function(name, content) {
        if (!name) return
        if (typeof content !== 'string') {
            content = JSON.stringify(content)
        }
        window.sessionStorage.setItem(name, content)
    },
    removeSession: function(name) {
        if (!name) return
        window.sessionStorage.removeItem(name)
    },
    getLocal: function(name) {
        if (!name) return
        return window.localStorage.getItem(name)
    },
    setLocal: function(name, content) {
        if (!name) return
        if (typeof content !== 'string') {
            content = JSON.stringify(content)
        }
        window.localStorage.setItem(name, content)
    },
    removeLocal: function(name) {
        if (!name) return
        window.localStorage.removeItem(name)
    },
    clearLocal: function() {
        window.localStorage.clear()
    }
}
