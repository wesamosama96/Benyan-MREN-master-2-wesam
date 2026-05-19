const mongoose =require("mongose");
const bcrypt =require("bcrypt");
const { string, required } = require("joi");


const adminschema = new mongoose.schema({
  username :{
    type :string,
    required :[true, "Username is Required"],
  },

   email :{
    type :string,
    required :[true, "Email is Required"],
  },
    password :{
    type :string,
    required :[true, "Password is Required"],
    minlength: 6 ,
  },


},{timestamp :true},
);

adminschema.pre("save", async function (next){
  if(!this.isModified("password")) return next();
  this.paaword =await bcrypt.hash (this.password,10);

});

adminschema.methods.comparePassword = async function(matchedPassword){
return await bcrypt.compare(matchedPassword, this.password);

};

const Admin = mongoose.model("Admin" ,adminschema);
module.exports = Admin ;