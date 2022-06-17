/* import fetch from '@config/http/index.js';
import config from '@config/http/api.js';
import store from '@/store/index.js';
import router from '@config/router';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
var apiUrl = process.env.VUE_APP_BASEURL; */
export default {
  userInfo:{},
  checkProp(tableArr, propArr, str) {
    /* if (tableArr.length == 0 && propArr.indexOf(str) < 0) {
      return true
    } else if (tableArr.length == 0 && propArr.indexOf(str) > -1) {
      return false
    }
    var obj = tableArr[0];
    if (Object.keys(obj).indexOf(str) < 0) {
      return false
    } else {
      return true
    } */
  },
  // 存储用户信息
  setUserInfo(obj) {
    /* this.userInfo = obj; */
  },
  // 是否有权限
  hasPermission(target) {
    return false;/* TODO */
    /* if(!target){
      return false
    }
    let hasPermission = false;
    let permission = store.state.permission;
    let idArr = target.split(',')
    if(idArr.length > 1){ //多个id
      let permissionArr = new Array();
      for(var k in idArr){
        for(var i in permission){
          if(permission[i].id == idArr[k]){
            hasPermission  = !permission[i].checked
            permissionArr.push(hasPermission)
            // break;
          }else{
            for(var c in permission[i].children ){
              if( permission[i].children[c].id == idArr[k]){
                hasPermission =  !permission[i].children[c].checked
                permissionArr.push(hasPermission)
                // break;
              }else{
                let newChild = permission[i].children[c].children;
                for(var n in newChild ){
                  if( newChild[n].id == idArr[k]){
                      hasPermission =  !newChild[n].checked
                      permissionArr.push(hasPermission)
                  }
                }
              }
            }
          }
        }
      }

      if(permissionArr.indexOf(false) > -1){
        return false
      }else{
        return true
      }
    }else{ //单个id
      for(var i in permission){
        if(permission[i].id == target){
          hasPermission  = !permission[i].checked
          break;
        }else{
          for(var c in permission[i].children ){
            if( permission[i].children[c].id == target){
              hasPermission =  !permission[i].children[c].checked
              break;
            }else{
              let newChild = permission[i].children[c].children;
              for(var n in newChild ){
                 if( newChild[n].id == target){
                    hasPermission =  !newChild[n].checked
                 }
              }
            }
          }
        }
      }  
      return hasPermission;
    } */
  },
  getDateNoTime(date,type) {
      /* if(date!= null){
        var date = new Date(date);
        var YY = date.getFullYear();
        var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) ;
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) ;
        var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
        if(type == 1){
          return YY +'-'+ MM +'-'+ DD;
        }
        if(type == 2){
          return YY +'-'+  MM;
        }
        if(type == 3){
          return YY +'-'+ MM +'-'+ DD + ' ' + h +':'+m;
        }
        if(type == 4){
          return YY +'/'+ MM +'/'+ DD;
        }
        if(type == 5){
          return YY;
        }
        if(type == 6){
          return YY +'.'+ MM +'.'+ DD;
        }
        if(type == 7){
          return YY +'-'+ MM +'-'+ DD + ' ' + h + ':' + m + ':' + s;
        }
      } */
  },
  // 设置cookie
  setCookie(name,value,expire){
    /* var date = new Date();
    date.setSeconds(date.getSeconds()+expire)
    document.cookie = name+ "="+escape(value)+"; expires="+date+toString() */
  },
  //转为时间戳
  getDateStamp(date){
    /* let str = date.replace(/-/g,'/');
    return new Date(str).getTime(); */
  },
  /* js中国标准时间转化为年月日，时间戳 */
  dateToMs(date) {
    /* let result = new Date(date).getTime();
    return result; */
  },
  /* 金额转换 */
  changeNum(num){
    /* num = num.toString();
    var decimals = '';
    // 判断是否有小数
    num.indexOf('.') > -1 ? decimals = num.split('.')[1] : decimals
    let len = num.length
    if (len <= 3) {
        return num
    } else {
        let temp = ''
        let remainder = len % 3
        decimals ? temp = '.' + decimals : temp
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp
        } else { // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp
        }
    } */

  },
  // 动态表格
  getDynamicProperties(tag){
    /* let obj = {
      "requestId": "string",
      "tag": tag,
      "timestamp": 0,
      "apiVersion": "string"
    }
    return fetch.postLanguage(config.getDynamicProperties,obj).then((res)=>{
      if (res.code == 0) {
        // console.log("动态表格返回RES",res)
        return res;
      }
    }) */
  },
  //刷新token
  refreshTokenFunc(){
    /* console.log("刷新token")
    fetch.postLanguage(config.refreshToken,{}).then((res)=>{
      if (res.code == 0) {
        console.log("刷新token",res);
        sessionStorage.setItem('access_token',res.data.access_token);
        sessionStorage.setItem('refresh_token',res.data.refresh_token);
        var obj = {
          refreshTime: new Date().getTime()+ Number(res.data.expires_in) *1000,
          refresh_token:res.data.refresh_token
        }
        localStorage.setItem('refreshObj',JSON.stringify(obj))
        store.commit('changeToken',res.data.access_token)
      }
    }) */
  },
  /**
 * 导出Excel
 * @param {*请求地址} url
 * @param {*请求参数} para
 * get
 */
  downloadExcel(url, para, isTemplate){
        /* axios
          .get(apiUrl + url, {
            responseType: "arraybuffer",
            params: para,
            headers:{ language: 'en', timezone: 'Asia/Shanghai', token: store.state.apiToken ,Authorization: 'Bearer '+ store.state.apiToken}
          })
          .then(res => {
            if (!res) return;
            if (
              !res.headers["content-type"] &&
              !res.headers["content-type"].indexOf("=") > -1
            ) {
              return;
            }
            console.log(res)
            let filename = res.headers["content-disposition"].split("=")[1];
            console.log(filename)
            let blob = new Blob([res.data], {
              type: "application/octet-stream"
            });
            if ("msSaveOrOpenBlob" in navigator) {
              window.navigator.msSaveOrOpenBlob(blob, filename);
            } else {
              window.URL.revokeObjectURL(blobURL);
              let blobURL = window.URL.createObjectURL(blob);
              let link = document.createElement("a");
              link.style.display = "none";
              link.href = blobURL;
              link.setAttribute("download", decodeURI(filename));
              document.body.appendChild(link);
              link.click();
              window.URL.revokeObjectURL(blobURL);
            }
          }); */
  },

   /**
     * get方式导出文件
     * @param {*请求地址} url
     * @param {*请求参数} para
     * get
     */
    downloadFilesByGet(url, para, isTemplate){
      /* axios.get(apiUrl + url, { responseType: "arraybuffer", params: para , headers:{ language: 'en', timezone: 'Asia/Shanghai', token: store.state.apiToken ,Authorization: 'Bearer '+ store.state.apiToken}})
        .then(res => {
            if (!res) return;
            if ( !res.headers["content-type"] && !res.headers["content-type"].indexOf("=") > -1 ) {
                return;
            }
            console.log(res)
            //content-disposition
            // let filename = res.headers["content-type"].split("=")[1]+".xlsx";
            let filename = res.headers["content-disposition"].split("=")[1];
            // let filename = "Download.csv";
            let blob = new Blob([res.data], {
              type: "application/octet-stream"
            });
            if ("msSaveOrOpenBlob" in navigator) {
              window.navigator.msSaveOrOpenBlob(blob, filename);
            } else {
              window.URL.revokeObjectURL(blobURL);
              let blobURL = window.URL.createObjectURL(blob);
              let link = document.createElement("a");
              link.style.display = "none";
              link.href = blobURL;
              link.setAttribute("download", decodeURI(filename));
              console.log("解析文件名", decodeURI(filename));
              document.body.appendChild(link);
              link.click();
              window.URL.revokeObjectURL(blobURL);
            }
          }); */
      },
      
      /**
     * Post方式导出文件
     * @param {*请求地址} url
     * @param {*请求参数} params
     *
     */
    downloadFilesByPost(url, params, name,suffix,loadingFlag){
        /* params.requestId = uuidv4()
        if(url == 'pmms-user-login-bff/Client/refreshToken'){
            var config = {
              headers: { language: 'en', timezone: 'Asia/Shanghai', refreshToken: JSON.parse(localStorage.getItem('refreshObj')).refresh_token, },
            };
          }else{
              var config = {
                headers: { language: 'en', timezone: 'Asia/Shanghai', token: store.state.apiToken,Authorization: 'Bearer '+ store.state.apiToken },
              };
            
          }
        axios.post(apiUrl+url, params, config)
        .then(res=>{
            const link = document.createElement('a');
            let blob = new Blob([res.data],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
            link.style.display = 'none';
            link.href = URL.createObjectURL(blob);
            //后台返回的文件名
            let fileName = res.headers["content-disposition"].split(";")[1].split("filename=")[1].split('.')[0].replace(/\"/g,"");
            suffix='.'+res.headers["content-disposition"].split(";")[1].split("filename=")[1].split('.')[1].replace(/\"/g,"");
            link.setAttribute('download', fileName+suffix);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            if(loadingFlag){
               store.state.loadingFlag = false;
            }
        }); */
        
    },
}