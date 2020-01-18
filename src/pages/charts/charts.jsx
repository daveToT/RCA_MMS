import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: [5, 20, 36, 10, 10, 20],
            stores: [6, 10, 25, 10, 20, 15]
        }
    }

    getOptions = (sales, stores) => {
        return {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量', '库存']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: sales
            }, {
                name: '库存',
                type: 'line',
                data: stores
            }]
        }
    }

    update = () => {
        this.setState(state => (
            {
                sales: state.sales.map(sale => sale + 1),
                stores: state.stores.reduce((pre, store) => {
                    pre.push(store - 1)
                    return pre
                }, [])
            }
        ))
    }

    getOptionsT = () => {
        return {
            title: {
                text: '南丁格尔玫瑰图',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                left: 'center',
                top: 'bottom',
                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '半径模式',
                    type: 'pie',
                    radius: [20, 110],
                    center: ['25%', '50%'],
                    roseType: 'radius',
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: [
                        {value: 10, name: 'rose1'},
                        {value: 5, name: 'rose2'},
                        {value: 15, name: 'rose3'},
                        {value: 25, name: 'rose4'},
                        {value: 20, name: 'rose5'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                },
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['75%', '50%'],
                    roseType: 'area',
                    data: [
                        {value: 10, name: 'rose1'},
                        {value: 5, name: 'rose2'},
                        {value: 15, name: 'rose3'},
                        {value: 25, name: 'rose4'},
                        {value: 20, name: 'rose5'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                }
            ]
        }
    }

    render() {
        const { sales, stores } = this.state
        return (
            <div>
                <button onClick={this.update}>更新数据</button>
                <div>
                    < ReactEcharts option={this.getOptions(sales, stores)} />
                    < ReactEcharts option={this.getOptionsT()} />
                </div>
            </div>
        );
    }
}

export default Charts;