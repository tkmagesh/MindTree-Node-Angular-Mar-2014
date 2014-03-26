Constructor Functions
======================

Class like infrastructure

var e = new Employee();

function Employee(){
	
}

/*
1. a CF is invoked with a "new" keyword
2. "this" refers to a new object
3. "this" is returned by default
*/

function SalaryCalculator(basic,hra,da,tax){
  this.basic = basic;
  this.hra = hra;
  this.da = da;
  this.tax = tax;
  
}

SalaryCalculator.prototype.calculateSalary = function(){
  	this.salary = (this.basic + this.hra + this.da) * ((100-this.tax)/100);
  };



