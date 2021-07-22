const inventors = [
    {first: 'Albert', last:'Einstein', year:1879, passed: 1955},
    {first: 'Isaac', last:'Newton', year:1643, passed: 1727},
    {first: 'Galileo', last:'Galilei', year:1564, passed: 1642},
    {first: 'Marie', last:'Curie', year:1867, passed: 1934},
    {first: 'Johannes', last:'Kepler', year:1571, passed: 1630},
    {first: 'Nicolaus', last:'Copernicus', year:1473, passed: 1543},
    {first: 'Max', last:'Planck', year:1858, passed: 1947},
]

const people = ['Beck, Glenn','Becker, Carl', 'Becket, Samuel','Beddoes, Wick', 'Becher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem','Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lioyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambroce', 'Biko, Steve', 'Billings, Josh', 'Briondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Black, Robert', 'Black, Tony', 'Blake, William'
]

const zadaniePierwsze = inventors.filter((x) =>{return x.year>1500 && x.year<1599})

const zadanieDrugie = inventors.map((x) => `${x.first} ${x.last}`)

const zadanieTrzecie = inventors.sort((a,b) => {return a.year-b.year})

const zadanieCzwarte = inventors.reduce((a,b)=>{return a+(b.passed-b.year)},0)

const zadaniePiate = inventors.sort((a,b)=>{return (b.passed-b.year)-(a.passed-a.year)})

const zadanieSiodme = people.sort((a,b)=>
{
    return  a.substring(0,a.indexOf(',')).localeCompare(b.substring(0,b.indexOf(',')))
}
)
// people[0].substring(0,people[0].indexOf(',')) 


// console.log(zadanieSiodme)

const tablica = ['Pierwsze','Drugie','Trzecie','Czwarte','Piąte','Szóste']

const posortowanaTablica = tablica.sort((a,b) => {
    return a.localeCompare(b)
})


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']

const transportation = data.reduce(function(obj, item) {
if(!obj[item]){
    obj[item]=0;
}
obj[item]++
return obj
},{})
console.log(transportation)