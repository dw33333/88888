// 用户名
let username = '';
try {
  if (localStorage.getItem('username')) {
    username = localStorage.getItem('username');
  }
} catch (e) {
}

// 用户余额
let money = 0.00
try {
  if (localStorage.getItem('money')) {
    // alert(localStorage.getItem('usermoney'))
    money = localStorage.getItem('money')
  }
} catch (e) {
}

// AG余额
let agmoney = 0.00
try {
  if (localStorage.getItem('agmoney')) {
    agmoney = JSON.parse(localStorage.getItem('agmoney'))
  }
} catch (e) {
}

// DS余额
let dsmoney = 0.00
try {
  if (localStorage.getItem('dsmoney')) {
    dsmoney = JSON.parse(localStorage.getItem('dsmoney'))
  }
} catch (e) {
}

// 代理ID
let agentId = 0.00
try {
  if (localStorage.getItem('agentId')) {
    agentId = JSON.parse(localStorage.getItem('agentId'))
  }
} catch (e) {
}

// BBIN余额
let bbinmoney = 0.00
try {
  if (localStorage.getItem('bbinmoney')) {
    bbinmoney = JSON.parse(localStorage.getItem('bbinmoney'))
  }
} catch (e) {
}

// MG余额
let mgmoney = 0.00
try {
  if (localStorage.getItem('mgmoney')) {
    mgmoney = JSON.parse(localStorage.getItem('mgmoney'))
  }
} catch (e) {
}

// 用户用户token
let codeToken = ''
try {
  if (localStorage.getItem('codeToken')) {
    codeToken = localStorage.getItem('codeToken')
  }
} catch (e) {
}

// 用户真实姓名
let userRealName = ''
try {
  if (localStorage.getItem('userRealName')) {
    userRealName = JSON.parse(localStorage.getItem('userRealName'))
  }
} catch (e) {
}
let easysecret = '';
try {
  if (localStorage.getItem('easysecret')) {
    easysecret = localStorage.getItem('easysecret');
  }
} catch (e) {
}
let rootbox = {
  open: false
}
let sitesInfos = {};
try {
  if (localStorage.getItem('sitesInfos')) {
    sitesInfos = JSON.parse(localStorage.getItem('sitesInfos'));
  }
} catch (e) {
}
let headerArry = {};
try {
  if (localStorage.getItem('headerArry')) {
    headerArry = JSON.parse(localStorage.getItem('headerArry'));
  }
} catch (e) {
}
let userinfo = {};
try {
  if (localStorage.getItem('userinfo')) {
    userinfo = JSON.parse(localStorage.getItem('userinfo'));
  } else {
    userinfo = {};
  }
} catch (e) {
}
let agent_id = -1;//代理id 值-1 是未被写入过 需要传代理id参数的接口判断
try {
  if (localStorage.getItem('agent_id')) {
    agent_id = JSON.parse(localStorage.getItem('agent_id'));
  } else {
    agent_id = -1;
  }
} catch (e) {

}
let loading = false;

const state = {
  loading,
  easysecret,
  rootbox,
  userinfo,
  sitesInfos,
  agent_id,
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
  showDlleft:true,
  showDlright:true,
  showBottom:true
}
export default state
