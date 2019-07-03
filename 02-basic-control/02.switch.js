const val = "x";

switch (val) {
  case "x":
    console.log(val);
    break;

  case "y":
    console.log("Yeah");

  case "z":
    console.log("Wut?");
    break;

  case "abc": {
    const val = "x";
    console.log(val);
    break;
  }

  default:
    console.log("No");
}