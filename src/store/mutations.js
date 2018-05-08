const mutations = {
  changeUserName (state,data) {
      state.username = data
    try {
      sessionStorage.setItem('username',data)
    } catch (e) {}
  },

  changeUserMoney (state,data) {
      state.money = data
    try {
      sessionStorage.setItem('money',data)
    } catch (e) {}
  },

  changeAgMoney (state,data) {
      state.agmoney = data
    try {
      sessionStorage.setItem('agmoney',data)
    } catch (e) {}
  },

  changeDsMoney (state,data) {
      state.dsmoney = data
    try {
      sessionStorage.setItem('dsmoney',data)
    } catch (e) {}
  },

  changeAgentId (state,data) {
      state.agentId = data
    try {
      sessionStorage.setItem('agentId',data)
    } catch (e) {}
  },

  // true登录  false未登录
  // userIsLogin (state,data) {
  //     state.isLogin = data
  //   try {
  //     sessionStorage.setItem('isLogin',data)
  //   } catch (e) {}
  // },

  getUserToken (state,data) {
      state.codeToken = data
    try {
      // alert('23222'+data)
      sessionStorage.setItem('codeToken',data)
    } catch (e) {}
  },

   // 获取真实姓名
  getUserRealName (state,data) {
      state.userRealName = data
    try {
      sessionStorage.setItem('userRealName',data)
    } catch (e) {}
  },
  EASYSECRET (state,data) {
    state.easysecret = data;
    try {
      if(data)
        sessionStorage.setItem('easysecret',data);
      else
        sessionStorage.setItem('easysecret',"");
    } catch (e) {}
  },
  //BOOTBOX
  ROOTBOX(state,data){
    state.rootbox=data;
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
      sessionStorage.setItem('sitesInfos',JSON.stringify(data));
      else
      sessionStorage.setItem('sitesInfos',"");
    } catch (e) {}
  },
  getData(state,data){
    state.headerArry = data;
  },
  USERINFO(state,data){
    state.userinfo = data;
    try {
      if(data)
      sessionStorage.setItem('userinfo',JSON.stringify(data));
      else
      sessionStorage.setItem('userinfo',"");

    } catch (e) {}
  },
  AGENT_ID(state,data){
    state.agent_id = data;
    try {
      if(data)
        sessionStorage.setItem('agent_id',data);
      else
        sessionStorage.setItem('agent_id',0);
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
      sessionStorage.setItem('username','')
      sessionStorage.setItem('usermoney',0.00)
      sessionStorage.setItem('agmoney',0.00)
      sessionStorage.setItem('dsmoney',0.00)
      sessionStorage.setItem('agentId',0.00)
      sessionStorage.setItem('codeToken',false)
      sessionStorage.setItem('userRealName','')
    } catch (e) {}
  }
}

export default mutations
