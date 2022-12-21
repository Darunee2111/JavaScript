function creatQuote (quote, callblack) {
    let myQuote = "Like I alwat=y say, " + quote
    callblack(myQuote); // 2

}

function logQuote(quote) {
    console.log(quote + ' Yes..');

}

creatQuote(" you will getting better!", logQuote); // 1
