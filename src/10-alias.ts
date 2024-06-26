(() => {
  type UserID = string | number | boolean;  //Alias Type
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //shirtSize = 's';

  function greeting(myText: UserID, size: Sizes){
    if (typeof userId == 'string') {
      console.log(`string ${userId.toLowerCase()}`)
    }
  }

  greeting(1111, 'S');
  greeting('1111', 'XL');

})();
