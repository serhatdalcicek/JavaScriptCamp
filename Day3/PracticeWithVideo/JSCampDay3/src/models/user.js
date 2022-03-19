//models komponentlerin kullanıcıdan alıp api ye gönderdiğimiz veri tipleri
export default class User {
    constructor(id, firstName, lastName, city) {//oluşturucu demektir
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
    }
}