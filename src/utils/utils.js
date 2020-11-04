module.exports={

    currencyFormatES: function(num) {
        return ('$ '+
          num
            .toFixed(0) //fixed decimals
            .replace('.', ',') // replace decimal point character with ,
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        ) // use . as a separator
      }
}