const createTimeStamp = (dateString) => {
  let time = Date.parse(dateString);
  return time;
};

export const buildParsedArray = (TimeSeriesObj) => {
  let ohlcv = [];
  for (const property in TimeSeriesObj) {
    let holderArr = [];
    let timestamp = createTimeStamp(property);
    holderArr.push(timestamp);
    let open = +TimeSeriesObj[property]["1. open"];
    holderArr.push(open);
    let high = +TimeSeriesObj[property]["2. high"];
    holderArr.push(high);
    let low = +TimeSeriesObj[property]["3. low"];
    holderArr.push(low);
    let close = +TimeSeriesObj[property]["4. close"];
    holderArr.push(close);

    ohlcv.push(holderArr);
  }
  return ohlcv.reverse();
};
