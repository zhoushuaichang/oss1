<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2014-12-09
  Time: 20:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>登陆</title>
    <link href="extjs/resources/ext-theme-neptune/ext-theme-neptune-all.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="extjs/ext-all.js"></script>
    <script type="text/javascript" src="extjs/locale/ext-lang-en.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
    <script type="text/javascript">
        Ext.onReady(function () {
            Ext.create('Login', {
                renderTo: Ext.getBody()
            })
        });
    </script>
</head>
<body>

</body>
</html>
