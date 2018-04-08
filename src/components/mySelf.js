import React, { Component } from 'react';
import './mySelf.css'
export default  class mySelf extends Component{
        render() {
            return (
                <div className={'mySelf-box'}>
                    <h5></h5>
                    <div className={'mySelf-content'}>
                        <div>
                            <h1>摘要</h1>
                            <p>基于create-react-app的基础上搭建的一个简易后台管理系统，ui框架bootstrap</p>
                        </div><div>
                            <h1>对比知识点</h1>
                        <p>
                            1、对比之前的react-router，这次4.0版本的路由使用熟悉<br/>
                            2、echarts 在react中支持的API  要比react-native多很多,CSS支持属性也比react-native多
                        </p>
                        </div>
                    </div>
                </div>
            )
        }
}