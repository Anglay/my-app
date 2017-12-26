import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import "./style.less"

import Home from "../home"

const { Header, Sider, Content } = Layout;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout className="main-container">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}>
                    <div className="logo" />
                </Sider>
                <Layout>
                    <Header className="layout-header">
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle.bind(this)}
                        />
                    </Header>
                    <Content className="content-container">
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Main;
