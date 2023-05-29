export const Gender = (value : number) => {
  switch (value) {
    case 1:
      return "Woman";
    case 2:
      return "Man";
    case 3:
      return "Transgender";
    case 4:
      return "Non binary";
    case 5:
      return "Prefer not to respond";
    default:
      return "Invalid gender";
  }
}

