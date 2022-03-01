let number;
let numPass;
let btns=document.querySelectorAll(".btn");

function voucherGenerater(){
    const voucher=["A","B","C","D","E","F","G","H","I","J"
                    ,"K","L","M","N","O","P","Q","R","S","T"
                    ,"U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0]
    let randomNum=Math.floor(Math.random()*10);
    let voucherNUmber=[];
    for (let i = 0; i < voucher.length; i++) {
        let indexer=i+randomNum;
        if(indexer>voucher.length){
            indexer=i-randomNum;
        }else{
            indexer=i+randomNum;
        }
    if(voucherNUmber.length<5){
        voucherNUmber.push(voucher[indexer]);
    }
    
}
    return voucherNUmber;

}

function numberChecker(num){
    if (num.length <10 || num.length >12 || typeof num != "number"){
        numPass=false;
        window.alert(`Please input a valid number!/n ${num}is not a valid phone number.`);
        num=0;
        num= window.prompt("Input phone nUmber","add here");
    }else{
        numPass=true;
        num =num;

    }
    if (numPass == true) {
       return console.log(voucherGenerater());
        
    }
}

btns.forEach(btn=>{
    btn.addEventListener('click',()=>
    {
    number= window.prompt("Input phone nUmber","add here");
    console.log("working");
    return numberChecker(number);
    

    })
})
