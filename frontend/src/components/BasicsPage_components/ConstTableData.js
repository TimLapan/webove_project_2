// src/data/ConstTableData.js
const ConstTableData = [
    {
      name: "Perceptron",
      description:
        "Najjednoduchší typ neurónovej siete, pozostávajúci z jedného neurónu, určeného pre binárnu klasifikáciu. Používa sa na úlohy s lineárnou separabilitou dát.",
    },
    {
      name: "Viacvrstvový perceptron (MLP)",
      description:
        "Neurónová sieť s viacerými skrytými vrstvami neurónov. Je základom hlbokého učenia, schopná modelovať zložitejšie funkcie než jeden perceptron.",
    },
    {
      name: "Konvolučné neurónové siete (CNN)",
      description:
        "Používajú sa na analýzu vizuálnych dát, ako sú obrázky a video. Obsahujú konvolučné vrstvy, ktoré vyberajú priestorové črty, čo ich robí účinnými pre rozpoznávanie objektov a tvárí.",
    },
    {
      name: "Rekurentné neurónové siete (RNN)",
      description:
        "Schopné spracovávať sekvenčné dáta, ako je text alebo časové rady. Obsahujú slučky, ktoré umožňujú zohľadňovať predchádzajúce stavy, čo ich robí vhodnými pre spracovanie jazyka a časových dát.",
    },
    {
      name: "Vrstvy neurónovej siete",
      description:
        "Základné vrstvy zahŕňajú vstupnú, skryté a výstupnú vrstvu. Skryté vrstvy pozostávajú z neurónov, ktoré transformujú vstupné dáta a extrahujú dôležité črty pre ďalšie vrstvy.",
    },
    {
      name: "Aktivačné funkcie",
      description:
        "Funkcie, ktoré určujú výstup každého neurónu, čím robia sieť nelineárnou. Populárne aktivačné funkcie: ReLU, sigmoid a tanh, každá vhodná pre rôzne typy úloh.",
    },
    {
      name: "Tréning neurónovej siete",
      description:
        "Proces, pri ktorom sieť optimalizuje svoje parametre (váhy a posuny) na minimalizáciu chyby. Používajú sa algoritmy ako spätné šírenie chyby a gradientný zostup.",
    },
  ];
  
  export default ConstTableData;
  