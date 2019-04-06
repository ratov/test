'use strict';

let money,
		time,
		qs1,
		qs2;

money = prompt("Ваш бюджет на месяц?", '');
qs1 = prompt("Введите обязательную статью расходов в этом месяце", '');
qs2 = +prompt("Во сколько обойдется?", '');


let appData = {
	money: money,
	timeData: time,
	optionalExpenses: '',
	expenses: {
		qs1: qs1,
		qs2: qs2
	},
	income: [],
	savings: false
};
alert(money);