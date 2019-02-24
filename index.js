// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver){
  return driver.name;
  });
}

function exactMatch(drivers, attribute) {
  //filter through array of drivers
  return drivers.filter(function(driver){
    //match is defaulted as false
    let matches = false;
    // each attribute is a key value pair according to test. for each key in attribute -- see if the driver key and the attribute key match up
    for (const key in attribute) {
      matches = driver[key] == attribute[key]
    }
    return matches
  })
}

function exactMatchToList(drivers, attribute) {
  //re run the above func w/ parameters and map values on name
  return exactMatch(drivers, attribute).map(function(driver){
    return driver.name
  })
}
