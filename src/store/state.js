
// 用户名
let username='';
try {
	if(sessionStorage.getItem('username')){
		username=sessionStorage.getItem('username');
	}
} catch (e) {}

// 用户余额
let money=0.00
try {
	if(sessionStorage.getItem('money')){
		// alert(sessionStorage.getItem('usermoney'))
		money=sessionStorage.getItem('money')
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

// 用户用户token
let codeToken=''
try {
	if(sessionStorage.getItem('codeToken')){
		codeToken=sessionStorage.getItem('codeToken')
	}
} catch (e) {}

// 用户真实姓名
let userRealName=''
try {
	if(sessionStorage.getItem('userRealName')){
		userRealName=JSON.parse(sessionStorage.getItem('userRealName'))
	}
} catch (e) {}
let easysecret='';
try {
  if(sessionStorage.getItem('easysecret')){
    easysecret=sessionStorage.getItem('easysecret')
  }
} catch (e) {}
let rootbox={
  open:false
}
let headerArry='';
const state = {
  easysecret,
  rootbox,
  username, // 用户名
  money, // 用户余额
  agmoney, // AG余额
  dsmoney, // DS余额
  agentId,// 代理ID
  codeToken,// token
  userRealName,
  headerArry,
  bbinmoney: bbinmoney, // BBIN余额
  mgmoney: mgmoney, // MG余额
}
export default state
