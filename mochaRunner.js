const Mocha = require("mocha");
const mocha = new Mocha({
    reporter:"mochawesome",
    reporterOptions:{
        reportDir:"./docs/mochawesome-report",
    }

});

mocha.addFile(
    "./service/index.spec.js"
);

mocha.run(function(err){
    if(err){
        process.exit(1);
    }else{
        console.log("ALL DONE");
        process.exit(0);
    }
})