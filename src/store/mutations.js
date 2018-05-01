const mutations = {
  changeUserName (state,data) {
      state.username = data
    try {
      sessionStorage.setItem('username',data)
    } catch (e) {}
  },

  changeUserMoney (state,data) {
      state.usermoney = data
    try {
      sessionStorage.setItem('usermoney',data)
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
      sessionStorage.setItem('easysecret',data);
    } catch (e) {}
  },
  //BOOTBOX
  ROOTBOX(state,data){
    state.rootbox=data;
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
