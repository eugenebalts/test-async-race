const extractNumericValuesFromString = (string: string, value: string) => {
  const match = string.match(new RegExp(`${value}\\(([^)]+)\\)`));
  if (match) {
    const result = parseFloat(match[1]); 
      
    return result;
  }

  return 0;
}

export default extractNumericValuesFromString;
