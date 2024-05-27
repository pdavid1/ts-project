(() => {
  // se aconseja que no se utilize el ANY y que sea obligatorio colocar el tipo
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);

})();
