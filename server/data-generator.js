const generateFakerData = function (faker, nrOfObjects) {
  if (!faker || !faker.datatype || !faker.company || !faker.commerce || !faker.date) {
    console.error('generateFakerData: faker was not supplied correctly');
    return;
  }
  if (!nrOfObjects || !Number.isInteger(nrOfObjects) || nrOfObjects <= 0) {
    console.error('generateFakerData: nrOfObjects must be integer number greater than 0');
    return;
  }

  const fakerData = [];
  for (let i = 0; i < nrOfObjects; i++) {
    const firstRandomValue = faker.commerce.price();
    const secondRandomValue = faker.commerce.price();
    
    fakerData.push({
      id: faker.datatype.uuid(),
      name: faker.company.companyName(),
      minValue: Math.min(firstRandomValue, secondRandomValue),
      maxValue: Math.max(firstRandomValue, secondRandomValue),
      available: faker.datatype.boolean(),
      dateIntroduced: faker.date.past()
    });
  }

  return fakerData;
}

const updateFakerData = function (faker, fakerData, dataChangeChance) {
  if (!faker || !faker.datatype || !faker.company || !faker.commerce || !faker.date) {
    console.error('updateFakerData: faker was not supplied correctly');
    return;
  }
  if (!fakerData || !Array.isArray(fakerData)) {
    console.error('updateFakerData: fakerData was not supplied correctly');
    return;
  }
  if (isNaN(dataChangeChance) || dataChangeChance < 0 || dataChangeChance > 1) {
    console.error('updateFakerData: dataChangeChance must be a number in range 0 to 1');
    return;
  }

  fakerData.forEach(value => {
    if (value && dataChangeChance > Math.random()) {
      const firstRandomValue = faker.commerce.price();
      const secondRandomValue = faker.commerce.price();

      value.minValue = Math.min(firstRandomValue, secondRandomValue),
      value.maxValue = Math.max(firstRandomValue, secondRandomValue)
    }
  })

  return fakerData;
}

module.exports = {
  generateFakerData,
  updateFakerData
};
