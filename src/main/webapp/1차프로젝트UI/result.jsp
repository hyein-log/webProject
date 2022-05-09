<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String b = request.getParameter("b");
int i = Integer.parseInt(b);
double a =1.2;
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>투표율</h1>
<p><%=i * a %></p>
</body>
</html>