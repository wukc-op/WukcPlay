/**
 * @description  存贮封装
 * created by Maya 2022年06月12日
 */

 export default {
    // 存
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    },

    // 取
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },

    // 删除
    remove(key) {
        localStorage.removeItem(key)
    },

    // 全部清空
    clear() {
        localStorage.clear()
    },
}