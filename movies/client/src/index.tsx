import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
// import { MovieService } from './services/MovieService';


// store.dispatch(MovieAction.fetchMoive({
//   page:2
// }))

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


// const m = {
//     name:'测试1',
//   timeLong:12,
//   types:['悲剧'],
//   areas:['香港'],
//   isHot:true,
//   isClassic:true,
//   isComing:false
// }

// redux
// 大型项目中使用
// 不是所有的状态数据都需要放到redux中
// action：平面对象，plain object,它需要一个action来触发
// store：储存数据的仓库
// 副作用：redux-thunk、redux-saga、dva、umijs 


// 安装ui库
// yarn add antd
