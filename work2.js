// console.log(new Array())

// function Person(name, age, contact) {
//     this.name = name,
//     this.age = age,
//     this.contact = contact
// }

// function EtreVivant(type){
//     this.type = type
// }

// EtreVivant.prototype.language = function(){
//     return false
// }

// let animal = new EtreVivant('animal')

// let requin = Object.create(animal)

// requin.famille = 'Requin baleine'

// let requinBleu = Object.create(requin)

// requinBleu.color = 'blue'

// console.log('animal' ,animal.language(), 'requin',requin , 'requinBleu',requinBleu)


// const  mangue = {
//     type :'fruit',
//     famille :'fruit a noyeau',
// }

// const mangueMure = Object.create(mangue)

// mangueMure.esMure = true ;

// const mangueNonMure = Object.create(mangue)
// mangueNonMure.esMure = false

// console.log('mangue mure' , mangueMure , 'mangue non mure ' ,mangueNonMure )

// class Person{
//         #count = 0
//         constructor(nom, prenom, age, genre , hobbies){
//             this.#count++
//             this.nom = nom
//             this.prenom = prenom
//             this.age = age
//             this.genre = genre
//             this.hobbies = hobbies
//             this.salutation  = function(){
//                 let salutation = `Bonjour , je suis ${this.genre === "F" && age > 20 ?'Madame' : this.genre === "F" && age <20 ? 'Mademoisele' :this.genre === "M" && age > 25 ? 'Monsieur': ''} ${this.nom} ${this.prenom} , j'ai ${age} ans `
                
//                 return salutation
//             } 

//             console.log(this.#count)
    
//         }
//         static _documentation(){
//             console.log(this.name)
//         }

//         demissionner(){
//             return "je demissione"
//         }
// }



// let p = new Person()
// let p1 = new Person()
// Person._documentation()
// console.log(p.demissionner())


// class Eleve extends Person {
//     constructor(nom, prenom, age, genre , matricule, classe){
//         super(nom,prenom,age,genre)
//         this.matricule = matricule
//         this.classe=classe

//         this.salutation = this.salutation() + `j'ai le matricule ${this.matricule} et je suis en classe de ${this.classe}`
//     }
// }
// let Eleve1 = new Eleve('Aime','Augustin' ,17, null, '1234G', '6e')

// console.log(Eleve1.salutation)



// class Professeur extends Person{

//     constructor(nom ,prenom , age , genre, matiere){
//         super(nom,prenom,age,genre)
//         this.matiere = matiere
//         this.salutation  = this.salutation()+` et j'enseigne l'${this.matiere}`
//         }    
//     }


// let Professeur1 = new Professeur('Gerard', 'marc', 33,'H','informatique')
// console.log(Professeur1.salutation)

// function Person(nom, prenom, age, genre , hobbies) {

//     var count = 2
//     this.nom = nom
//     this.prenom = prenom
//     this.age = age
//     this.genre = genre
//     this.hobbies = hobbies
//     this.salutation  = function(){
//         let salutation = `Bonjour , je suis ${this.genre === "F" && this.age > 20 ?'Madame' : this.genre === "F" && this.age <20 ? 'Mademoisele' :this.genre === "M" && this.age > 25 ? 'Monsieur': ''} ${this.nom} ${this.prenom} , j'ai ${this.age} ans et je suis passionné de  ${[...hobbies].join(' de ')} , Mon age dans ${this.age} ans est ${this.age*count} ans `
//         console.log(salutation)
//     }

// }


// const Person1 = new Person("Nicolas" , "Assan" , 18 , "M" , ["God" ,"Code", "guitare" , "foot" ])

// Person1.salutation()

// const Person2 = new Person("Martin", "Navaro", 33, "M", ["Piano", "Cuisine", "Lecture"])

// Person2.salutation()

// console.log(Person1)

//Person._documentation()



// const names = ['Asabeneh', 'Brook', 'David', 'John']
// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]
// const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
// }
// const users = [
//     {
//         name: 'Asabeneh',
//         title: 'Programmer',
//         country: 'Finland',
//         city: 'Helsinki',
//         age: 250
//     },
//     {
//         name: 'Eyob',
//         title: 'Teacher',
//         country: 'Sweden',
//         city: 'London',
//         age: 25
//     },
//     {
//         name: 'Asab',
//         title: 'Instructor',
//         country: 'Norway',
//         city: 'Oslo',
//         age: 22
//     },
//     {
//         name: 'Matias',
//         title: 'Developer',
//         country: 'Denmark',
//         city: 'Copenhagen',
//         age: 28
// }
// ]

// let time = parseInt(localStorage.getItem('time')) || 60

// let timer = setInterval(()=>{
//     time--
//     localStorage.setItem('time',time)

// },1000)
