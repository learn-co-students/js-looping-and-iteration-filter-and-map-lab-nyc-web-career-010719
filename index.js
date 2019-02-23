function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter( d => {
    return d.revenue > revenue
  })
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(d => d.name)
}

function exactMatch (drivers, attrObj) {
  const attribute = Object.keys(attrObj)[0]
  const value = Object.values(attrObj)[0]

  return drivers.filter( d => {
    return d[attribute] === value
  })
}

function exactMatchToList (drivers, attrObj) {
  return exactMatch(drivers, attrObj).map(d => d.name)
}
