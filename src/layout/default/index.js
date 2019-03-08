import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {Route, Switch } from "react-router-dom";
import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
import Home from '../../pages/home'
import store from '../../store'

export default class DefaultLayout extends Component{
    render(){
        return(
            <Provider store={store}>
                <Header />
                <Switch>
                    <Route path="/home" component={Home}></Route>
                </Switch>
                <Footer />
            </Provider>
        )
    }
}