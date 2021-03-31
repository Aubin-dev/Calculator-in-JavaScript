// let number = parseFloat(prompt("Enter un nombre"))
//let expr = prompt("Voulez-vous le prix de quel fruit?")
// console.log(typeof number)
// if(niveau === "oui"){
//     console.log("Alors ta place est à l'université")
// }
// else if(niveau === "non"){
//     console.log("Alors tu dois etre au lycée ou au collège")
// } else {
//     alert("Tu es déscolarisé")
// }


// switch (niveau) {
//     case "oui":
//         console.log("Alors ta place est à l'université")
//         break;
//     case "non":
//         console.log("Alors tu dois etre au lycée ou au collège")
//         break
//     default:
//         alert("Tu es déscolarisé")
//         break;
// }


// niveau === "oui" ? console.log("Alors ta place est à l'université") : niveau==="non"? console.log("Alors tu dois etre au lycée ou au collège") :alert("Tu es déscolarisé")

//switch (expr) {
//    case "Oranges":
//        console.log("Oranges : 400fr le kilo.");
//        break;
//    case "Pommes":
//        console.log("Pommes : 1200fr le kilo.");
//        reak;
//    case "Bananes":
//        console.log("Bananes : 400fr le kilo.");
//        break;
//    case "Cerises":
//        console.log("Cerises : 600fr le kilo.");
//        reak;
//    case "Mangues":
//    case "Papayes":
//        console.log("Mangues et papayes : 550fr le kilo.");
//        break;
//    default:
//        console.log("Désolé, nous n'avons plus de " + expr + ".");
//}
//console.log("Autre chose ?");



//les type de variables



//console.log(und , typeof arr )


// for(let i =0 ; i<10 ; i++ ){
// }

// let inc = 0

// while(inc < 10){
//     inc++
// }
// var i = 0;


// do {
//    i += 1;
//    console.log(i);
// } while (i =0 );


// arr.forEach((element, index)=>{
//     console.log('el' , element , index)
// })


// for( let o in obj){
//     console.log(o)
// }

// let nombre = parseFloat(prompt('Entrez un nombre'))
// let arret = parseFloat(prompt('Voulez vous, vous arretez ou?'))

// for(let i=0 ; i <= arret ; i++){
//     let result = nombre * i;
//     console.log(`${nombre} x ${i} = ${result}`)
// }


// while(i<= arret){
//     i++
//     let result = nombre * i;
//     console.log(`${nombre} x ${i} = ${result}`)
// }

// do{
//     i++
//     let result = nombre * i;
//     console.log(`${nombre} x ${i} = ${result}`)
// } while(i <= arret)

// let number  = 1 ; // Number;

// let phrase ; //String;

// let bool =true;//Boolean;

// let und = undefined;

// let nu = null;

//let arr =['Ghana', 'Lybie', 'Gambie', 'France','Portugal','Allemagne','Corrée','Chine','Japon'] 
// let afrique=[];
// let europe=[];
// let asie=[];

// arr.forEach(element => {
//     if(element == 'Ghana'|| element =='Lybie'|| element =='Gambie'){
//         afrique.push(element);
//     } else if(element ==='France'|| element ==='Portugal'|| element ==='Allemangne'){
//         europe.push(element);
//     } else (element ==='Corrée'|| element ==='Chine'|| element ==='Japon'){
//         asie.push(element);
//     }
// });

// afrique =[...arr.splice(0,3)];
// europe=[...arr.splice(0,3)];


// asie=[...arr.splice(0,3)];



// console.log(afrique);
// console.log(europe);
// console.log(asie);







//========= les methodes Array =========


// arr.push() , arr.unshift() , arr.pop() , arr.shift, delete arr[] , arr.isArray , new arr() , arr.splice(pos,n) , indexOf, .lenght

//arr.push('Irlande')

//arr.unshift();

//arr.shift()

//delete arr[3]

//const newTable = new Array('Mali')

//arr.splice(0,2)


//delete arr[3]

//arr.splice(3,1, 'Irlande')
//const element = arr[5]

//console.log(arr.indexOf('Allemangne'))

//arr.length = 20;
//arr.splice(14,1, 'itakhd')












//================= Les objets =================




//const obj = {}

// let age

// const personne ={

//     nom :"Bandama",
//     prenom :"Aubin",
//     age :"20",
//     lieu_naissance :"Cocody",
    
//     parler: function () {
//         return 'Hello';
//     }
        

// }
// console.log(personne.nom);
// console.log(personne.prenom);
// console.log(personne.age);
// console.log(personne.lieu_naissance);

//let reponse = prompt('Quel equipement voulez-vous avoir accès?')




// const equipement ={
//     assiette:"une assiette",
//     placard:"deux placard",
//     télé:"une télé",
//     jouets :"trois jouets"
// }
// for(let i in equipement){
//     if( (equipement[i] === "jouets")){
//         continue
//     }
// }


// const Eleves = [
//     {
//         nom:'Coulibaly',
//         prenom:'aziz',
//         matricule: '2345-6',
//         notes:[{
//                 note:5,
//                 type:'interro',
//                 date:'12 Fev 2021'
//             },
//             {
//                 note:15,
//                 type:'devoir',
//                 date:'12 Fev 2021'
//             },
//             {
//                 note:16,
//                 type:'devoir',
//                 date:'12 Fev 2021'
//             }
//         ]
//     },
//     {
//         nom:'Bandama',
//         prenom:'aubin',
//         matricule: '23FG57-B',
//         notes:[{
//                     note:12,
//                     type:'interro',
//                     date:'12 Fev 2021'
//                 },
//                 {
//                     note:15,
//                     type:'devoir',
//                     date:'12 Fev 2021'
//                 },
//                 {
//                     note:16,
//                     type:'devoir',
//                     date:'12 Fev 2021'
//                 }
//         ]
//     },
//     {
//         nom:'Kone',
//         prenom:'hamed',
//         matricule: '23468-C',
//         notes:[{
//                     note:8,
//                     type:'interro',
//                     date:'12 Fev 2021'
//                 },
//                 {
//                     note:14,
//                     type:'devoir',
//                     date:'12 Fev 2021'
//                 },
//                 {       
//                     note:16,
//                     type:'devoir',
//                     date:'12 Fev 2021'
//                 }
//         ]
//     },
//     {
//         nom:'Koffi',
//         prenom:'ange',
//         matricule: '23456-D',
//         notes:[{
//                     note:10,
//                     type:'interro',
//                     date:'12 Fev 2021'
//                 },
//                 {   
//                     note:14,
//                     ype:'devoir',
//                     date:'12 Fev 2021'
//                 },
//                 {
//                     note:16,
//                     type:'devoir',
//                     date:'12 Fev 2021'
//                 }
//         ]
//     },
//     {
//         nom:'Diallo',
//         prenom:'oumar',
//         matricule: '23573-E',
//         notes:[{
//                     note:9,
//                     type:'interro',
//                     date:'12 Fev 2021'
//                 },
//                 {
//                     note:15,
//                     type:'devoir',
//                     date:'12 Fev 2021'
//                 },
//                 {
//                     note:13,
//                     type:'devoir',
//                     date:'12 Fev 2021'
//                 }
//         ]
//     }
// ]


// const eligible=[];

// Eleves.forEach(eleve => {
//     const indexOne = eleve.matricule.split("-")[0];
//     const indexTwo = eleve.matricule.split("-")[1];
//     const numberSeuil = 10;
//     const condition = !isNaN(indexOne) && isNaN(indexTwo);
//     // if(!isNaN(indexOne)){
//     //     console.log(indexOne)
//     // }


//     let interrogation = 0;
//     let Devoir = 0;
//     let Total = 0;

//     if(condition){
//         eleve.notes.forEach((note) => {
//             if(note.type === 'interro'){
//                 interrogation += note.note * 2;
//             }else {
//                 Devoir += note.note;
//             }
//             Total = interrogation + Devoir;


//             if(Total/eleve.notes.length >=10){
//                 eleve.moyenne = Total / eleve.notes.length
//                 eligible.push(eleve)
//             }
//         })
//     }

// });

// console.log(eligible);

// let surdoue = eligible.find((n)=> n.moyenne > 15)
// console.log(surdoue);

// let surdoue = eligible.filter((n)=> n.moyenne > 15)
// console.log(surdoue);

// let surdoue = eligible.filter((moy)=>moy.moyenne>=15)
// eligible.every((n)=>)


// let surdoue = eligible.findIndex((n)=>n.moyenne>=19)
// console.log(surdoue);

// let surdoue = eligible.map((n)=>n.moyenne>=19)
// console.log(surdoue)



// Algo1

// const table =['Aubin','Aime', 'Wilfried'];
// for(let i = 0;i < table.length; i++){
    
//     console.log(table[i].split('').reverse().join(''))
// }

//Algo3


// const entier = [1, 2, 3, 4, 5, 6]
// for(let i = 0; i < table.length; i++){
//     if(table[])

//     }
// }







//=============== Les fonctions =====================


// function saluer() {
//     console.log('Bonjour')
// }
// saluer()

// function calculeSomme() {
//     return 2 + 3; 
// }
// let result = ca

// function multipl(a,b) {
//     for(let i=0 ; i <= b ; i++){
//         let result = a * i;
//         console.log()
//     }
// }
// multipl(2,7)

// let perrArre = function cote(c) {
//     return c *4;
// }
// let result = perrArre(4)
// console.log(result)


// function fact(n) {
//     let fact = 1
//     for(let i= n; i> 1; i--){
//         if(n==0 && n==1){
//             fact == 1
//         }else {
//             fact += i;
//         }
//     }
//     console.log(fact)
// }


// const Eleves = [
//         {
//             nom:'Coulibaly',
//             prenom:'aziz',
//             matricule: '2345-6',
//             notes:[{
//                     note:5,
//                     type:'interro',
//                     date:'12 Fev 2021'
//                 },
//                 {
//                     note:15,
//                     type:'devoir',
//                     date:'12 Fev 2021'
//                 },
//                 {
//                     note:16,
//                     type:'devoir',
//                     date:'12 Fev 2021'
//                 }
//             ]
//         },
//         {
//             nom:'Bandama',
//             prenom:'aubin',
//             matricule: '23FG57-B',
//             notes:[{
//                         note:12,
//                         type:'interro',
//                         date:'12 Fev 2021'
//                     },
//                     {
//                         note:15,
//                         type:'devoir',
//                         date:'12 Fev 2021'
//                     },
//                     {
//                         note:16,
//                         type:'devoir',
//                         date:'12 Fev 2021'
//                     }
//             ]
//         },
//         {
//             nom:'Kone',
//             prenom:'hamed',
//             matricule: '23468-C',
//             notes:[{
//                         note:8,
//                         type:'interro',
//                         date:'12 Fev 2021'
//                     },
//                     {
//                         note:14,
//                         type:'devoir',
//                         date:'12 Fev 2021'
//                     },
//                     {       
//                         note:16,
//                         type:'devoir',
//                         date:'12 Fev 2021'
//                     }
//             ]
//         },
//         {
//             nom:'Koffi',
//             prenom:'ange',
//             matricule: '23456-D',
//             notes:[{
//                         note:10,
//                         type:'interro',
//                         date:'12 Fev 2021'
//                     },
//                     {   
//                         note:14,
//                         ype:'devoir',
//                         date:'12 Fev 2021'
//                     },
//                     {
//                         note:16,
//                         type:'devoir',
//                         date:'12 Fev 2021'
//                     }
//             ]
//         },
//         {
//             nom:'Diallo',
//             prenom:'oumar',
//             matricule: '23573-E',
//             notes:[{
//                         note:9,
//                         type:'interro',
//                         date:'12 Fev 2021'
//                     },
//                     {
//                         note:15,
//                         type:'devoir',
//                         date:'12 Fev 2021'
//                     },
//                     {
//                         note:13,
//                         type:'devoir',
//                         date:'12 Fev 2021'
//                     }
//             ]
//         }
//     ]
    
    
//     const eligible=[];
    
//     Eleves.forEach(eleve => {
//         const indexOne = eleve.matricule.split("-")[0];
//         const indexTwo = eleve.matricule.split("-")[1];
//         const numberSeuil = 10;
//         const condition = !isNaN(indexOne) && isNaN(indexTwo);
    
//         let interrogation = 0;
//         let Devoir = 0;
//         let Total = 0;
    
//         function verifyMat(a,b){
//             if(condition){  
//                 return true
//             }else {
//                 return false
//             }
//         }
//         console.log(verify(1,3))

//         function verifyEligible(a,b) {
//             if(a === 'interro'){
//                 interrogation += b * 2;
//             }
//             else {
//                 Devoir += note.note;
//             }
//                 Total = interrogation + Devoir;

//             if(Total/c >=10){
//                 eleve.moyenne = Total / c
//                 eligible.push(eleve)
//             }

    
//     });
    



//=========Equation du 

// function equation(a,b,c) {
//     let sol = 0;
//     let delta;
//     if((a==0 && b==0 && c==0)){
//     } else if ((a==0)){
//         let sol = (c/b)
//     }else if(a!=0 && b!=0 && a!=0 ){
//         delta = (Math.pow(b,2) -(4*b*c));
//         if(delta == 0){
//             sol = (-b)/(2*a);
//             console.log(`la solution est : ${sol}`)
//         }else if(delta < 0){
//             console.log('il n\'y apas de solution')
//         }else if(delta > 0){
//             let sol = [(((-b)-Math.sqrt(delta))/(2*a)),(((-b)+Math.sqrt(delta))/(2*a))]
//             console.log(`la solution est : ${sol}`)
//         }
//     }
//     return sol;
// }
// console.log(equation(6,4,5))


//======== Les palindrome========



// function Palindrome(mot) {
//     if((mot = mot.toString().split('').reverse().join(''))){
//         console.log('Palindrome')
//     }else {
//         console.log('Ce n\'est pas un Palindrome')
//     }
//     return mot;
// }
// Palindrome('bonjour')



// let Eleves =[];

// for (let i =0; i< 2; i++){
//     let eleve = {};
//     eleve.nom= prompt('Entrez votre nom');
//     eleve.notes = prompt('Entrez les notes');
//     //console.log('eleve' , eleve)
//    let notes =  parse(...eleve.notes.split(','))
//     eleve.moyenne = moyenne(...parse(...notes)).decision ? moyenne(...parse(...notes)).moyenne  :moyenne(...parse(...notes)).moyenne
//     eleve.decision = moyenne(...parse(...notes)).decision ? moyenne(...parse(...notes)).decision  :moyenne(...parse(...notes)).decision
//     console.log(eleve)
//     Eleves.push(eleve)
//     classement()
//     eleve = {}
//    // classement()
//    console.log('Elèves' , Eleves)
    
// }

// function moyenne(...rest) {
//     let somme = rest.reduce((a,b)=> a+b)
//     if(somme/rest.length >=10){
//         return {moyenne:somme/rest.length , decision:true}
//     }else{
//         return {moyenne:somme/rest.length , decision:false}
//     }
// }

// function parse(...rest){
//     let numbers = rest.map((ar)=> parseFloat(ar))
//     return numbers
// }
// function classement(){
//     Eleves.sort((a,b)=> b.moyenne - a.moyenne)
// }



// function verify(not) {
//     if(not.eleve.note >= 10) {
//         console.log('Vous avez la moyenne!')
//     }else{
//         console.log('Vous n\'avez pas la moyenne !')
//     }
// }






// let table= ['Aubin', 'hhjjfj', 'wilFried']

// function capitalize (){
//     for(let i=0 ; i< table.length; i++){
//         let capi = table[i].split('').toUpperCase
//         console.log(capi);
//     }
// }


// function jadenCase(params) {
//     let first = params.split('')[0]
//     let rest = params.split('').splice(1)

//     return `${first.toUpperCase()}${rest.join('').toLowerCase()}`
// }
// console.log(jadenCase('how are'))


// function capitalize(params) {
//     let first = params.split('')
//     return `${first.toUpperCase()}`
// }
// console.log(capitalize('Aubin is beautiful'));

// function KeepFirst(params) {
//     let rest = params.split('').splice(2)

//     return `${rest.join('')}`
// }

// function KeepLast(params) {
//     let rest = params.split('').splice('')

//     return `${rest.join('')}`
// }


// console.log(KeepLast('Aubin'))

// const escapeStr = 'je / suis ` content \ aujourd \'huit l"ff  mais \\  '

// console.log()

// console.log(new Array())

// function Person(firstName, lastName, age, civilité) {
//     this.firstName=firstName
//     this.lastName=lastName
//     this.age=age
//     this.civilité=civilité
// }
// console.log(new Person())

// function Animal(name, category) {
//     this.name=name
//     this.category=category
// }
// let firstAnimal = new Animal('Serpent', 'vertebré');
// console.log(firstAnimal)

// function EtreVivant(type) {
//     this.type=type
// }

// let animal = new EtreVivant('animal')

// let


// function repeat(string, number) {

//     if (number === 0 || number < 0) {
//         return string = '';
//     } else if (number === 1) {
//         return string;
//     } else {
//         for (let i = 0; i = number; i++) {
//             let repeat = string;
//             repeat += string;
//         }
//         return repeat;
//     }
// }
// console.log(repeat('Aubin',4))

// - https://devdocs.io/javascript/operators/typeof
// - https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// - https://developer.mozilla.org/en-US/docs/Glossary/Falsy




// function generatePyramid() {
//     var totalNumberofRows = 5;
//     var output = '';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += ' *';
//         }
//         console.log(output);
//         output = '';
//     }
// }

// generatePyramid();


// let canvas = document.getElementById('canvas1')
// let contexte = canvas.getContext('2d')

// canvas.height=600
// canvas.width=2090



// contexte.fillStyle = 'orange';
// contexte.fillRect(100, 100, 100, 100)

// contexte.fillStyle = 'red';
// contexte.fillRect(150, 150, 100, 100)

// contexte.fillStyle = 'yellow';
// contexte.fillRect(200, 200, 100, 100)


// contexte.strokeStyle = 'orange';
// contexte.strokeRect(250, 250, 100, 100)

// contexte.beginPath()
// contexte.arc(0,0,50, 0, 2*Math.PI)
// contexte.strokeStyle ='white'
// contexte.stroke()

// contexte.beginPath()
// contexte.arc(0,600,50, 0, 2*Math.PI)
// contexte.stroke()

// contexte.beginPath()
// contexte.arc(600,0,50, 0, 2*Math.PI)
// contexte.stroke()

// contexte.beginPath()
// contexte.arc(600,600,50, 0, 2*Math.PI)
// contexte.stroke()

// contexte.beginPath()
// contexte.arc(300,300,20, 0, 2*Math.PI)
// contexte.stroke()

// contexte.beginPath()
// contexte.moveTo(0,300)
// contexte.lineTo(600,300)
// contexte.stroke()

// let x = 50
// let y = 300
// let fast = 5
// function animation(){
//     requestAnimationFrame(animation)
//     contexte.clearRect(0,0,canvas.width,canvas.height)

//     contexte.beginPath()
//     contexte.arc(x,y,50, 0, 2*Math.PI)
//     contexte.fillStyle='orange'
//     contexte.fill()
//     if(x+50 > canvas.width || x-50< 0){
//         fast = -fast
//     }
    
//     x+=fast 


// }
// animation()
// let canvas = document.getElementById('canvas1')
// let contexte =  canvas.getContext('2d')

// canvas.width=600
// canvas.height=600

// let posX = 50;
// let posY = 300;
// let diametreBalle=50;
// let fast = 5;
// function animation(){
//     requestAnimationFrame(animation)
//     contexte.clearRect(0,0,canvas.width,canvas.height)

//     contexte.beginPath()
//     contexte.arc(posX,posY,diametreBalle, 0, 2*Math.PI)
//     contexte.fillStyle='orange'
//     contexte.fill()
//     if(posX +diametreBalle/2 > canvas.width || posX-diametreBalle/2 < 0){
//         fast *= -1
//     }
//     // if(posY+diametreBalle/2 > canvas.height || posY-diametreBalle/2 < 0){
//     //     fast *= -1
//     // }
    
//     posX+=fast
//     posY+=fast


// }
// animation()




// //=========== Emoji (sourire) =========================


// function animation() {



//     contexte.beginPath()
//     contexte.fillStyle='yellow'
//     contexte.arc(100,100, 50,0, 2*Math.PI)
//     contexte.fill()

//     contexte.beginPath()
//     contexte.fillStyle='black'
//     contexte.arc(100,110, 30,0, Math.PI)
//     contexte.fill()

//     contexte.beginPath()
//     contexte.lineWidth='2'
//     contexte.strokeStyle='black'
//     contexte.arc(80,90, 10,Math.PI, 2*Math.PI)
//     contexte.stroke()

//     contexte.beginPath()
//     contexte.lineWidth='2'
//     contexte.strokeStyle='black'
//     contexte.arc(120,90, 10,Math.PI,2*Math.PI)
//     contexte.stroke()

// }
// animation()




// const toIntArray = (n) => ([...n + ""].map(v=> +(v**2))).join('')





// const toIntArray = (n) => ([...n + ""].map(v => +(v**2))).join('')

// console.log(toIntArray())


// function separate(n){

//     let table = []
//     let decoupe =n.toString(10).split("").map(function(t){return console.log(parseInt(t))})
//     return table.push(decoupe)
    
// }

// function createPhoneNumber(numbers){
//     return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
// }
// console.log(createPhoneNumber([]))




















// function createPhoneNumber(numbers){
//     return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx")
// }
// console.log(createPhoneNumber([]))

// function calculate(str){
//     return (eval(str.replace(/(plus)/gi,'+').replace(/(minus)/gi,'-').toString()))
// }

// console.log(calculate('1plus4'))


// function factorial(n)
// { 
//     if (n < 0) throw new RangeError('Range must be between 0 and 12')
//     return n>1?n*factorial(n-1):1;
// }
// console.log(factorial(23))




// function getUsersIds(str){
//     const arr=str.replace(/#/ig,'').trim().toLowerCase().split(',')
//     return console.log(arr.map(v=>v.trim().replace(/^uid/,'').trim()).join())
// }






// function sumOdd(number){
//     const numbers = number.every(el => typeof el === 'number');
//     if(!numbers) return undefined;
    
//     return number.map(v=> v*3).filter(v=> v%2==0).reduce((a,b)=> a+b)
// };

// console.log(sumOdd([3,4,6,5]))





// function serie(n){
//     for (let sum=0,i=0;i=n;i++){
//         sum+=1/(1+i+3)
//     }
//     return sum;
// }
// console.log(serie(4))


// let str="abcde";
// for (let i=0;i<str.length;i++){
//     console.log(str.charAt(i),str.charCodeAt(i));
// }


// function pyramid(n){
//     const arr=[];
//     let i=0
//     for (i;i<n-1;i++){
//     arr.push(' '.repeat(n-i-1)+'/'+' '.repeat(i)+' '.repeat(i)+'\\')
//     }
//     arr.push('/'+'_'.repeat(i)+'_'.repeat(i)+'\\'+'\n')
//     return arr.join('\n')
// }
// console.log(pyramid(1))











// function pyramid(n){
//     const arr =[];
//     let i = 0;
//     for(i;i<n-1;i++){
//         arr.push(' '.repeat(n-i-1)+'/'+' '.repeat(i)+' '.repeat(i)+'\\')
//     }
//     arr.push('/'+'_'.repeat(i)+'_'.repeat(i)+'\\'+'\n')
//     return arr.join('\n')
// }

// console.log(pyramid(10))

// String.prototype.vowel = function() {
//     return /^[aeiou]$/i.test(this)
// }

// console.log(String.prototype.vowel('a'))

// let prixArticle , nombreCherisseur, prixCheriseur, nomCherisseur;
// let donnee =[];
// let result=[];                                                                                                                                                                                    

// const array1 = [3, 5, donnee];

// for(let i=0;i<array1.length;i++){
//     for(let i=0;i<donnee.length;i++){
//     console.log(parseInt(donnee[i].split(',').slice(0,2)[0]))
//     }
    
//     console.log(array1[i])
    
// }

// function calculeIMC() {
//     let poids = parseFloat(prompt('Entrer votre poids ! (en kg)'));
//     let taille = parseFloat(prompt('entre votre taille ! (en cm)'));

//     return alert(poids / Math.pow(taille/100, 2));
// }
const input = document.querySelector('input')
let keycode = document.querySelectorAll('button').forEach(el=>{
    el.onclick = () =>(input.value =input.value !== "0" ? input.value + el.innerText : el.innerText)
});

let calc =[]

let opCallback = opName => () =>{
    let currentVal = parseFloat(input.value)

    if(opName === "pourcentage"){
        currentVal *= 0,01;
        input.value=currentVal;
    }
    else{
        if(calc && calc.length){
            calc.push({value:currentVal})

        
        }
    }
}

for(let opName of ["addition","soustration","multiplication","division","pourcentage"]){
    document.querySelector(`.button[op=${opName}]`).onclick = opCallback(opName)
}









