const retornosList = [
    {
        Number: 1,
        name: "U1",
        km: "K071+264",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 2,
        name: "U2",
        km: "K079+101",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 3,
        name: "U3",
        km: "K086+237",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 4,
        name: "U4",
        km: "K102+800",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 5,
        name: "U5",
        km: "K108+286",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 6,
        name: "U6",
        km: "K113+366",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 7,
        name: "U7",
        km: "K120+168",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 8,
        name: "U8",
        km: "K129+956",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 9,
        name: "U1",
        km: "K135+705",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 10,
        name: "U10",
        km: "K141+600",
        ice: true,
        aya: true,
        recope: true,
    },
    {
        Number: 11,
        name: "U11",
        km: "K151+776",
        ice: true,
        aya: true,
        recope: true,
    },
]

const mylist = document.getElementById("uturn");

for(let retornos of retornosList){
    let newListReturn = document.createElement('li');
    newListReturn.textContent = `${retornos.name}-----► ${retornos.km}`;

    mylist.appendChild(newListReturn);

}

let cantidad_puentes = document.getElementById("cantRetornos");
cantidad_puentes.textContent = retornosList.length;