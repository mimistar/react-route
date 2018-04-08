import React, { Component } from 'react';
import echart from 'echarts/lib/echarts'
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/line';
import  'echarts/lib/chart/pie';
import  'echarts/lib/chart/radar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './cansve.css'
export default  class cansve extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){
        let myChart = echart.init(document.getElementById('main'));
        let myChart2 = echart.init(document.getElementById('main2'));
        let myChart3 = echart.init(document.getElementById('main3'));
        let myChart4 = echart.init(document.getElementById('main4'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts bar' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        myChart2.setOption({
            title: { text: 'ECharts line' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        myChart3.setOption({
            title: { text: 'ECharts pie' },
            tooltip: {},
            xAxis: {show:false},
            yAxis: {show:false},
            series: [{
                name: '销量',
                type: 'pie',
                data: [{name:'衬衫',value:'5'},{name:'羊毛衫',value:'20'},{name:'雪纺衫',value:'36'},
                    {name:'裤子',value:'10'},{name:'高跟鞋',value:'10'},{name:'袜子',value:'20'}]
            }]
        });
        myChart4.setOption({
            title: {text: 'ECharts radar'},
            tooltip: {},
            xAxis: {show: false},
            yAxis: {show: false},
            radar: {
                name: {show: true,},
                indicator: [
                    {name:'攻击力',max:600},
                    {name:'物理防御',max:500},
                    {name:'生命值',max:5000},
                    {name:'魔法值',max:5000},
                    {name:'魔法防御',max:400},
                    {name:'移动速度',max:2.5},
                ]
            },
            series: [{
                name: '英雄',
                type: 'radar',
                data: [
                    {name:'刺客',value:[550,200,2500,500,150,2.1]},
                    {name:'法师',value:[100,250,2600,4500,300,1.5]},
                    {name:'术士',value:[230,400,3000,4000,320,1.6]},
                    {name:'肉盾',value:[300,500,5000,600,200,1.4]},
                    {name:'射手',value:[600,150,2000,1000,300,1.8]},
                    {name:'辅助',value:[150,230,2500,2000,300,1.9]}
                    ],
                // itemStyle: {
                //     normal: {
                //         color: '#F9713C'
                //     }
                // },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            }]
        });
    }
    render() {
        return (
            <div className={'cansve-box'}>
                <div id="main" className='barCanSve'></div>
                <div id="main2" className='barCanSve'></div>
                <div id="main3" className='barCanSve'></div>
                <div id="main4" className='barCanSve'></div>
            </div>
        )
    }
}