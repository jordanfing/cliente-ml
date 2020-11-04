module.exports={

  //Número a precio. 1500.00 --> $1.500
  //Si toFixed(2)=> 1500.85 --> $1.500,85
    currencyFormatES: function(num) {
        return ('$ '+
          num
            .toFixed(0) //fixed decimals
            .replace('.', ',') // replace decimal point character with ,
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        ) // use . as a separator
      }
}