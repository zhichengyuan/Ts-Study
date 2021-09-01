import React from 'react'
import { NavLink, Route } from 'react-router-dom'   
import Home from './Home'
import AddMovie from './movie/AddMovie'
import EditMovie from './movie/EditMovie'
import MovieList from './movie/MovieList'

import { Layout,Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const _Layout:React.FC = function () {
    return (
        <div className="container">
            <header style={{display:'none'}}>
                <ul>
                    <li>
                        <NavLink to="/">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movie">电影列表</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movie/add">添加电影</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movie/edit/sdsd">修改电影</NavLink>
                    </li>
                </ul>
                <div>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/movie" component={MovieList} exact></Route>
                    <Route path="/movie/add" component={AddMovie} exact></Route>
                    <Route path="/movie/edit/:id" component={EditMovie} exact></Route>
                </div>
            </header>
            <Layout>
                <Header>
                    <NavLink to='/'>电影管理系统</NavLink>
                </Header>
                <Layout>
                    <Sider>
                        <Menu
                        mode="inline"
                        theme="dark"
                        >
                            <Menu.Item key="1" >
                                <NavLink to="/">首页</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" >
                                <NavLink to="/movie">电影列表</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3" >
                                <NavLink to="/movie/add">添加电影‘</NavLink>
                            </Menu.Item>
                          
                        </Menu>
                    </Sider>
                    <Content>
                        <div className="main">
                            <Route path="/" component={Home} exact></Route>
                            <Route path="/movie" component={MovieList} exact></Route>
                            <Route path="/movie/add" component={AddMovie} exact></Route>
                            <Route path="/movie/edit/:id" component={EditMovie} exact></Route>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default _Layout