const mutations = {
  changeUserName (state,data) {
      state.username = data
    try {
      localStorage.setItem('username',data)
    } catch (e) {}
  },

  changeUserMoney (state,data) {
      state.money = data
    try {
      localStorage.setItem('money',data)
    } catch (e) {}
  },

  changeAgMoney (state,data) {
      state.agmoney = data
    try {
      localStorage.setItem('agmoney',data)
    } catch (e) {}
  },

  changeDsMoney (state,data) {
      state.dsmoney = data
    try {
      localStorage.setItem('dsmoney',data)
    } catch (e) {}
  },

  changeAgentId (state,data) {
      state.agentId = data
    try {
      localStorage.setItem('agentId',data)
    } catch (e) {}
  },

  // true登录  false未登录
  // userIsLogin (state,data) {
  //     state.isLogin = data
  //   try {
  //     localStorage.setItem('isLogin',data)
  //   } catch (e) {}
  // },

  getUserToken (state,data) {
      state.codeToken = data
    try {
      // alert('23222'+data)
      localStorage.setItem('codeToken',data)
    } catch (e) {}
  },

   // 获取真实姓名
  getUserRealName (state,data) {
      state.userRealName = data
    try {
      localStorage.setItem('userRealName',data)
    } catch (e) {}
  },
  EASYSECRET (state,data) {
    state.easysecret = data;
    try {
      if(data)
        localStorage.setItem('easysecret',data);
      else
        localStorage.setItem('easysecret',"");
    } catch (e) {}
  },
  //BOOTBOX
  ROOTBOX(state,data){
    state.rootbox=data;
  },
  SHOWDLLEFT(state,data){
    state.showDlleft = data;
  },
  SHOWDLRIGHT(state,data){
    state.showDlright = data;
  },
  SHOWBOTTOM(state,data){
    state.showBottom = data;
  },
  //LOADING
  LOADING(state,data){
    state.loading=data;
  },
  //SITE_INFO
  SITE_INFO(state,data){
    state.sitesInfos = data;
    try {
      if(data)
      localStorage.setItem('sitesInfos',JSON.stringify(data));
      else
      localStorage.setItem('sitesInfos',"");
    } catch (e) {}
  },
  GETDATA(state,data){
    state.headerArry = data;
    try {
      if(data)
      localStorage.setItem('headerArry',JSON.stringify(data));
      else
      localStorage.setItem('headerArry',"");
    } catch (e) {}
  },
  USERINFO(state,data){
    state.userinfo = data;
    try {
      if(data)
      localStorage.setItem('userinfo',JSON.stringify(data));
      else
      localStorage.setItem('userinfo',"");

    } catch (e) {}
  },
  AGENT_ID(state,data){
    state.agent_id = data;
    try {
      if(data)
        localStorage.setItem('agent_id',data);
      else
        localStorage.setItem('agent_id',0);
    } catch (e) {}
  },
  userLoginOut (state,data) {
      state.username=''
      state.usermoney=0.00
      state.agmoney=0.00
      state.dsmoney=0.00
      state.agentId=0.00
      state.codeToken=false
      state.userRealName = ''
    try {
      localStorage.setItem('username','')
      localStorage.setItem('usermoney',0.00)
      localStorage.setItem('agmoney',0.00)
      localStorage.setItem('dsmoney',0.00)
      localStorage.setItem('agentId',0.00)
      localStorage.setItem('codeToken',false)
      localStorage.setItem('userRealName','')
    } catch (e) {}
  }
}

export default mutations
