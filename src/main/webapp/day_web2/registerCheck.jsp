<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
request.setCharacterEncoding("utf-8");
 
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>회원가입 정보받기</h1>
<p>아이디:<%=request.getParameter("user-id") %>.....${param["user-id"]}</p>
<p>비밀번호1:<%=request.getParameter("pwd1") %>......${param.pwd1 }</p>
<p>비밀번호2:<%=request.getParameter("pwd2") %>......${param.pwd2 }</p>
<p>이름:<%=request.getParameter("user-name") %>......${param["user-name"]}</p>
<p>메일:<%=request.getParameter("mail") %>......${param.mail }</p>
<p>전화번호:<%=request.getParameter("phone") %>......${param.phone }</p>
<p>URL:<%=request.getParameter("homep") %>......${param.homep }</p>
</body>
</html>