function hoursAttended(attended, length) {
  if (((typeof attended === 'string') || (typeof attended === "number")) && ((typeof length === 'string') || (typeof length === "number"))) {
    attended = String(attended);
    lenght= String(length);
    if (attended.length > 0 && length.length > 0) {
      console.log(attended.length);
      console.log(length.length);
      attended = Number(attended);
      length = Number(length);

      if ((attended >= 0 && length >= 0) && (Number.isInteger(attended) && Number.isInteger(length)) && (attended <= length)) {
        return true;
      }
    }
  }
  return false;
}
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended(6, 10) === true);