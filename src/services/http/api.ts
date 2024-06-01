export const getData = async () => {
  const response = await fetch("../../../backend/data.json");
  const data = await response.json();
  return data;
};
