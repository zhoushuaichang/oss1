<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2014-12-11
  Time: 10:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link href="extjs/resources/ext-theme-neptune/ext-theme-neptune-all.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="extjs/ext-all.js"></script>
    <script type="text/javascript" src="extjs/locale/ext-lang-en.js"></script>
    <script type="text/javascript" src="extjs/locale/ext-lang-zh_CN.js"></script>
    <script type="text/javascript" src="js/test.js"></script>

    <script type="text/javascript">

        Ext.onReady(function () {
            Ext.create('test', {
                renderTo: Ext.getBody()
            })
        });

    </script>

</head>
<body>


</body>
</html>
