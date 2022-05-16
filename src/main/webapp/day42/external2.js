/**
 * 
 */
 var student = [
	{name:"홍길동",java :100, sql : 90, js :80},
	{name:"홍길연",java :70, sql : 90, js :100}
  ];
student.push({name:"이지연",java :20, sql : 80, js :40});
student.push({name:"김언아",java :40, sql : 30, js :60});
student.push({name:"지아희",java :10, sql : 90, js :90});
for(var index in student){
student[index].getsum = function(){return this.java+this.sql+this.js};
student[index].getavg = function(){return this.getsum()/3;};
}

function call5(){
	for(var index in student){
	here.innerHTML += "<br> <span>이름 : </span>"+student[index]["name"]+student[index].getsum()+"---"+Math.floor(student[index].getavg());
	}
}
function call6(){
	var arr = [];
	arr.push(new Student("1khi", 100,90,80)); //{name: "khi", java :100, sql:90 ,js:80}과 동일
	arr.push(new Student("2hi", 10,90,80)); 
	arr.push(new Student("3ohio", 20,70,80)); 
	arr.push(new Student("4uio", 40,90,60));
	arr.push(new Student("5hio", 60,50,70)); 
	
	//같은 생성자 함수를 이용해서 만든 객체들이 공유하는 공간 : prototype
	//메모리를 효율적으로 사용하기 위함
	//사용하지 않으면 객체마다 getsum, getavg, toString 메모리가 따로 존재함
	//자바스크립트에는 클래스가 존재하지 않아 상속기능도 없음
	//그것을 대신하는 것이 프로토타입임
	
	Student.prototype.getsum = function(){
		return this.java+ this.sql + this.js;
	};
	Student.prototype.getavg = function(){
		return this.getsum()/3;
	};
	Student.prototype.toString = function(){
		return  "<br> <span>이름 : </span>"+this["name"]+this.getsum()+"---"+Math.floor(this.getavg());
	};
	
	return arr;
}
function Student(name, java, sql, js){ //생성자함수
	this.name = name;
	this.java = java;
	this.sql = sql;
	this.js = js;
	
}