<%@ taglib prefix="json" uri="http://www.atg.com/taglibs/json" %>
<%--
  Created by IntelliJ IDEA.
  User: lucifer
  Date: 2018/3/17
  Time: 20:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<json:object>
    <json:property name="id" value="${student.id}"/>
    <json:property name="name" value="${student.name}"/>
    <json:property name="qq" value="${student.qq}"/>
    <json:property name="type" value="${student.type}"/>
    <json:property name="enrolmenttime" value="${student.enrolmenttime}"/>
    <json:property name="graduate" value="${student.graduated}"/>
    <json:property name="number" value="${student.number}"/>
    <json:property name="daily" value="${student.daily}"/>
    <json:property name="ambition" value="${student.ambition}"/>
    <json:property name="responsible" value="${student.responsible}"/>
    <json:property name="wfrom" value="${student.wfrom}"/>
    <json:property name="telipone" value="${student.telipone}"/>
    <json:property name="email" value="${student.email}"/>
    <json:property name="portrait" value="${student.portrait}"/>
    <json:property name="createtime" value="${student.createAt}"/>
    <json:property name="updatetime" value="${student.updateAt}"/>
</json:object>