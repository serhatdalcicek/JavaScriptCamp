import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcems/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"

//component bileşen demektir ve bunların dalları vardır
console.log(" User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Serhat","Dalçiçek","İstanbul");
let user2 = new User(2,"Baran","Gökçekli","Muğla");

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))


userService.getById(1)
userService.list()

let customer = { id: 1, firstName: "Serhat" }

//prototyping sonradan değer verme
customer.lastName = "Dalçiçek"
console.log(customer.lastName)