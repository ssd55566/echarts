(function () {
    var myChart = echarts.init(document.querySelector('.wirter-1'));
    const value = 0.78
    var option = {
        // backgroundColor: '#0F224C', //背景色
        series: [
            {
                type: 'liquidFill', //水位图
                radius: '80%', //显示比例
                center: ['50%', '50%'], //中心点
                amplitude: 10, //水波振幅
                data: [0.5, .5, .5], // data个数代表波浪数
                color: [
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#446bf5',
                            },
                            {
                                offset: 1,
                                color: '#2ca3e2',
                            },
                        ],
                        globalCoord: false,
                    },
                ], //波浪颜色
                backgroundStyle: {
                    borderWidth: 1, //外边框
                    // borderColor: '#23cc72', //边框颜色
                    color: 'RGBA(51, 66, 127, 0.7)', //边框内部填充部分颜色
                },
                label: {
                    //标签设置
                    position: ['50%', '45%'],
                    formatter: '50%', //显示文本,
                    textStyle: {
                        fontSize: '52px', //文本字号,

                        color: '#fff',
                    },
                },
                outline: {
                    // show: false
                    borderDistance: 0,
                    itemStyle: {
                        borderWidth: 2,
                        // borderColor: '#112165',
                    },
                },
            },
        ],
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