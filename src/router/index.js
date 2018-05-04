import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from "@/store"
/*import alert from "@/components/base/alert"*/
// 首页头部导航栏

 // username
 // user_money
 // ag_money
 // ds_money

const home = (resolve) => {
  import('@/components/home').then((module) => {
    resolve(module)
  })
}

// 首页注册
const register = (resolve) => {
  import('@/components/register').then((module) => {
    resolve(module)
  })
}

// 首页登录
const Login = (resolve) => {
  import('@/components/Login').then((module) => {
    resolve(module)
  })
}

// 首页footer部分
// const Footer = (resolve) => {
//   import('@/components/Footer').then((module) => {
//     resolve(module)
//   })
// }

// 彩票模块
const lottery = (resolve) => {
  import('@/components/lottery/lottery').then((module) => {
    resolve(module)
  })
}

// 用户中心>投注记录>购彩查询
// const Buyrecord = (resolve) => {
//   import('@/components/userinfo/buyrecord').then((module) => {
//     resolve(module)
//   })
// }

// 用户中心>投注记录>追号查询
// const track = (resolve) => {
//   import('@/components/userinfo/track').then((module) => {
//     resolve(module)
//   })
// }

// 用户中心>报表管理>充值记录
const sportsgame = (resolve) => {
  import('@/components/userinfo/sportsgame').then((module) => {
    resolve(module)
  })
}

// 充值
const recharge = (resolve) => {
  import('@/components/userinfo/recharge').then((module) => {
    resolve(module)
  })
}

// 提现
const withdrawal = (resolve) => {
  import('@/components/userinfo/withdrawal').then((module) => {
    resolve(module)
  })
}

// 用户中心>报表管理>帐变报表
const videogame = (resolve) => {
  import('@/components/userinfo/videogame').then((module) => {
    resolve(module)
  })
}

// 用户中心>报表管理>个人报表
const lotterygame = (resolve) => {
  import('@/components/userinfo/lotterygame').then((module) => {
    resolve(module)
  })
}

// 用户中心>报表管理>团队报表
const depositrecord = (resolve) => {
  import('@/components/userinfo/depositrecord').then((module) => {
    resolve(module)
  })
}

// 用户中心>报表管理>优惠活动详情
const conversionchange = (resolve) => {
  import('@/components/userinfo/conversionchange').then((module) => {
    resolve(module)
  })
}

// 用户中心>账户管理>个人总览
const UserInfo = (resolve) => {
  import('@/components/userinfo/UserInfo').then((module) => {
    resolve(module)
  })
}

// 用户中心>账户管理>密码管理
const PasswordManagement = (resolve) => {
  import('@/components/userinfo/PasswordManagement').then((module) => {
    resolve(module)
  })
}

// 用户中心>账户管理>银行卡管理
// const CardsList = (resolve) => {
//   import('@/components/userinfo/CardsList').then((module) => {
//     resolve(module)
//   })
// }

// 用户中心>账户管理>用户资料
// const UserData = (resolve) => {
//   import('@/components/userinfo/UserData').then((module) => {
//     resolve(module)
//   })
// }

// 用户中心>账户管理>彩种信息
// const GameInfoType = (resolve) => {
//   import('@/components/userinfo/GameInfoType').then((module) => {
//     resolve(module)
//   })
// }

// 用户中心>账户管理>彩种限额
// const GameLimits = (resolve) => {
//   import('@/components/userinfo/GameLimits').then((module) => {
//     resolve(module)
//   })
// }

// 用户中心>代理管理>团队总览
// const teamRecordView = (resolve) => {
//   import('@/components/userinfo/teamRecordView').then((module) => {
//     resolve(module)
//   })
// }

// 用户中心>代理管理>用户列表
// const UserList = (resolve) => {
//   import('@/components/userinfo/UserList').then((module) => {
//     resolve(module)
//   })
// }

// 用户中心>代理管理>注册管理
// const RegisterManage = (resolve) => {
//   import('@/components/userinfo/RegisterManage').then((module) => {
//     resolve(module)
//   })
// }

// 用户中心>额度管理>转入
const moneymanagemen = (resolve) => {
  import('@/components/userinfo/moneymanagemen').then((module) => {
    resolve(module)
  })
}

// 用户中心>短信公告>站内短信
const Messge = (resolve) => {
  import('@/components/userinfo/Messge').then((module) => {
    resolve(module)
  })
}

// 用户中心>短信公告>网站公告
const Notice = (resolve) => {
  import('@/components/userinfo/Notice').then((module) => {
    resolve(module)
  })
}
//优惠中心
const Activity = (resolve) => {
  import('@/components/Activity').then((module) => {
    resolve(module)
  })
}
//手机下注
const mobile = (resolve) => {
  import('@/components/mobile').then((module) => {
    resolve(module)
  })
}
//视讯直播
const live = (resolve) => {
  import('@/components/live/live1').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)
Vue.use(VueAwesomeSwiper)

const USERCENTER = (resolve) => {
  import('@/components/UserCenter').then((module) => {
    resolve(module)
  })
}
const route =new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      default: home,
      components: {
        default: home
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path:'/live',
      name:'live1',
      component:live
    },
    {
      path:'/mobile',
      name:'mobile',
      component:mobile
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/lottery',
      name: 'lottery',
      component: lottery
    },
    {
      path: '/UserCenter',
      redirect: '/recharge',
      name: 'UserCenter',
      component: USERCENTER,
      children: [
        {
          path: '/sportsgame',
          component: sportsgame
        },
        {
          path: '/videogame',
          component: videogame
        },
        {
          path: '/recharge',
          component: recharge
        },
        {
          path: '/withdrawal',
          name: 'withdrawal',
          component: withdrawal
        },
        {
          path: '/lotterygame',
          component: lotterygame
        },
        {
          path: '/depositrecord',
          component: depositrecord
        },
        {
          path: '/conversionchange',
          component: conversionchange
        },
        {
          path: '/UserInfo',
          component: UserInfo
        },
        {
          path: '/PasswordManagement',
          component: PasswordManagement
        },
        {
          path: '/moneymanagemen',
          component: moneymanagemen
        },
        // {
        //   path:'/UserData',
        //   component:UserData
        // },
        // {
        //   path:'/GameInfoType',
        //   component:GameInfoType
        // },
        //  {
        //   path:'/GameLimits',
        //   component:GameLimits
        // },
        {
          path: '/Notice',
          component: Notice
        },
        {
          path: '/Messge',
          component: Messge
        }
      ]
    }
  ]
});
route.beforeEach((to,from,next)=>{
  let exclude=["register","Login"];
  if(!store.state.easysecret&&(exclude.indexOf(to.name)===-1)){//除登录和注册页面其他页面未登录跳到登录页
    route.push("login");
  }else if(store.state.easysecret&&(exclude.indexOf(to.name)!==-1)){//登录的状态不能访问登录页和注册页
    route.push("/");
  }else{
    next();
  }
})
export default  route;
