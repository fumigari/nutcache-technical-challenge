export const team = (value : number) => {
  switch (value) {
    case 1:
      return "Mobile";
    case 2:
      return "Front end";
    case 3:
      return "Back end";
    case 4:
      return "Not required";
    default:
      return "";
  }
}
