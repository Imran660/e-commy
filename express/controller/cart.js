exports.getCarts = (req, res) => {
  console.log(req.message);
  //statu codes
  //200 - OK
  //201 - Created
  //204 - No Content
  //400 - Bad Request     failed to send proper data
  //401 - Unauthorized
  //403 - Forbidden  (you are not allowed to access this resource) roles mismatch
  //404 - Not Found
  //500 - Internal Server Error
  res.send([
    { id: 1, product: "watch", price: 100 },
    { id: 2, product: "laptop", price: 200 },
  ]);
};
