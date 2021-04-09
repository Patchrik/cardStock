export default (unformattedDate) => {
  const parsedDate = new Date(Date.parse(unformattedDate));
  const finalDate = parsedDate.toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  return finalDate;
};
