<!--注意isELIgnored是选择EL表达式是否输出-->
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" import="java.util.*" isELIgnored="false" %>

<!doctype html>
<html>
<body>
<header>
    <div class="top container">
        <p class="hidden-xs">客服热线：010-594-78634</p>
        <img src="http://39.105.149.2/12321.gif">
        <h5 align="middle">用户名：${user.id} || 用户名：${user.username}
            <a href="${pageContext.request.contextPath}/updatepassword">
                <input name="修改密码" type="button" value="修改密码"></a>
            <a href="${pageContext.request.contextPath}/logout">
                <input name="登出" type="button" value="登出"></a>
            <a href="${pageContext.request.contextPath}/login">
                <input name="重新登录" type="button" value="重新登录"></a>
            <a href="${pageContext.request.contextPath}/u/join">
                <input name="加入内门" type="button" value="加入内门"></a>
            <a href="${pageContext.request.contextPath}/u/showInfo">
                <input name="信息展示" type="button" value="信息展示"></a>
        </h5>

    </div>


    <div role="navigation" class="nav1 navbar navbar-default">
        <div class="container">
            <div class="header-logo">
                <div class="logo-middle"><img src="http://39.105.149.2/logo.png"></div>
            </div>
            <div class="navbar-header marginTop">
                <button data-target="#example-navbar-collapse" data-toggle="collapse" class="navbar-toggle"
                        type="button">
                    <span class="sr-only">切换导航</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <div id="example-navbar-collapse" class=" collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <a href="${pageContext.request.contextPath}/homepage">
                        <li>首 页</li>
                    </a>
                    <a href="${pageContext.request.contextPath}/profession">
                        <li class="border">职 业</li>
                    </a>
                    <a href="">
                        <li>推 荐</li>
                    </a>
                    <a href="">
                        <li>关 于</li>
                    </a>
                </ul>
            </div>
        </div>

    </div>

</header>
</body>
</html>