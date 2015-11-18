/**
 * Created by kevin on 11/17/15.
 */

function round(value, places) {
  var multiplier = Math.pow(10, places || 0)
  return Number((Math.round(value * multiplier) / multiplier).toFixed(places > 0 ? places : 0))
}

function money(value){
  return round(value, 2)
}

round.money = money

module.exports = round;