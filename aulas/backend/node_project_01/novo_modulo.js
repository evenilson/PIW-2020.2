function somar(a, b){
    return a+b;
}

let s = "String a ser exportada";

let o = {"nome":"Victor", "Matricula":"123"};

module.exports.somar = somar;
module.exports.str = s;
module.exports.obj = o;