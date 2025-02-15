<html>
<head>
    <!--meta标签用于描述HTML文档的元数据-->
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <title>首页</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/home.css"/>
    <link rel="stylesheet" type="text/css" href="css/Untitled.css"/>
    <!--jQuery(Bootstrap的JavaScript插件需要引入jQuery)-->
    <script src="js/jquery.min.js"></script>
    <!--包括所以已编译的插件-->
    <script src="js/bootstrap.min.js"></script>
</head>

<%--在jsp2.0中是默认启用EL表达式的，即isELIgnored默认值为false，若为true，则表示忽略对EL表达式进行计算--%>
<%@page language="java" contentType="text/html; UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<body>
    <div class="container hidden-xs">
        <!--第一行即顶行-->
        <div class="row header-top">
            <p class="col-xs-12 col-sm-6 col-md-6 col-lg-6">客服电话:010-594-78634</p>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-right">
                    <a class="hd-icon" href="#" target="_blank"><img src="images/home/weibo.png" alt="weibo"></a>
                    <a class="hd-icon" href="#" target="_blank"><img src="images/home/qq.png" alt="qq"></a>
                    <a class="hd-icon" href="#" target="_blank"><img src="images/home/weixin.png" alt="weixin"></a>
            </div>
        </div>
    </div>

    <!--第二行 导航栏-->
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#"><img src="images/home/logo.png" alt="logo" class="img-responsive"></a>
            </div>
            <button data-target="#open-nav" data-toggle="collapse" class="navbar-toggle btn-primary collapsed" aria-expanded="false">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div id="open-nav" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
                <ul class="nav navbar-nav navbar-right text-center list-inline">
                    <li><a href="home">首页</a></li>
                    <li><a href="job">职业</a></li>
                    <li><a href="">职业</a></li>
                    <li><a href="">关于</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!--轮播图-->
    <div id="myCarousel" class="carousel slide">
        <!--轮播指标-->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
        <!--轮播项目-->
        <div class="carousel-inner">
            <div class="item active">
                <img src="images/home/slide1.jpg" alt="First slide">
            </div>
            <div class="item">
                <img src="images/home/slide2.jpg" alt="Second slide">
            </div>
            <div class="item">
                <img src="images/home/slide3.jpg" alt="Third slide">
            </div>
            <div class="item">
                <img src="images/home/slide4.jpg" alt="Fourth slide">
            </div>
            <a data-slide="prev" href="#myCarousel" class="carousel-control left">
                <i class="icon-left"><img src="images/home/left.png"></i>
            </a>
            <a data-slide="prev" href="#myCarousel" class="carousel-control right">
                <i class="icon-right"><img src="images/home/right.png"></i>
            </a>
        </div>
    </div>

    <div class="main container">
        <!--介绍-->
        <div class="main-a row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="row text-center">
                    <ul class="list-unstyled">
                        <li class="col-xs-12 up-1"><img src="images/home/rocket.png"></li>
                        <li class="up-2 col-xs-12">高效</li>
                        <li class="up-3 col-xs-12">将三到七年的成长时间,缩短到一年到两年</li>
                    </ul>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="row text-center">
                    <ul class="list-unstyled">
                        <li class="col-xs-12 up-1"><img src="images/home/archive.png"></li>
                        <li class="up-2 col-xs-12">规范</li>
                        <li class="up-3 col-xs-12">标准的实战教程，不会走弯路</li>
                    </ul>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="row text-center">
                    <ul class="list-unstyled">
                        <li class="col-xs-12 up-1"><img src="images/home/contacts.png"></li>
                        <li class="up-2 col-xs-12">人脉</li>
                        <li class="up-3 col-xs-12">同班好友，同院学长，技术大师，入学就混入职脉圈，为以后铺平道路</li>
                    </ul>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 text-center">
                <p>
                    <img src="images/home/user.png" alt="user">${total}<br>
                    <span class="up-3">累计在线学习人数</span>
                </p>
                <p>
                    <img src="images/home/user.png" alt="user">${isWork}<br>
                    <span class="up-3">学员已经找到满意工作</span>
                </p>
            </div>
        </div>

        <!--如何学习-->
        <div class="main-b row">
            <h3 class="text-center main-tab">如何学习</h3>
            <ul class="list-unstyled text-center">
                <li class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <span class="up-1 text-center">1</span>
                    <p class="up-2">匹配你现在的个人情况寻找适合自己的岗位</p>
                    <span class="up-3"></span>
                </li>
                <li class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <span class="up-1 text-center">2</span>
                    <p class="up-2">了解职业前景薪金待遇，竞争压力等</p>
                    <span class="up-3"></span>
                </li>
                <li class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <span class="up-1 text-center">3</span>
                    <p class="up-2">掌握行业内顶级技能</p>
                    <span class="up-3"></span>
                </li>
                <li class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <span class="up-1 text-center">4</span>
                    <p class="up-2">查看职业目标任务</p>
                    <span class="up-3"></span>
                </li>
                <li class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <span class="up-1 text-center">5</span>
                    <p class="up-2">参考学习资料，掌握技能点，逐个完成任务</p>
                    <span class="up-3"></span>
                </li>
                <li class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <span class="up-1 text-center">6</span>
                    <p class="up-2">加入班级，和小伙伴们互帮互动，一块学习</p>
                    <span class="up-3"></span>
                </li>
                <li class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <span class="up-1 text-center">7</span>
                    <p class="up-2">选择导师，一路引导，加速自己成长</p>
                    <span class="up-3"></span>
                </li>
                <li class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <span class="up-1 text-center">8</span>
                    <p class="up-2">完成职业 技能，升级业界大牛</p>
                    <span class="up-3 invisible"></span>
                </li>
            </ul>
        </div>


        <!--优秀学员-->
        <div class="main-c row">
            <h3 class="text-center main-tab">优秀学员展示</h3>
            <ul class="list-unstyled text-center">
                <c:forEach items="${student4s}" var="student4" varStatus="st">
                    <li class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div>
                            <img src="images/student/${student4.picture}">
                            <span>技术顾问：${student4.name}</span>
                            <p class="text-left">${student4.introduction}</p>
                        </div>
                    </li>
                </c:forEach>
            </ul>
        </div>

        <!--合作企业-->
        <div class="row main-bottom">
            <h3 class="text-center">战略合作企业</h3>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul class="logo">
                    <li><a href=""><img src="images/home/alibaba.png"></a></li>
                    <li><a href=""><img src="images/home/jinshanyun.png"></a></li>
                    <li><a href=""><img src="images/home/huanxin.png"></a></li>
                    <li><a href=""><img src="images/home/ronglian.png"></a></li>
                    <li><a href=""><img src="images/home/qiniuyun.png"></a></li>
                </ul>
            </div>
        </div>
    </div>

    <!--友情链接-->
    <div class="main-e">
        <h3 class="text-center main-tab ">友情链接</h3>
        <div class="container">
            <ul class="text-justify">
                <li><a href="#">手机软件</a></li>
                <li><a href="#">教师招聘</a></li>
                <li><a href="#">找工作</a></li>
                <li><a href="#">教师招聘</a></li>
                <li><a href="#">找工作</a></li>
                <li><a href="#">手机软件</a></li>
                <li><a href="#">教师招聘</a></li>
                <li><a href="#">手机软件</a></li>
                <li><a href="#">手机软件</a></li>
                <li><a href="#">找工作</a></li>
                <li><a href="#">手机软件</a></li>
                <li><a href="#">教师招聘</a></li>
                <li><a href="#">找工作</a></li>
                <li><a href="#">教师招聘</a></li>
                <li><a href="#">找工作</a></li>
                <li><a href="#">手机软件</a></li>
                <li><a href="#">教师招聘</a></li>
                <li><a href="#">手机软件</a></li>
                <li><a href="#">手机软件</a></li>
                <li><a href="#">找工作</a></li>
            </ul>
        </div>
    </div>

    <!--底部-->
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5 up-1">
                    <p><a>技能树-改变你我</a></p>
                    <p><a href="#">关于我们 </a>|<a href="#"> 联系我们 </a>|<a href="#"> 合作企业 </a></p>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5 up-2">
                    <p>旗下网站</p>
                    <ul class="list-inline">
                        <li><a href="#">草船云孵化器</a></li>
                        <li><a href="#">最强IT特训营</a><br></li>
                    </ul>
                    <ul class="list-inline">
                        <li><a href="#">葡萄藤轻游戏</a></li>
                        <li><a href="#">桌游精灵</a></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-2 col-lg-2 up-3">
                    <p>微信公众平台</p>
                    <img alt="" src="images/home/weixinhao.jpg">
                </div>
            </div>
        </div>
        <div class="container-fluid text-center">
            <p>Copyright &copy; 2015 北京葡萄藤信息技术有限公司 All Rights Reserved | 京ICP备15035574号-1</p>
        </div>
    </div>
</body>
</html>

