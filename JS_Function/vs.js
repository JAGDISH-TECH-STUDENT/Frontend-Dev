
const user = {
  name: "Jagdish",
  showName: () => {
    console.log(this.name); 
  }
};

user.showName(); 


const fixedUser = {
  name: "Jagdish",
  showName: function() {
    console.log(this.name); 
  }
};

fixedUser.showName(); // Output: Jagdish
