export const addPhone = phone => ({
  type: "ADD_PHONE",
  phone
});

export const editPhone = phone => {
  return {
    type: "EDIT_PHONE",
    phone
  };
};
