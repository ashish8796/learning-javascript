function getDrinkByProfession(param) {
  let professionArr = ["Jabroni", "School Counselor", "Programmer", "Bike Gang Member", "Politician", "Rapper"]
  let drinkArr = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal", "Beer"]

  if (!professionArr.includes(param)) {
    professionArr.push(param)
  }
  let index = professionArr.findIndex(elem => elem.toLowerCase() == param.toLowerCase())

  return drinkArr[index]
}
getDrinkByProfession("prOgramMer")