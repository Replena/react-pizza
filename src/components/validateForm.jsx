export const nameValidate = (name) => {
  return /^[a-z ,.'-]+$/i.test(name.trim());
};
export const sizeValidate = (size) => {
  return size.length > 0;
};
export const selectValidate = (select) => {
  return select.length > 0 && select !== "Hamur Kalınlığı";
};
export const ingredientsValidate = (ingredients) => {
  return ingredients.length <= 10 && ingredients.length >= 4;
};
