<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/9/10
  Time: 20:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>查询用户头像</title>
</head>
<body>
<h3>
    查询用户头像
</h3>
用户名：${showName}<br>
图片链接地址：${showUrl}<br>
<img src="${showUrl}"/><br><br><br>


</body>
</html>
