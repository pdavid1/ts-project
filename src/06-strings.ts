(() => {
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescripcion = "bla bla bla bla bla asasas";
  console.log('productDescripcion', productDescripcion);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle}
  description: ${productDescripcion}
  price: ${productPrice}
  isNew: ${isNew}
  }
  `;

  console.log(summary);

  const myString: String = ''

})();
