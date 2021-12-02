import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pokemons',
  templateUrl: './listar-pokemons.component.html',
  styleUrls: ['./listar-pokemons.component.css']
})
export class ListarPokemonsComponent implements OnInit {
  pokemons = {
    count: 1118,
    next: "https://pokeapi.co/api/v2/pokemon?offset=300&limit=100",
    previous: "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100",
    results: [
      {
        name: "unown",
        url: "https://pokeapi.co/api/v2/pokemon/201/"
      },
      {
        name: "wobbuffet",
        url: "https://pokeapi.co/api/v2/pokemon/202/"
      },
      {
        name: "girafarig",
        url: "https://pokeapi.co/api/v2/pokemon/203/"
      },
      {
        name: "pineco",
        url: "https://pokeapi.co/api/v2/pokemon/204/"
      },
      {
        name: "forretress",
        url: "https://pokeapi.co/api/v2/pokemon/205/"
      },
      {
        name: "dunsparce",
        url: "https://pokeapi.co/api/v2/pokemon/206/"
      },
      {
        name: "gligar",
        url: "https://pokeapi.co/api/v2/pokemon/207/"
      },
      {
        name: "steelix",
        url: "https://pokeapi.co/api/v2/pokemon/208/"
      },
      {
        name: "snubbull",
        url: "https://pokeapi.co/api/v2/pokemon/209/"
      },
      {
        name: "granbull",
        url: "https://pokeapi.co/api/v2/pokemon/210/"
      },
      {
        name: "qwilfish",
        url: "https://pokeapi.co/api/v2/pokemon/211/"
      },
      {
        name: "scizor",
        url: "https://pokeapi.co/api/v2/pokemon/212/"
      },
      {
        name: "shuckle",
        url: "https://pokeapi.co/api/v2/pokemon/213/"
      },
      {
        name: "heracross",
        url: "https://pokeapi.co/api/v2/pokemon/214/"
      },
      {
        name: "sneasel",
        url: "https://pokeapi.co/api/v2/pokemon/215/"
      },
      {
        name: "teddiursa",
        url: "https://pokeapi.co/api/v2/pokemon/216/"
      },
      {
        name: "ursaring",
        url: "https://pokeapi.co/api/v2/pokemon/217/"
      },
      {
        name: "slugma",
        url: "https://pokeapi.co/api/v2/pokemon/218/"
      },
      {
        name: "magcargo",
        url: "https://pokeapi.co/api/v2/pokemon/219/"
      },
      {
        name: "swinub",
        url: "https://pokeapi.co/api/v2/pokemon/220/"
      },
      {
        name: "piloswine",
        url: "https://pokeapi.co/api/v2/pokemon/221/"
      },
      {
        name: "corsola",
        url: "https://pokeapi.co/api/v2/pokemon/222/"
      },
      {
        name: "remoraid",
        url: "https://pokeapi.co/api/v2/pokemon/223/"
      },
      {
        name: "octillery",
        url: "https://pokeapi.co/api/v2/pokemon/224/"
      },
      {
        name: "delibird",
        url: "https://pokeapi.co/api/v2/pokemon/225/"
      },
      {
        name: "mantine",
        url: "https://pokeapi.co/api/v2/pokemon/226/"
      },
      {
        name: "skarmory",
        url: "https://pokeapi.co/api/v2/pokemon/227/"
      },
      {
        name: "houndour",
        url: "https://pokeapi.co/api/v2/pokemon/228/"
      },
      {
        name: "houndoom",
        url: "https://pokeapi.co/api/v2/pokemon/229/"
      },
      {
        name: "kingdra",
        url: "https://pokeapi.co/api/v2/pokemon/230/"
      },
      {
        name: "phanpy",
        url: "https://pokeapi.co/api/v2/pokemon/231/"
      },
      {
        name: "donphan",
        url: "https://pokeapi.co/api/v2/pokemon/232/"
      },
      {
        name: "porygon2",
        url: "https://pokeapi.co/api/v2/pokemon/233/"
      },
      {
        name: "stantler",
        url: "https://pokeapi.co/api/v2/pokemon/234/"
      },
      {
        name: "smeargle",
        url: "https://pokeapi.co/api/v2/pokemon/235/"
      },
      {
        name: "tyrogue",
        url: "https://pokeapi.co/api/v2/pokemon/236/"
      },
      {
        name: "hitmontop",
        url: "https://pokeapi.co/api/v2/pokemon/237/"
      },
      {
        name: "smoochum",
        url: "https://pokeapi.co/api/v2/pokemon/238/"
      },
      {
        name: "elekid",
        url: "https://pokeapi.co/api/v2/pokemon/239/"
      },
      {
        name: "magby",
        url: "https://pokeapi.co/api/v2/pokemon/240/"
      },
      {
        name: "miltank",
        url: "https://pokeapi.co/api/v2/pokemon/241/"
      },
      {
        name: "blissey",
        url: "https://pokeapi.co/api/v2/pokemon/242/"
      },
      {
        name: "raikou",
        url: "https://pokeapi.co/api/v2/pokemon/243/"
      },
      {
        name: "entei",
        url: "https://pokeapi.co/api/v2/pokemon/244/"
      },
      {
        name: "suicune",
        url: "https://pokeapi.co/api/v2/pokemon/245/"
      },
      {
        name: "larvitar",
        url: "https://pokeapi.co/api/v2/pokemon/246/"
      },
      {
        name: "pupitar",
        url: "https://pokeapi.co/api/v2/pokemon/247/"
      },
      {
        name: "tyranitar",
        url: "https://pokeapi.co/api/v2/pokemon/248/"
      },
      {
        name: "lugia",
        url: "https://pokeapi.co/api/v2/pokemon/249/"
      },
      {
        name: "ho-oh",
        url: "https://pokeapi.co/api/v2/pokemon/250/"
      },
      {
        name: "celebi",
        url: "https://pokeapi.co/api/v2/pokemon/251/"
      },
      {
        name: "treecko",
        url: "https://pokeapi.co/api/v2/pokemon/252/"
      },
      {
        name: "grovyle",
        url: "https://pokeapi.co/api/v2/pokemon/253/"
      },
      {
        name: "sceptile",
        url: "https://pokeapi.co/api/v2/pokemon/254/"
      },
      {
        name: "torchic",
        url: "https://pokeapi.co/api/v2/pokemon/255/"
      },
      {
        name: "combusken",
        url: "https://pokeapi.co/api/v2/pokemon/256/"
      },
      {
        name: "blaziken",
        url: "https://pokeapi.co/api/v2/pokemon/257/"
      },
      {
        name: "mudkip",
        url: "https://pokeapi.co/api/v2/pokemon/258/"
      },
      {
        name: "marshtomp",
        url: "https://pokeapi.co/api/v2/pokemon/259/"
      },
      {
        name: "swampert",
        url: "https://pokeapi.co/api/v2/pokemon/260/"
      },
      {
        name: "poochyena",
        url: "https://pokeapi.co/api/v2/pokemon/261/"
      },
      {
        name: "mightyena",
        url: "https://pokeapi.co/api/v2/pokemon/262/"
      },
      {
        name: "zigzagoon",
        url: "https://pokeapi.co/api/v2/pokemon/263/"
      },
      {
        name: "linoone",
        url: "https://pokeapi.co/api/v2/pokemon/264/"
      },
      {
        name: "wurmple",
        url: "https://pokeapi.co/api/v2/pokemon/265/"
      },
      {
        name: "silcoon",
        url: "https://pokeapi.co/api/v2/pokemon/266/"
      },
      {
        name: "beautifly",
        url: "https://pokeapi.co/api/v2/pokemon/267/"
      },
      {
        name: "cascoon",
        url: "https://pokeapi.co/api/v2/pokemon/268/"
      },
      {
        name: "dustox",
        url: "https://pokeapi.co/api/v2/pokemon/269/"
      },
      {
        name: "lotad",
        url: "https://pokeapi.co/api/v2/pokemon/270/"
      },
      {
        name: "lombre",
        url: "https://pokeapi.co/api/v2/pokemon/271/"
      },
      {
        name: "ludicolo",
        url: "https://pokeapi.co/api/v2/pokemon/272/"
      },
      {
        name: "seedot",
        url: "https://pokeapi.co/api/v2/pokemon/273/"
      },
      {
        name: "nuzleaf",
        url: "https://pokeapi.co/api/v2/pokemon/274/"
      },
      {
        name: "shiftry",
        url: "https://pokeapi.co/api/v2/pokemon/275/"
      },
      {
        name: "taillow",
        url: "https://pokeapi.co/api/v2/pokemon/276/"
      },
      {
        name: "swellow",
        url: "https://pokeapi.co/api/v2/pokemon/277/"
      },
      {
        name: "wingull",
        url: "https://pokeapi.co/api/v2/pokemon/278/"
      },
      {
        name: "pelipper",
        url: "https://pokeapi.co/api/v2/pokemon/279/"
      },
      {
        name: "ralts",
        url: "https://pokeapi.co/api/v2/pokemon/280/"
      },
      {
        name: "kirlia",
        url: "https://pokeapi.co/api/v2/pokemon/281/"
      },
      {
        name: "gardevoir",
        url: "https://pokeapi.co/api/v2/pokemon/282/"
      },
      {
        name: "surskit",
        url: "https://pokeapi.co/api/v2/pokemon/283/"
      },
      {
        name: "masquerain",
        url: "https://pokeapi.co/api/v2/pokemon/284/"
      },
      {
        name: "shroomish",
        url: "https://pokeapi.co/api/v2/pokemon/285/"
      },
      {
        name: "breloom",
        url: "https://pokeapi.co/api/v2/pokemon/286/"
      },
      {
        name: "slakoth",
        url: "https://pokeapi.co/api/v2/pokemon/287/"
      },
      {
        name: "vigoroth",
        url: "https://pokeapi.co/api/v2/pokemon/288/"
      },
      {
        name: "slaking",
        url: "https://pokeapi.co/api/v2/pokemon/289/"
      },
      {
        name: "nincada",
        url: "https://pokeapi.co/api/v2/pokemon/290/"
      },
      {
        name: "ninjask",
        url: "https://pokeapi.co/api/v2/pokemon/291/"
      },
      {
        name: "shedinja",
        url: "https://pokeapi.co/api/v2/pokemon/292/"
      },
      {
        name: "whismur",
        url: "https://pokeapi.co/api/v2/pokemon/293/"
      },
      {
        name: "loudred",
        url: "https://pokeapi.co/api/v2/pokemon/294/"
      },
      {
        name: "exploud",
        url: "https://pokeapi.co/api/v2/pokemon/295/"
      },
      {
        name: "makuhita",
        url: "https://pokeapi.co/api/v2/pokemon/296/"
      },
      {
        name: "hariyama",
        url: "https://pokeapi.co/api/v2/pokemon/297/"
      },
      {
        name: "azurill",
        url: "https://pokeapi.co/api/v2/pokemon/298/"
      },
      {
        name: "nosepass",
        url: "https://pokeapi.co/api/v2/pokemon/299/"
      },
      {
        name: "skitty",
        url: "https://pokeapi.co/api/v2/pokemon/300/"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
