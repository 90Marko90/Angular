<button onclick="
      const randomNumber = Math.random();
      let computerMove = '';
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
      let result = '';
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
      alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
    ">Rock</button>


- na JS odkaz sa v reacte odkazujem cez {bla.bla.bla} 
- ak chceme prepisat let value = 1, tak dalej v kode pisem len value = 2 bez let
- pole zgrupuje vela dat ako napriklad who a wat pri viacerych IDckach a preto sa odkazujem na to cez $ a ['who' 'wat'], ktory si ulozim hore a v kode sa na to odkazem cez $Finn ['wat' alebo dalsie] 
- JSX je JS-XML rozsirenie, ktore do JS pridava XML syntax a piseneme nim sablony templates 
- v reacte sa na tagy nepouziva class, ale className, lebo class je vyhradene len pre vytvaranie JS classy
- JSX sa odlisuje od html ako className, tabIndex, tagy musim uzatvarat <img />, ak je single tag 
- v reakte state odkaz menim cez funkciu $r.setState ({}) v react developer tool 
- v reakte nemozem menit stav priamo 
- setState s objektom použi, ak do stavu ukladáš kompletne novú hodnotu
this.setState({
    dude: 'hello!!';
})
- etState s funkciou ak pre nový stav potrebuješ aktuálnu hodnotu stavu (to, čo je v stave momentálne)
this.setState(state => {
    return {
        characters: [...state.characters, newDude]
    }
})
- funkcia s nejakym nazvom a prazdna zatvorka, co znamena funkcia () a dalej {} co ma vlasntne ta funkcia spravit za ulohu a potom si len necham zavolat danu funkciu 
function get_comment_count_ () 
{}
- return value lets us get a value out of the function 
- parameter je to iste ako value a nachadza sa vo funkcii ako function calculate (parameter1) {}
- parameter vklada hodnotu do funkcie 
- kazda funkcia je zvlast oddelene od zvysku kodu 
- Funkcie robíš aby sa ti neopakoval kód. A tiež keď ho potrebuješ sprehľadniť. Keď máš sériu príkazov, ktoré dokopy majú ucelenú misiu, spravíš z nich funkciu.
- funkcia vidi len premenne, ktore su v nej v zatvorke aj ked sa te iste premenne opakuju v code 
- function sum ( $a, $b)
    {
        return $a * $b
    } 
    $sum = sum ($idem count; $item price) 
    - item count je $a a item price je $b, cize parametre podla poradia 
   
    // discount 
- function discount ( $selling_price; $discount_percent )
{
    $actual price = $selling_price - $selling_price * ($discount_percentage / 100); 
    return $actual_price 
}
    $coupon = 13; 
    $sum - $sum * ($coupon / 100); 
  - ak dostaneme hodnotu z DOM, tak typeof je string, cize ak chceme z toho srpavit cislo, tak let cost = Number(document.querySelector...), inak calculate amount bude 'cost' + '10' = cost10, co je zle 
  - queryselector('input') //ak sa odkazujem na tagy alebo tahy, tak je to bez bodky, ak na class, tak ('.name')
  - v DOM, ak do <input placeholder="Order amount" class="calculate"> textboxu chcem vlozit JS hodnotu, tak vo funkcii pouzijem value namiesto innerHTML ako document.querySelector('.calculate').value 
  - DOM mavaju koncovku .innerHTML, .innerText, .value oznacime text v <input> textboxe napriklad .classList.add('Subscribed'), .classList.remove('Unsubscribed') 
  - Array [10, 20, 30] pri console.log(Array[0]) vyznacime 10 a pri 1 vyznacime 20 a pri 2 vyznacime 30 v array 
  - Array.push(100) pridame za 30 dalsiu hodnotu a .splice(0, 1) odstrani hodnotu z array
  - po zadani do <input> text a stlaceni Ok sa textbox vynuluje ako todoList.value = '' 
  - loop: for (let i=0; i<array.length; i++) potom console.log 
  - lepsie ako for je [].forEach(function(value){console.log(value)}) ktory zobrazi kazdu hodnotu v array zozname cez value parameter
  - todoList.length je pocet hodnot v array [] - 1, kedze index zacina od 0 hodnoty 
  - document.querySelector('.button').addEventListener('click' (event) => {
      playgame(rock) event click je namiesto onClick atributu v <button onClick="" toto mozeme vymazat>
  }) 
  - document.querySelectorAll vyznaco vsetky vsetky veci, napriklad buttons s danou classou \
  || 0 je defaultna funkcia, kedy ak neplati pravidlo alebo sa nieco nenachadza niekde, tak da 0 hodnotu  
  - ak vo funkcii pouzijem let, tak let hodnota existuje len vo funkcii, ak pouizjem var, tak var hodnota existuje vo funkcii aj ked je var napisany mimo funkcii 
  - ...rest parametre používaš vo funkciách, zozbierajú všetky dáta čo do funkcie pošleš do poľa, s ktorým si potom môžeš robiť čo chceš, ty zvrhlík:
function doMath( times, ...rest ) {
    return rest.reduce( ( sum, value ) => sum + value ) * times;
}
- alebo ak chcem pouzit vsekty mena v [], tak jedna z monzosti je const allMembers = [...this.mebmbers] 
  - const [bacon, pizza, cheese] 
     console.log(bacon, ...rest) //...rest displays pizza and cheese 
 - Generator funkcie vracajú iterátor. Sú to funkcie, cez ktoré môžeš krokovať. Zastavia sa vždy, keď narazia na yield. To je ako return, vráti hodnotu, ale funkcia sa iba pozastaví.
A cez .next() ju môžeš znova rozbehnúť. Pri return ak zbehne, uz viac sa return nespusti. Funkcia normálne beží, kým nenarazí na yield, kedy sa pozastaví.
Po .next() znova normálne beží, až kým nenarazí na ďalší yield alebo koniec. Cize ak je vo funkcii yield len raz, tak pri opakovanom sputeni sa spuste len raz ak yield nevlozim do while (true) {}
    function *kittenMe() {
        yield 'Liz McClarnon';
        yield 'Kerry Katona';
        yield 'Heidi Range';
    }
    // generator funkcie vracajú iterator obj
    let iter = kittenMe();
    // .next() ju spustí a potom môžeš krokovať 
    iter.next();
    iter.next().value;
    

    function *idGenerator() {
    let id = 0;
    // nekonecny cyklus (aby fcia neskoncila, ked narazi na posledny riadok)
    while ( true ) {
        yield ++id;
    }}
    let gen = idGenerator();
    gen.next(); // 1
    gen.next(); // 2
    gen.next(); // 3

    - Promise je hodnota, ktorú nemáš, ale budeš mať v budúcnosti. Je to sľub, že v premennej sa raz ocitne hodnota. Napríklad keď sa nám AJAXom vráti od servera. 
    - Buď používať promises. Aj keď o tom nebudeš vedieť. Život je už raz taký. Potrebuješ vedieť, že ak funkcia vracia promise (o čom sa určite dokumentácia kódu, čo budeš používať, zmieni) ty výsledok odchytíš cez then() a chybu cez catch() 
      
    var promise = new Promise(function(resolve, reject) { 
      sprav niečo zrejme asynchrónne (ajax, timer)
      if (everything is ok) {
      resolve("Stuff worked!");
      }
      else {
        reject(Error("It broke"));
      }
    });
      
    // a takto to použiješ 
    promise.then(function(result) {
      console.log(result); // "Stuff worked!"
    });
      
    promise.catch(function(err) {
      console.log(err); // Error: "It broke"
    });
    function start(id, time) {
      return new Promise( function(resolve, reject) {
          setTimeout( () => resolve(`timer ${id} done`), time )
      });
  }
  start(1, 4000).then( res => console.log(res) );
  start(2, 1000).then( res => console.log(res) );
  start(3, 2500).then( res => console.log(res) );

Pomocou Promise.all() a Promise.race() vieš spustiť funkciu keď dobehnú všetky sľuby alebo keď sa vráti prvý. 
promise.all() a promise.race() 

// nastartujeme 3 casovace, kazdy vracia promise
let timer1 = start(1, 4000);
let timer2 = start(2, 1000);pars
let timer3 = start(3, 2500);
  
// ked dobehnu VSETKY
Promise.all([ timer1, timer2, timer3 ]).then(function(res) {
    console.log('all done', res);
});
  
// ked dobehne PRVY
Promise.race([ timer1, timer2, timer3 ]).then(function(res) {
    console.log('found first', res);
});

Buď používať promises. Aj keď o tom nebudeš vedieť. Život je už raz taký. Potrebuješ vedieť, že ak funkcia vracia promise (o čom sa určite dokumentácia kódu, čo budeš používať, zmieni) ty výsledok odchytíš cez then() a chybu cez catch(). Then() zavola resolve, catch() zavola reject. 

promise = get('https://itunes.apple.com/search?term=kolowrat');
promise.then(
    res => console.log( JSON.parse(res) )
).catch(
    err => console.error(err, 'OH NO')
);
//     ALEBO
promise = get('https://itunes.apple.ggg/search?term=kolowrat');
promise.then(
    res => console.log( JSON.parse(res) ),
    err => console.error(err, 'OH NO')
);

setState s objektom
použi, ak do stavu ukladáš kompletne novú hodnotu

this.setState({
    dude: 'hello!!';
})
setState s funkciou
ak pre nový stav potrebuješ aktuálnu hodnotu stavu (to, čo je v stave momentálne)

this.setState(state => {
    return {
        characters: [...state.characters, newDude]
    }
})

v state objekte je teraz správny, aktuálny stav komponentu
setState objekt vs funkcia https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous 
- cize zmena stavu sa robi cez setState (state => {funkcia ktora nieco robi napriklad item change})
v reacte je zauzivane, ze ak su to funkcie reagujuce na nejaku udalost, tak sa pise "on" a "handle". 
Napriklad: <input className="Input" onKeyPress{this.handleSubmit}>; handleSubmit = event => {if (event.key === 'Enter') {...}}
'This' sa odkazuje na objekt, ktory je pred funkcitou ako me.name(), cize objekty v const me = {}. 
- VYMAZAŤ objekt z poľa môžeš cez filter
this.setState(state => {
    return {characters: state.characters.filter(item => item !== dude)}}) //cize vymaze dany input 


// Typescript 

class Invoice {
  client: string; 
  details: string; 
  amount: number;

  constructior (c:string, d:string, a:number){
    this.client = c; 
    this.details= d; 
    this.amount= a;
    }
    format () => { ${this.client} owes ${this.amount} }} 

const InvOne = new Invoice ('Sasuke', 'on the mission', 250) 
let invoice: Invoice [] = [] //dovoli vlozit len invoice cez invoice.push() // alebo invoice: string[] = [];

- private details: string // nam dovoluje zmenit a citat hodnotu len v ramci class objektu 
- public amount: number // default one mozeme zmenit a citat hodnotu mimo aj vo vnutri class objektu 
- readonly client: string // mozeme len citat hodnotu a nie ju zmenit 
- interface je len v typescripte a pomaha definovat strukturu objektov, cize string, number... samostatne v componente mimo array s objektami 
- pri interface sa pouizva pascal, cize prve pismeno je velke 
  interface isPerson {
    name: string; 
    age: number; 
    speak(a: string): void; // moze byt cokolvek namiesto a 
    spend(a:number); 
  }
  const me: isPerson = {
    name: 'Sasuke'; 
    age: 30; 
    speak(taxt: string): void {console.log(text)};
    spend(amount: number): number {console.log('I spent', amount); return amount;}
  }
  console.log(me) 

      const greetPerson = (person:isPerson) => console.log('Hello', person.name)

- interface definuje objekty ako napisa a nizsie const me napriklad vkladam priamo hodnoty 
- render method na vytvorenie LI elementu  v constructore: 

      class ListTemplate {
          constructor(private container: HTMLUListRElement) {} // private pred hodnotou znamena, ze vsetko za : sa priradi ku container ako argument a   nemusime definovat 
      render(item:HasFormatter, heading:string, position: 'start' | 'end') //cokolvek vlozim do item: musi byt HasFormatter 
        const li = document.createElement('li'); 
        const h3 = document.createElement('h3');
        h3.innerText = heading; 
        li.append(h3); 

      const p = document.createElement('p') 
      p.innerText = item.format() 
      li.append(p); //vytvori <p> tag 
      }

      if(position==='start') 
      {this.container.prepend(li)}; 
      else {this.container.append(li) 
      }
      const ul = document.createElement('ul')!; 
      const list = new ListTemplate(ul); 

      list.render(doc,type.value,'end') //doc musime este definovat 





//Typescript BitFumes 

let guests: string[] = ['Naruto','Kakashi','Sasuke'] 
const killBill = function (name:string): string { //function (): string je return value ako string
  return name.toUpperCase()
} 
- napriklad ak je funkcia na vyratanie dane ako price + (price*0,2) a potom dalej sa odkazem na celu funkciu, ktoru chcem vydelit 2, tak sa funkcia cela definuje ako number type 
  const tax = (price:number): number => {price + (price*0,2)} 
  const output = tax / 2 

 - tsc v terminaly vytvori index.ts file 
 - npm vytvori package.json file 

- price == null //normal checking of the value 
- price === null //strict checking of the value and the type 

- klasicka funkcia bez return vracia defaultne void, cize nic 
- never type The type represents types of values that never occur. For example it can be used with functions that never return or with functions that that always throw an exception 
- With solid grasp of what never and void types are we can conclude that the types are quite different. void is used whenever a function does not return anything explicitly (usually that means it returns undefined implicitly) and never whenever a function never returns at all.
Function sum (price:number): never {
}

- enum type you can use an Enum type when you need a fixed set of pre-defined constant values that are known at the compile-time itself. Examples can be days of the week, seasons of the year, etc. The following characteristics make enum a 'special' class: enum constants cannot be overridden.
- enum nepozna javascript 
  enum Week {
    Monday, //mozem dat =1 a zazne od 1, nie od 0 a staci definovat len prvu hodnotu cislom, alebo dam string, ale potom definujem kazdy object 
    Tuesday, 
    Wednesday, 
  }
  console.log (Week[0]) //zobrazi Monday 
  console.log (Week[Monday]) //zobrazi 0 

let i: number = 2; 
while (i < 4) {
    console.log( "Block statement execution no." + i )
    i++;
}

let fruit : {
  name: string, 
  taste: string;
} = {
  name: "Mango", 
  taste: "Sweet",
}

type fruit = {} //definujem types polozky 

let fruit1: fruit = {} //vytvoril som si vlastny type pre hodnoty s nazvom ,,fruit'' ako v pripade angular book/books 


interface fruid { 
  name: string, 
  taste: stirng, 
  price: number 
}

interface Mango extends fruit { //teraz ovocie mango ma vsetky hodnoty z interface fruit 
  color: string,
}

// Class and Constructor 
class Coordinate { //x,y su properties 
    x: number; //mozeme x a y hodnoty ochranit proti prepisaniu cez protected // private je to iste, ale funguje len v ramci class 
    y: number;

    constructor(x: number, y: number) { //x,y su parametre
        this.x = x //ak zmenim this.x = 34, tak hodnota x sa zmeni na 34 
        this.y = y
    }
}
const point = new Coordinate(44, 5) // ak vytvorim new class, tak musime vlozit parametre z constructora 
console.log(point.x);

- ak v Class definujeme x a y ako protected, tak danu hodnotu nemozeme zmenit, len v constructore 
- data mozeme ochranit pred prepisanim aj ako readonly name: string

class Fruit {
    readonly price: number;
    protected static count: number = 0

    constructor(price: number) {
        this.price = price //this sa odkazuje na instance (objekt) v ramci fruit classu 
        Fruit.count++ // fruit v tomto pripade priamo definujeme cely class, nie jeho instances 
    }

    static getCount() {
        return Fruit.count
    }
}

const mango = new Fruit(20)
console.log(Fruit.getCount());

const apple = new Fruit(23)
console.log(Fruit.getCount());

let arrNum = [20, 23, 25, 30] 

function findArrayNum (ArrayNum: number[]) { //array s cislami mozeme definovat ako type hodnoty number[]
  return something 
}














  // Angular 

  1, angular modules group code together; lazy loading  
  2, components: for UI, build reusable components, one way data flow 
  3, directives: component-control html, ngIf, ngModel, how you tap into lower level DOM structure 
  4, pipes: transforming data // {{name | titlecase}} mena su velkym, aj ked napisem male pismena 
  5, services: most important, head of API calls, dependency injection 
  6, router: handles URL changes, authorization of web pages 

- two way binding: 
    favoriteAnimal: string="turtle" 
    on html component put <input [(ngModel)]="favoriteAnimal" /> //ngmodel works only on input and text ares buttons 
                          <p>{{favouriteAnimal}}</p> 

- výpis stavu do šablóny cez {{ zložené zátvorky }}
dude: string = 'Jake the Dog'
<p class="preview">
    {{ dude }} // ako v JS ${}
</p>

- hranaté zátvorky pre [atribúty] a obyčajné pre (eventy)
<form class="add-new" (submit)="addDude($event)">
    <input type="text" [value]="dude" />
</form>

zobraz element za if podmienky
<small *ngIf="podmienka"> 

<form class="add-new" (keydown.enter)="addDude($event)"> // takto jednoducho namiesto addeventlistener dam event na enter  

- addDude (event: Event), alebo addDude(dude: String) sa musia udalosti specifikovat, ze co to je 
- ak sa maju pridavat do inputu hodnoty, tak davam data = ' ' 
- odkaz na iny component je cez <a routerLink="/tunes">Tunes</a> nie cez href, lebo to hodi hypertext link 
- ak chceme aktivny link, co chceme, tak <a routerLinkActive="active" routerLink="/tunes">Tunes</a> 
- angular nedovoluje samouzatvaracie tagy, iba tie dovoluje elementy, ktore neobsahuju dalsie elementy ako img, input, base 

- pri vytvarani html, ts a scss komponentov sa vsetky tieto 3 groupnu pod hlavnu stranku alebo podstranku a vzjomne prepoja cez ts subor 
- napriklad v html komponente sa odkazujes na iny komponenet ceztagy <tunes-list></tunes-list>
- medzi podstranky sa prepinam routerom, ktory som naistanloval cez terminal 
- komponenty patria pod moduly, ktory ich usmernuje a componenty maju svoje services (kod s vlastnou ulohou) 
  @component ({
    selector: 'app-tunes' 
    templateUrl: './tunes.html' 
    styleUrl: ['./tunes.scss']
  })
- generate service
    ng g service services/song
    // tú potom natiahneš do súboru, ktorý ju má používať
  import { SongService } from '../../services/song.service'
    // vdaka tomuto v celom subore ziskas pristup k songService
  constructor(private songService: SongService) { ... }
    // a mozes ju pouzivat
  ngOnInit(): void {
    this.songs = this.songService.getSongs()
  } 
  - keyup.enter (ked dam prst hore z klavesy), keydown.enter (ked stlacim klavesu) = (submit) 
  - pri submit musim mat v ts subore event.preventDefault () 

- v rodičovi cez prop (html atribút) pošleš hodnotu potomkovi

<header>
    <the-navigation brand="main"></the-navigation>
<header>    
  
<footer>
    <the-navigation brand="secondary"></the-navigation>
</footer>

  // v dieťati cez @Input dekorátor označíš vlastnosť ako zmeniteľnú rodičom
@Input() brand: string = 'main'
  // rodič teraz môže zmeniť hodnotu brand
  // hranatými zátvorkami môžeš posielať decku JS kód, hodnoty premenných...
<the-navigation [brand]="33 * 2 + 3">
<the-navigation [brand]="totoJePremenna">

- z dieťaťa musíš odpaľovať udalosti smerom hore k rodičovi

1) v dieťati najprv naimportujuješ  EventEmitter a @Output
import { Component, OnInit, EventEmitter, Output } from '@angular/core'

2) vymyslíš si Event
export class TunesSearchFormComponent implements OnInit {
    titleHasChanged = new EventEmitter()

3) označíš ho ako poslateľný rodičovi, cez @Output
    @Output() titleHasChanged = new EventEmitter()

  // môžeš mu určiť aj typ hodnoty, ktorú budeš posielať
new EventEmitter<string>()

4) odošleš ho cez .emit()
<form (keydown.enter)="titleHasChanged.emit(value)">

  // môžeš poslať aj hodnotu

5) na rodičovi potom zareaguješ na udalosť, rovnako ako keby šlo o click povedzme
<tunes-search-form
    (titleHasChanged)="title = $event"
></tunes-search-form>

- datova komunikacia medzi komponentami je velmi obsiahla, ale najlepsia je top-down z rodica k decku 
angular vytvorí novú premennú $event, v nej nájdeš hodnotu, ktorú si poslal z decka

  - lifecycle metóda onChanges sa spustí vždy, keď sa zmení niektorá z @Input() vlastností
    // naimportujes
  export class TunesListComponent implements OnInit, OnChanges {}
    // ak mame newSong
  @Input() newSong: string = ''
    // mozeme sledovat jeho zmenu 
  ngOnChanges(changes) {
    console.dir(changes.newSong.currentValue)
}
    // objekt changes v typescripte je typu SimpleChange
    // naimportujes
  import { ..., SimpleChange }
  changes: { [propKey: string]: SimpleChange } 

- sprav si funkciu, ktorá z objektu vyextrahuje len chcené vlastnosti
    //extractData
    public extractData({ trackName: title }) {
    return { title }
}
    //potom do nej pošleš objekt extractData(obj) a vráti sa ti nový objekt, v ktorom zostane len title 
    
- ngModules stoja nad vsetkymi kodmi a su velmi dolezite ako hlavna vetva 
ak mame viac modulov, tak ich musime do hlavneho modulu importovat (app module) 
- najlepsie je v zlozke app mat celu kniznicu a v html subore v <html lang="en" ng-app> sa odkazat na application 
- potom do <input type="text" ng-model="data"> na ukladanie dat a potom sa odkazat na <p>{{data}}</p> 
- na ng expressions sa odkazuje cez {{}} ako napriklad class="{{color}} alebo array a podobne, cize nieco ako ${data}
- myNinjaApp.config(function(){//funkcia}) sa spusti pred tym, ako sa spysti run funkcia myNinjaApp.run(function() {//funkcia}) v module componente 
- <li><div ng-repeat="ninja in ninjas">{{ninja}}</div></li> a odkazem sa na ninj[//array] 
- The ngmodel directive binds the value of HTML controls (input, select, textarea) to application data. With the ng-model directive you can bind the value of an input field to a variable created in Angular. 

- <input type="text" ng-modul="search" /> // modul search sa odkaze na filter search nizsie na ninjas array 
  <li><div ng-repeat="ninja in ninjas | OrderBy='name' | filter=search">{{ninja}}</div></li> //search sa odkazuje na module a do inputu ak zacnem pisat prve pismena, tak uz prednastavuje vysledok, cize Yo ukaze Yoshiho 
- <li><div ng-repeat="ninja in ninjas | OrderBy='name' | filter=search">{{ninja.name}} - {{ninja.amount | currency:'€' }}</div></li> zobrazi amount v mene 
- <li><div ng-repeat="ninja in ninjas | OrderBy='name' | filter=search">{{ninja.name}} ng-show="ninja.available"</div></li> pri filtrovani v input boxe sa ukaze len ninja s available:true v array zozname  

- *ngif je v podstate JS IF(){} funkcia: 
    <ng-container *ngif="pokemonName.length"; then="pokemonList"; else="noPokemon"></ng-container> //do ngif sa moze vklada true or false boolean value 
    <ng-template #pokemonList>All pokemon displayed</ng-template>; 
    <ng-template #noPokemon>pokemon what?</ng-template> 

- dobre je si spravit Pokemon objectes (typy pokemonov) v db.json componente a cez interface Pokemon definovat riadky, co je to za tyo (string,...)
- @input means put the data from top to down from smart to dumb component 

- @output means put the data from down to top 
    <button (click)="onRemove()">Remove Pokemon</button>
      onRemove() {this.remove.} 

- we use observables to make our code asynch 

- radio button needs to be in a form tag
    <form #form ="ngform"> 
    Pokemon name: 
    <input type="text" [(ngmodel)]="pokemon.name" name="name" /> 
    <label> 
      <input type="radio" name="isCool" [value]="true" [ngModel]="pokemon.isCool" /> Pokemon is cool 
    </label> 
    //
    <label> 
      <input type="radio" name="isCool" [value]="false" #pokemonName="ngModel" [ngModel]="pokemon.isCool" (ngModelChange)="toggleIsCool ($event)" /> Pokemon is not cool //ngModelChange znamena event, ak sa zmeni ngModel 
    </label> 
    </form> 

    - v JS je GetElementById("") na DOM referenciu a v angulare sa pouziva @viewchild("") 
      export class pokemonListComponent implements OnInIt, AfterViewInIt; 
      @viewChild("pokemonRef") pokemonRef!: ElementRef    =>    this.pokemonRef.nativeElement.innerText="Pikachu" 
      <div #pokemonRef></div>

      - <ng-container> pouzijeme, ak nechceme pouzit <div> 
      - <ng-template> je to iste ako html <template> 
      - <ngContent>

- Directives: 
      - vytvorim TS component s velkou funkciou a directivmi v nej
      - vlozim to do app module do @NgModule declaration: [] a nizsie vytvorim boostrap: [] 
      - vsetky components sa sem importuju 
      - v html subore sa cez napriklad <div ,,nazov funkcie,,> odkazem na dany directive 
      - ak v constructore spravim service: something, tak do app module to importnem do providers 
    

Angular new project 
- instal Node.JS a napis $ng new NinjaProject do VS Code terminalu => project 
- znova zadaj $ng serve, aby sa otvoril localhost 4200 
- kazdy applikacia ma aspon jeden modul a svoje components 
- libraries su vacsinou v dependency v module zlozke 
- medzi modulmi mozeme exportovat a impotovat classes, functions, objects, ... 

  let a; // v tomto pripade je value any 
  let b: number [1,2,3]; 
  const ColorRed = 0; 
  const ColorGreen = 1; 
  const ColorBlue = 2; 
      or with enum 
  enum color: {red, green, blue} //enum is a group of related constants 
  let backgroundColor = Color.R/G/B/; 
  interface Point {
    x: number, 
    y:number
  } 
  let drawPoint = (point: Point) => { } 

  let point = new Point() //() su anotacia // new Point davame, ak je uz raz Point definovany ako class a nizsie v code sa definuje let point ako object 
  point.x=1; 
  point.y=2; 
  point.draw(); 

- What is the difference between Interface and Class in TypeScript?
  A class is a blueprint from which we can create objects that share the same configuration — properties and methods. An interface is a group of related properties and methods that describe an object, but neither provides implementation nor initialization for them. An interface is an abstract type, it does not contain any code as a class does. If a function is in class, we call it a method and in class could be more functions.
- every class can have a constructor, which is a method when we create an instance of that class like let point = new Point() 
    class Point { 
      x: number; 
      y: number; 
    } 
    constructor (x:number, y:number) {
      this.x=x; 
      this.y=y 
    }
        // alebo 
    class Point { 
      constructor (private X?:number, private y?: number)   //namiesto this.x... mozeme to skratit na prefix s tym, ze private je len v ramci class,     inak musim zadat public 
    }
    

- <button (click)="handleClick()"> Click me </button> //spravim funkciu v TS component 
    <div *ngIf="clicked"> // po kliknuti na button sa zobrazia nizsie data 
    <h1>Hatake Kakashi</h1> 
    <img [src]="kakashi.jpg">
    <p>Jounin since {{ninja.year}}</p> 
    </div>

<div>
<ul>
<li *ngFor="let member of members">{{member}}></li>   //ngFor s {{}} generuje nove <li> pri button click // membersje [] a member su hodnoty, ktore sa mi urcili v members [] napriklad {{member.name}}; {{member.age}} ak mame object v array 
</ul> 
{{current date | date }} //pipe pre date formatuje datum pri kazdom inpute hodnoty 
</div>

<input 
type="text"
#addMemberInput // vztahuje sa k (input) pre value  
placeholder="Name" 
(input)="onInput(addMemberInput.value)" // event pre <input> s funkciou s value, kedy sa vlozi hodnota, ktoru napiseme do input tagu; zoberie value addMemberInput z #addMemberInput
[value]="newMemberName"  //ak je value v [], tak cez attribure directives sa updatne dynamicky value na blank po button click a vztahuje sa na funkciu 
/> 
<button (click)="addMember()">Add name</button>
<p *ngIf="errorMessage">{{errorMessage}}</p> //ak nebude *ngIf, tak cez console log sa bude <p> stale zobrazovat, aj ked nebude error message = boolean 
</div> 
  
  exports class AppComponent {
    newMemberName = ''; 
    members: string[] = [];
    errorMessage = ''; 
    currentDate = new Date (); 
  
  addMember() {
  this.members.push(this.newMemberName);
  this.newMemberName = ""  // tento argument vrati <input> value po zadani mena na blank 
  
  if(!this.newMemberName) {
    this.errorMessage = "Name can't be empty"
    return; }
  }
  
  onInput() {
  this.newMemberName = member // pre generovanie <li> tagov 
  }
} 




Powershell 

- cls //reset your powershell data 
- ipconfig |clip //copy all the data automaticaly, then open wordpad and paste 
- ipconfig /flushdns //deletes dns cache 
- chkdsk /f //checks the errors in you computer and fix them 
- sfc / scannow //system file scan and repair 
- DISM /Online /Cleanup /CheckHealth {then RestoreHealth command} //diploy image servicing and management fixes your system image 
- shutdown /r /fw /f /t 0 //restart computer to the BIOS 
- copy /b kitten.jpg+secrets.zip secretphoto.jpg //all your photos put into folder, zip it and then put the zip folder into random      photo as a cover 
- netsh wlan show profile "UPC3268902" key=clear //shows the wifi and password 
- systeminfo //system informations 
- explorer . //opens file 
- start www.youtube.com //open website 
- Get-Process excel | Stop-Process //stops excel 
- Get-Alias //commands 



REST APi

1, priecinok config, aby sa databasa prepojila 
2, precinok models pre modely userov 
3, precinok controllers je samotna logika kodu, naprikad ak budem chciet vytvorit noveho usera, tak v controllers 
4, precinok routes.js napriklad www.facebook.com/profile, tak ten profile je routes 
5, subor .env je pre kazdeho klienta iny podla servera 
- preto .env subor je tajny a su tam data (values) pre daneho klienta, ktoremu robime appku
- ked vytvorime .env, tak ho dostaneme do config.js 
6, index.js v models sa stara o to, aby nam fungovali a dalo sa pracovat s kodmi a importujeme sem data z config.js 
7, vytvorim course.model.js 
8, vytvorime CoursesController file v zlozke Controller na upravu modelu cez funkciu 
9, v postman appke vytvorime cez collections nove kurzy: jeden get, dalsi post, dalsi put a delete (potreba mat ucet) 

if (!user.changed("password")) {
    return;
  }
        // Dobrý deň, v tejto časti kódu sa porovnáva heslo, ktoré zadal užívateľ pri prihlásení s heslom, ktoré je uložené v databáze. Ak sa nezhodujú, tak sa zruší vykonávanie funkcie, inak sa pokračuje na hashovanie hesla. 
10, v zlozke models vytvorit user.model.js na vytvorenie a hashovanie hesla pre userov 
11, v zlozke controllers vytvorime Authenticationcontroller.js an vytvorenie, prihlasenie a odhlasenie usera 
12, do routes.js vlozime nove data /* LOGIN REGISTER LOGOUT */   
13, v postmanovy vytvorim novy collection Authenticationa vytvorim register, login a logout v jsone  
14, vytvorim AuthenticationController.js 
15, do routes.js pridat authenticationcontroller na kontrolu, ci sme prihlaseny na stranke 
16, v postmane sa odhlasime (ziadne cookies) a otestujeme prihlasenie, hladanie, ci funguje kod  