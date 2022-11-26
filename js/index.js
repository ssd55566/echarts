// 监控


(function () {
    var chose = document.getElementsByClassName('choseTab')
    var show = document.getElementsByClassName('showTab')


    for (var i = 0; i < chose.length; i++) {
        chose[i].setAttribute('index', i)
        chose[i].onclick = function () {
            var index_ = this.getAttribute('index')
            for (var j = 0; j < chose.length; j++) {
                chose[j].classList.remove('active')
                chose[index_].classList.add('active')
            }
            for (var k = 0; k < show.length; k++) {
                show[k].style.display = 'none'
                show[index_].style.display = 'block'
            }
        }
    }
});
// 点位
(function () {
    var myChart = echarts.init(document.querySelector('.pie'));
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     top: 'bottom'
        // },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         mark: { show: true },
        //         dataView: { show: true, readOnly: false },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: ["10%", "60%"],
                // 图表中心位置 left 50%  top 50%  距离图表DOM容器
                center: ['50%', '50%'],
                roseType: 'area',

                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '河南' }
                ]
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


// 全国 用户统计
(function () {
    var item = {
        name: '',
        value: '1200',
        itemStyle: {
            color: "#254065"
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }
    }
    var myChart = echarts.init(document.querySelector('.columnar-1'));
    var option = {
        tooltip: {
            trigger: 'item',
        },

        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ],
            global: false
        },
        grid: {
            top: "5%",
            left: '4%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,
            // 宫格的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: true,
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "#71f2fb"
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }

        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',

                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
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


// 订单
(function () {
    var tab = document.getElementsByClassName('right')[0].children;
    var orderData = document.getElementsByClassName('orderData');
    var index_ = 0;

    for (var i = 0; i < tab.length; i++) {
        tab[i].setAttribute('index', i)
        tab[i].onclick = function () {
            //因为接下来定时器中需要index_++  所有我们-1
            // 否则 点击哪一个 切换到的是下一个

            index_ = this.getAttribute('index');
            for (var k = 0; k < tab.length; k++) {
                tab[k].classList.remove('active');
                tab[index_].classList.add('active');
            }

            for (var j = 0; j < orderData.length; j++) {
                orderData[j].classList.add('orderDataHidden');
                orderData[index_].classList.remove('orderDataHidden');
            }
        }
    }

    var timer = null
    function auto() {
        timer = setInterval(function () {
            index_++
            if (index_ >= tab.length) {
                index_ = 0
            }
            tab[index_].click()
        }, 1500)
    }
    auto();
})();



// 销售额

(function () {
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var myChart = echarts.init(document.querySelector('.chart-1'));

    var option = {

        tooltip: {
            trigger: 'axis',
            //直线指示器
            axisPointer: {
                type: 'line'
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        legend: {
            data: ['预期销售额', '实际销售额'],
            right: '10%',
            textStyle: {
                color: "#4c9bfd"
            }
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            //显示边框
            show: true,
            borderColor: '#012f4a'// 边框颜色
            // borderColor: 'red'// 边框颜色
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [
            {
                name: '预期销售额',
                data: data.year[0],
                type: 'line',
                stack: 'Total',
                smooth: true

            },
            {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                stack: 'Total',
                smooth: true
            }
        ],
    };
    myChart.setOption(option);
    //点击切换 年 季度 月 日
    var timer = document.getElementsByClassName('timer');

    for (var i = 0; i < timer.length; i++) {
        timer[i].setAttribute('index', i);
        timer[i].onclick = function () {
            index_ = this.getAttribute('index');
            for (var j = 0; j < timer.length; j++) {
                timer[j].classList.remove('active');
                timer[index_].classList.add('active');
            }
            // 获取自定义属性携带的时间
            var time = this.getAttribute('data-time');

            // 修改图表1的数据
            option.series[0].data = data[time][0];
            // 修改图表2的数据
            option.series[1].data = data[time][1];

            //重新调用option
            myChart.setOption(option);

        }
    }
    function auto() {
        var index_ = 0
        setInterval(function () {
            index_++
            if (index_ >= timer.length) {
                index_ = 0
            }
            timer[index_].click()
        }, 3000)
    }
    auto();
    // 悬停

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







(function () {

    var myChart = echarts.init(document.querySelector('.channel-1'));
    var dataBJ = [[55, 9, 56, 0.46, 18, 6, 1]];
    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };
    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ["60%", "10%"]
        },
        radar: {
            indicator: [
                { name: "机场", max: 100 },
                { name: "商场", max: 100 },
                { name: "火车站", max: 100 },
                { name: "汽车站", max: 100 },
                { name: "地铁", max: 100 }
            ],
            // 修改雷达图的大小
            radius: "65%",
            shape: "circle",
            // 分割的圆圈个数
            splitNumber: 4,
            name: {
                // 修饰雷达图文字的颜色
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的线修改为白色半透明
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [
            {
                name: "北京",
                type: "radar",
                // 填充区域的线条颜色
                lineStyle: {
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [[90, 19, 56, 11, 34]],
                // 设置图形标记 （拐点）
                symbol: "circle",
                // 这个是设置小圆点大小
                symbolSize: 5,
                // 设置小圆点颜色
                itemStyle: {
                    color: "#fff"
                },
                // 让小圆点显示数据
                label: {
                    show: true,
                    fontSize: 10
                },
                // 修饰我们区域填充的背景颜色
                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
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
