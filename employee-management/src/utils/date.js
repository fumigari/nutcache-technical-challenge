export const showBirthDate = (date) => {
  const _date = new Date(date);

  const isoDate = _date.toISOString();
  const subDate = isoDate.substring(0, isoDate.indexOf("T"));
  const birthDate = subDate.split("-").reverse().join("/");

  return birthDate;
};

export const showStartDate = (date) => {
  const _date = new Date(date);

  const isoDate = _date.toISOString();
  const subDate = isoDate.substring(0, isoDate.indexOf("T"));
  const startDate = subDate.split("-").reverse().join("/");
  const showDate = startDate.substring(3);

  return showDate;
};

export const configureBirthDate = (date) => {
  try {
    const str = date.split("/");
    const _date = new Date(
      parseInt(str[2]),
      parseInt(str[1]) - 1,
      parseInt(str[0])
    );
    return String(_date.toISOString());
  } catch (error) {
    console.log("Invalid date: ", error);
  }
};

export const configureStartDate = (date) => {
  try {
    const str = date.split("/");
    const day = "01";
    const _date = new Date(
      parseInt(str[1]),
      parseInt(str[0]) - 1,
      parseInt(day, 10)
    );

    return String(_date.toISOString());
  } catch (error) {
    console.log("Invalid start date: ", error);
  }
};


