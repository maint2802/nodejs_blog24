const convertDocToObject = (data) => {
  if (Array.isArray(data)) {
    return data.map((item) => item.toObject());
  } else {
    return data ? data.toObject() : data;
  }
};

module.exports = { convertDocToObject };
