<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<html>

<body background="img/asd.jpg">

<div align="center">
    <h2 align="mid">Hello! This is the 3rd tomcat.</h2>

    <br><br><br><br>
    <meta http-equiv="refresh" content="0;url=${pageContext.request.contextPath}/home">
    页面即将跳转，如果没有跳转请点击<a href="${pageContext.request.contextPath}/home">跳转</a>
</div>
</body>
</html>