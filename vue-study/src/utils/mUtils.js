/**
 * 存储localStorage
 */
export const setStore = (name,contenet) => {
  if (!name) return;
  if (typeof contenet !=='string'){
      contenet = JSON.stringify(contenet);
  }
  window.localStorage.setItem(name,contenet);
}

/**
 * 获取localStorage
 */

 export const getStore = name => {
   if (!name) return;
   return window.localStorage.getItem(name);
 }

 /**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  return window.localStorage.removeItem(name);
}