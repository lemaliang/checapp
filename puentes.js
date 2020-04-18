const puentesList = [
    {
        Number: 1,
        km: "K049+489.100",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 2,
        km: "K050+776.300",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 3,
        km: "K061+120.000",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 4,
        km: "K062+480.000",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 5,
        km: "K072+975.000",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 6,
        km: "K082+669.791",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 7,
        km: "K087+690.000",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 8,
        km: "K095+956.150",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 9,
        km: "K097+255.560",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 10,
        km: "K132+213.000",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 11,
        km: "K144+605.000",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 12,
        km: "K148+490.000",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 13,
        km: "K150+720.000",
        ice: true,
        aya: true,
        recope: true,
    }
]

const mylist = document.getElementById("bridges");

for(let puentes of puentesList){
    let newListBridges = document.createElement('li');
    newListBridges.textContent = puentes.km;

    mylist.appendChild(newListBridges);

}

let cantidad_puentes = document.getElementById("cantPuente");

console.log(puentesList.length);

cantidad_puentes.textContent = puentesList.length+1;