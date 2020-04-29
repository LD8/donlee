export default function slugifyText(text) {
  let slugArr = text.split(" ");

  return slugArr.length > 1
    ? slugArr
        .filter((char) => !/[-:_]/.test(char))
        .join("-")
        .toLowerCase()
    : slugArr[0]
        .split("")
        .filter((char) => !/[:_]/.test(char))
        .join("")
        .toLowerCase();
}
