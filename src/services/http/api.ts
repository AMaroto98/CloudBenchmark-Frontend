export const getData = async () => {
  const response = await fetch("https://pyvhtay3nj.execute-api.eu-west-1.amazonaws.com/prd/homepage");
  const data = await response.json();
  return data.body;
};
