<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2014-12-09
  Time: 20:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String roleCode = (String) session.getAttribute("roleCode");
    if (roleCode == null || roleCode.trim().length() == 0) {
        response.sendRedirect("/login.jsp");
    }
%>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>在线销售系统平台</title>
    <link href="extjs/resources/ext-theme-neptune/ext-theme-neptune-all.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="extjs/ext-all.js"></script>
    <script type="text/javascript" src="extjs/locale/ext-lang-en.js"></script>
    <script type="text/javascript" src="extjs/locale/ext-lang-zh_CN.js"></script>

    <style type="text/css">
        body {
            background-color: #3892d3
        }

        .part01 {
            width: 90%;
            height: 48px;
            margin-left: 10px;
            margin-top: 10px;
            margin-right: 10px;
        }

        .part01:hover {
            background: #83cbff
        }

        .part01 img {
            width: 48px;
            height: 48px;
            float: left;
            margin-right: 10px;
        }

        .con {
            width: auto;
            height: 48px;
            float: left
        }

        .con span {
            font: normal 12px/18px "";
            display: block;
            height: 18px
        }

        .con .con1 {
            width: auto;
            height: 30px;
            line-height: 30px;
            overflow: hidden;
        }
    </style>

    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript">
        Ext.onReady(function () {
            Ext.create('main', {
                renderTo: Ext.getBody()
            })
        });
    </script>
</head>
<body>

</body>
</html>