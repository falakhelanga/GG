const truncate = (length: number, text: string) => {
  let newText = text;
  if (text.length > length) {
    newText = text.slice(0, length) + "...";
  }
  return newText;
};

export default truncate;
