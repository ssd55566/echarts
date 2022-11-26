(function () {
    var myChart = echarts.init(document.querySelector('.wirter-1'));
    const value = 60.35
    var option = {
        backgroundColor: '#061530',
        series: [
            {
                type: 'liquidFill',
                radius: '90%',
                data: [
                    value / 100,
                    {
                        value: (value - 10) / 100,
                        direction: 'left'
                    }
                ],
                backgroundStyle: {
                    borderWidth: 1,
                    color: 'transparent'
                },
                label: {
                    normal: {
                        color: '#27e5f1',
                        insideColor: '#f7e8c1',
                        left: '50%',
                        top: '40%',
                        textAlign: 'center',
                        textStyle: {
                            fontSize: 90,
                            fontWeight: '600',
                            color: '#fff',
                            textAlign: 'center',
                            textBorderColor: 'rgba(0, 0, 0, 0)',
                            textShadowColor: '#000',
                            textShadowBlur: '0',
                            textShadowOffsetX: 0,
                            textShadowOffsetY: 1
                        }
                    }
                },
                color: [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: ['#324791'] // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: ['#449090'] // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }],
                outline: {
                    show: true,
                    borderDistance: 5,
                    itemStyle: {
                        borderWidth: 0,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#0b2355' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#195b9d' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }
            }
        ]
    };
    myChart.setOption(option)
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });

    //5. 页面加载完成 就让图标自动重置大小
    window.addEventListener("load", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();