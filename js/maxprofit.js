var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

function getMaxProfit(stockPricesYesterday) {

    var maxProfit = 0;

    // go through every price and time
    for (var earlierTime = 0; earlierTime < stockPricesYesterday.length; earlierTime++) {
        var earlierPrice = stockPricesYesterday[earlierTime];

        // and go through all the LATER prices
        for (var laterTime = earlierTime + 1; laterTime < stockPricesYesterday.length; laterTime++) {
            var laterPrice = stockPricesYesterday[laterTime];

            // see what our profit would be if we bought at the
            // min price and sold at the current price
            var potentialProfit = laterPrice - earlierPrice;

            // update maxProfit if we can do better
            maxProfit = Math.max(maxProfit, potentialProfit);
        }
    }

    return maxProfit;
}

function getMaxProfit(stockPricesYesterday) {

  var maxProfit = 0;

  // go through every time
  for (var outerTime = 0; outerTime < stockPricesYesterday.length; outerTime++) {

      // for every time, got through every OTHER time
      for (var innerTime = 0; innerTime < stockPricesYesterday.length; innerTime++) {

          // for each pair, find the earlier and later times
          var earlierTime = Math.min(outerTime, innerTime);
          var laterTime   = Math.max(outerTime, innerTime);

          // and use those to find the earlier and later prices
          var earlierPrice = stockPricesYesterday[earlierTime];
          var laterPrice   = stockPricesYesterday[laterTime];

          // see what our profit would be if we bought at the
          // min price and sold at the current price
          var potentialProfit = laterPrice - earlierPrice;

          // update maxProfit if we can do better
          maxProfit = Math.max(maxProfit, potentialProfit);
      }
  }

  return maxProfit;
}
