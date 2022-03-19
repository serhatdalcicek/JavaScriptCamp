//export dışardan import edebileceği anlamına gelir
//default javascript dosya bazlı olduğu için userservice import et dediğinde default olarak yap demek
export default class UserService{ 

    constructor(loggerSevice){
     this.users = [] //getCustomersFromDb()
     this.loggerSevice = loggerSevice
    }

    add(user){
        this.users.push(user)
        this.loggerSevice.log(user)
    }

    list(){
       return this.users
    }
    //component sayfa //service method havuzu
    getById(id){ //kullanıcı detayı
        return this.users.find(u=>u.id===id)//find verdiğin şarta göre data döndürür
    }

}