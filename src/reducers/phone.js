const getRegisteredPhones = () => {
  const storageItem = window.localStorage.getItem("phoneBookStorage");
  const registeredPhones = JSON.parse(storageItem) || [];
  return registeredPhones;
};

const storePhone = phoneForm => {
  const registeredPhones = getRegisteredPhones();
  registeredPhones.push({
    id: registeredPhones.length + 1,
    firstName: phoneForm.firstName,
    lastName: phoneForm.lastName,
    number: phoneForm.number
  });
  window.localStorage.setItem(
    "phoneBookStorage",
    JSON.stringify(registeredPhones)
  );
};

const updateRegisteredPhone = phoneForm => {
  const registeredPhones = getRegisteredPhones();
  // findIndex is avalible in IE 12 so please run after IE12
  // code is yet to be chnaged with lodash utility library
  const foundIndex = registeredPhones.findIndex(
    phone => phone.id === phoneForm.id
  );
  registeredPhones[foundIndex] = phoneForm;
  window.localStorage.setItem(
    "phoneBookStorage",
    JSON.stringify(registeredPhones)
  );
};

const phones = (state = [], action) => {
  switch (action.type) {
    case "ADD_PHONE":
      if (action.phone.id) {
        updateRegisteredPhone(action.phone);
      } else {
        storePhone(action.phone);
      }
      return [...getRegisteredPhones()];
    default:
      return [...getRegisteredPhones()];
  }
};

export default phones;
