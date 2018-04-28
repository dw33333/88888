
// 用户名
let username=''
try {
	if(sessionStorage.getItem('username')){
		username=sessionStorage.getItem('username');
	}
} catch (e) {}

// 用户余额
let usermoney=0.00
try {
	if(sessionStorage.getItem('usermoney')){
		// alert(sessionStorage.getItem('usermoney'))
		usermoney=sessionStorage.getItem('usermoney')
	}
} catch (e) {}

// AG余额
let agmoney=0.00
try {
	if(sessionStorage.getItem('agmoney')){
		agmoney=JSON.parse(sessionStorage.getItem('agmoney'))
	}
} catch (e) {}

// DS余额
let dsmoney=0.00
try {
	if(sessionStorage.getItem('dsmoney')){
		dsmoney=JSON.parse(sessionStorage.getItem('dsmoney'))
	}
} catch (e) {}

// 代理ID
let agentId=0.00
try {
	if(sessionStorage.getItem('agentId')){
		agentId=JSON.parse(sessionStorage.getItem('agentId'))
	}
} catch (e) {}

// BBIN余额
let bbinmoney=0.00
try {
	if(sessionStorage.getItem('bbinmoney')){
		bbinmoney=JSON.parse(sessionStorage.getItem('bbinmoney'))
	}
} catch (e) {}

// MG余额
let mgmoney=0.00
try {
	if(sessionStorage.getItem('mgmoney')){
		mgmoney=JSON.parse(sessionStorage.getItem('mgmoney'))
	}
} catch (e) {}

// 判断是否登录
let isLogin=''
try {
	if(sessionStorage.getItem('isLogin')){
		isLogin=JSON.parse(sessionStorage.getItem('isLogin'))
	}
} catch (e) {}

// 判断是否登录
let userRealName=''
try {
	if(sessionStorage.getItem('userRealName')){
		userRealName=JSON.parse(sessionStorage.getItem('userRealName'))
	}
} catch (e) {}

const state = {
  username, // 用户名
  usermoney, // 用户余额
  agmoney, // AG余额
  dsmoney, // DS余额
  agentId,// 代理ID
  isLogin,// 判断是否登录
  userRealName,
  
  bbinmoney: bbinmoney, // BBIN余额
  mgmoney: mgmoney, // MG余额
}
export default state
