function validateForm(data, errors, setErrors) {
  let newErrors = { ...errors };

  //* name validation
  if (data.name.length < 5) newErrors.name = "Must be more than 4 characters";
  else newErrors.name = "";
  if (!data.name) newErrors.name = "Fill in this field";

  //* image validation
  const regex = /^(http|https):\/\/[^\s]+(\.png)$/;
  if (regex.test(data.image)) {
    newErrors.image = "";
  } else {
    newErrors.image = "Enter the .png image link";
  }

  if (!data.image) newErrors.image = "Fill in this field";

  //* up validation
  if (data.up > 270) newErrors.up = "Must be less than 271";
  else newErrors.up = "";
  if (!data.up) newErrors.up = "Fill in this field";

  //* attack validation
  if (data.attack > 300) newErrors.attack = "Must be less than 301";
  else newErrors.attack = "";
  if (!data.attack) newErrors.attack = "Fill in this field";

  //* defense validation
  if (data.defense > 250) newErrors.defense = "Must be less than 251";
  else newErrors.defense = "";
  if (!data.defense) newErrors.defense = "Fill in this field";

  //* speed validation
  if (data.speed > 300) newErrors.speed = "Must be less than 301";
  else newErrors.speed = "";

  //* height validation
  if (data.height > 18) newErrors.height = "Must be less than 19";
  else newErrors.height = "";

  // * weight validation
  if (data.weight > 1000) newErrors.weight = "Must be less than 1001";
  else newErrors.weight = "";

  // * types validation
  if (data.types.length === 0) newErrors.types = "Fill in this field";
  else newErrors.types = "";

  // * verification
  if (
    data.name &&
    data.image &&
    data.up &&
    data.attack &&
    data.defense &&
    data.types.length
  ) {
    newErrors.form = "";
    setErrors(newErrors);
    return true;
  } else newErrors.form = "Missing data";

  setErrors(newErrors);
}

export default validateForm;
