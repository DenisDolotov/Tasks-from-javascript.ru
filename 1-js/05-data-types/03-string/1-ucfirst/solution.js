function ucFirst(str) {
  if (typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
else {
    throw TypeError("Argument is not a string");
}
}