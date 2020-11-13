// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(str = "*"){
    return function(adj = "special"){
        return `You are ${str}${adj}${str}!`;
    }
}

const Calculator = {
    add: function(x, y){
        return x + y;
    },
    subtract: function(x, y){
        return x - y;
    },
    multiply: function(x, y){
        return x * y;
    },
    divide: function(x, y){
        return x / y;
    }
};

function actionApplyer(){
    
}