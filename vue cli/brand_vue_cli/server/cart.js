const add = (cart, req) => {
  cart.contents.push(req.body);
  cart.amount = getSum(cart);
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  if (req.body.quantity > 1) {
    find.quantity = req.body.quantity;
  } else {
    find.quantity += req.body.quantity;
  }
  cart.amount = getSum(cart);
  return JSON.stringify(cart, null, 4);
};
const remove = (cart, req) => {
  if(req.body.value === 'all') {
    cart.contents = [];
    cart.amount = 0;
  } else {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find), 1);
    cart.amount = getSum(cart);
  }
  return JSON.stringify(cart, null, 4);
};

const getSum = (cart) => {
  cart.amount = 0;
  for (let i = 0; i < cart.contents.length; i++){
    let sumProduct = cart.contents[i].quantity * cart.contents[i].price;
    cart.amount+=sumProduct;
  }
  return cart.amount;
};
module.exports = {
  add,
  change,
  remove,
};
