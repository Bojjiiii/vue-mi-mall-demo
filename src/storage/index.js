// 为什么要封装 storage(local) cookie

// cookie与storage 的区别
// 存储大小:cookie4K,storage5M
// 有效期: cookie拥有有效期,storage永久存储
// Cookie会发送到服务器端,存储在内存中,storage存储在浏览器端
// 路径:cookie可以设置路径限制,storage存储在域名下
// API:cookie没有特定的API,storage有对应的API

// 为什么要封装storage
// Storage 本身有API 但是只是简单的key/value的操作
// Storage 只能存储字符串，需要手工转换成JSON 对象
// Storage 只能一次性清空，不能单个清空

// 封装之后可以存储更复杂的数据形式

/**
 * Storage 封装 使storage可以存储复杂数据类型，而不是简单的字符串
 */
const STORAGE_KEY = 'mall'
export default {
    /**
     * 存储值
     */
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val)
        } else {
            let storage = this.getStorage()
            storage[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
        }

    },
    /**
     * 获取值
     */
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            if (val) return val[key]
        }
        return this.getStorage()[key]
    },
    /**
     * 获取整个Storage
     */
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear(key, module_name) {
        let val = this.getStorage()
        if (module_name) {
            delete val[module_name][key]
        } else {
            delete val[key]
        } 
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}