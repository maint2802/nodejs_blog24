const convertDocToObject = (data) => {
  if (Array.isArray(data)) {
    return data.map((item) => item.toObject());
  } else {
    return data ? data.toObject() : data;
  }
};
//get data from mongodb will return a document, not a arr/object
//a document will save the properties into prototype, so them will not a own properties of document
//while mongo strict can not access to a property if it is not a own property
//so have to convert data to object/array

module.exports = { convertDocToObject };
