let TheGames = "begins";
console.log(TheGames);

let maNouvelleVariable0;
maNouvelleVariable0 = 42;
console.log("maNouvelleVariable0 vaut:"+maNouvelleVariable0);

let maNouvelleVariableE;
console.log("maNouvelleVariableE vaut:"+maNouvelleVariableE);
maNouvelleVariableE = 17;






var maVarQuiFaitDesError;
maVarQuiFaitDesError = 13;
console.log("maVarQuiFaitDesError vaut:"+maVarQuiFaitDesError);

/*j'utilise ma var avant d'etre déclarer et je n'ait pas d'erreur*/
console.log("maVarQuiFaitDesErrorR vaut:"+maVarQuiFaitDesError19);
var maVarQuiFaitDesError19;
maVarQuiFaitDesError19 = 19;



/*
Uncaught ReferenceError: Cannot access 'maNouvelleVariable' before initialization
    at la_syntaxe.js:13
    ma var est appeller avant de la déclarer*/
    console.log("maNouvelleVar vaut:"+maNouvelleVar);
    let maNouvelleVar;
    maNouvelleVar;