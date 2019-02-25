// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue)
    .map(function(driver){
      return driver.name
    })
}

function exactMatch(drivers, keyValue) {
  return drivers.filter(function(driver){
    for (const key in keyValue) {
      return keyValue[key] === driver[key]
    }
  })
}

function exactMatchToList(drivers, keyValue){
  return exactMatch(drivers, keyValue)
  .map(function(driver){
    return driver.name
  })
}



// return drivers.filter(function(driver){
  //   for (const key in keyValue) {
    //     return keyValue[key] === driver[key]
    //     // if (keyValue[key] === driver[key]){
      //     //   return driver[key].name
      //     // }
      //   }
      // })
