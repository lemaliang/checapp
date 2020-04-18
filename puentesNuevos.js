const puentesNuevos = [
    {
        Number: 1,
        name: "Río Corinto (1号桥)",
        km: "K050+975",
        largo: 10,
    },
    {
        Number: 2,
        name: "Río Costa Rica (2号桥)",
        km: "K054+300",
        largo: 10,
    },
    {
        Number: 3,
        name: "Río Blanco (3号桥)",
        km: "K056+187",
        largo: 10,
    },
    {
        Number: 4,
        name: "Río Danta (4号桥)",
        km: "K057+334",
        largo: 10,
    },
    {
        Number: 5,
        name: "Río Toro Amarillo (5号桥)",
        km: "K059+124",
        largo: 10,
    },
    {
        Number: 6,
        name: "Río Molinos (6号桥)",
        km: "K064+884",
        largo: 10,
    },
    {
        Number: 7,
        name: "Río Jiménez (7号桥)",
        km: "K067+336",
        largo: 10,
    },
    {
        Number: 8,
        name: "Río Roca (8号桥)",
        km: "K067+512",
        largo: 10,
    },
    {
        Number: 9,
        name: "Río Guácimo (9号桥)",
        km: "K073+075",
        largo: 10,
    },
    {
        Number: 10,
        name: "Río Guacimito (10号桥)",
        km: "K074+049",
        largo: 10,
    },
    {
        Number: 11,
        name: "Río Parismina (11号桥)",
        km: "K078+187",
        largo: 10,
    },
    {
        Number: 12,
        name: "Río Dos Novillos (12号桥)",
        km: "K083+035",
        largo: 10,
    },
    {
        Number: 13,
        name: "Río Destierro (13号桥)",
        km: "K084+269",
        largo: 10,
    },
    {
        Number: 14,
        name: "Río Dos Vueltas (14号桥)",
        km: "K089+283",
        largo: 10,
    },
    {
        Number: 15,
        name: "P Sup Ferrocarril (15号桥)",
        km: "K094+023",
        largo: 10,
    },
    {
        Number: 16,
        name: "Río Reventazón (16号桥)",
        km: "K094+288",
        largo: 10,
    },
    {
        Number: 17,
        name: "Río Siquirres (17号桥)",
        km: "K097+118",
        largo: 10,
    },
    {
        Number: 18,
        name: "Río Pacuare (18号桥)",
        km: "K099+668",
        largo: 10,
    },
    {
        Number: 19,
        name: "Río Pacuarito (19号桥)",
        km: "K101+586",
        largo: 10,
    },
    {
        Number: 20,
        name: "Río Cimarrones (20号桥)",
        km: "K106+552",
        largo: 10,
    },
    {
        Number: 21,
        name: "Río Hondo (21号桥)",
        km: "K107+814",
        largo: 10,
    },
    {
        Number: 22,
        name: "Río Madre de Dios (22号桥)",
        km: "K109+666",
        largo: 10,
    },
    {
        Number: 23,
        name: "Río Barbilla (23号桥)",
        km: "K115+506",
        largo: 10,
    },
    {
        Number: 24,
        name: "Río Quebrada Calderón (24号桥)",
        km: "K120+613",
        largo: 10,
    },
    {
        Number: 25,
        name: "Río Aguas Claras (25号桥)",
        km: "K121+444",
        largo: 10,
    },
    {
        Number: 26,
        name: "Río San Miguel (6号桥)",
        km: "K123+456",
        largo: 10,
    },
    {
        Number: 27,
        name: "Río Chiripó (27号桥)",
        km: "K125+308",
        largo: 10,
    },
    {
        Number: 28,
        name: "Río Escondido (28号桥)",
        km: "K133+109",
        largo: 10,
    },
    {
        Number: 29,
        name: "Río Cuba (29号桥)",
        km: "K133+912",
        largo: 10,
    },
    {
        Number: 30,
        name: "Río Rojo (30号桥)",
        km: "K134+857",
        largo: 10,
    },
    {
        Number: 31,
        name: "Río Toro (31号桥)",
        km: "K135+075",
        largo: 10,
    },
    {
        Number: 32,
        name: "Río Madre (32号桥)",
        km: "K141+278",
        largo: 10,
    },
    {
        Number: 33,
        name: "Río Blanco (33号桥)",
        km: "K145+145",
        largo: 10,
    },
]

const mylistOl = document.getElementById("newBridges");

for(let newBridges of puentesNuevos){
    let newListBridges = document.createElement('li');
    newListBridges.textContent = `${newBridges.name}  -----►  ${newBridges.km}`;

    mylistOl.appendChild(newListBridges);
}




let cantidad_puentes_nuevos = document.getElementById("cantPuentesNuevos");
cantidad_puentes_nuevos.textContent = puentesNuevos.length;