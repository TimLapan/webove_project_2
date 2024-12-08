import React from 'react';

const NeuralNetworksSection = () => {
  return (
    <section id="about-neural-networks" className="container my-5">
      <h2 className="text-center mb-4" style={{color: "white"}}>Čo sú neurónové siete?</h2>
      <hr></hr>
      <p>Neurónové siete (alebo umelé neurónové siete, UNS) sú algoritmy strojového učenia inšpirované biologickými neurónmi a procesmi v mozgu. Skladajú sa z mnohých vzájomne prepojených uzlov, nazývaných "neuróny", organizovaných do vrstiev. Každý neurón prijíma vstupné údaje, aplikuje na ne váhy a aktivačné funkcie a posiela výsledok do ďalšej vrstvy. Neurónové siete sa dokážu učiť z dát a zlepšovať svoje predpovede, čo ich robí silným nástrojom na riešenie zložitých úloh:</p>
      
      <ul>
        <li><strong>Rozpoznávanie obrázkov:</strong> klasifikácia objektov, rozpoznávanie tvárí, medicínska diagnostika na základe obrázkov.</li>
        <li><strong>Analýza textu:</strong> spracovanie prirodzeného jazyka, strojový preklad, analýza sentimentu.</li>
        <li><strong>Predikcia časových radov:</strong> finančné predpovede, predikcia počasia, analýza predaja.</li>
      </ul>
      
      <p>Neurónová sieť pozostáva z niekoľkých typov vrstiev:</p>
      
      <ul>
        <li><strong>Vstupná vrstva:</strong> prijíma údaje vstupujúce do siete (napríklad pixely obrázka alebo textové údaje).</li>
        <li><strong>Skryté vrstvy:</strong> spracovávajú údaje, vykonávajú transformácie a extrahujú črty. Čím viac skrytých vrstiev, tým "hlbšia" je sieť.</li>
        <li><strong>Výstupná vrstva:</strong> poskytuje konečný výsledok práce siete (napríklad pravdepodobnosť príslušnosti k určitej kategórii).</li>
      </ul>
      
      <p>Proces učenia neurónovej siete zahŕňa nasledujúce etapy:</p>
      
      <ol>
        <li><strong>Priame šírenie:</strong> údaje prechádzajú cez sieť a na výstupe sa získa predpoveď.</li>
        <li><strong>Výpočet chyby:</strong> porovnanie predpovede so skutočnou hodnotou pomocou funkcie straty.</li>
        <li><strong>Spätné šírenie chyby:</strong> chyba sa šíri späť cez sieť a váhy sa upravujú na zníženie chyby.</li>
        <li><strong>Aktualizácia váh:</strong> pomocou optimalizačných algoritmov, ako je gradientný zostup.</li>
      </ol>
      
      <p>Tento cyklus sa opakuje mnohokrát, kým sieť nedosiahne požadovanú presnosť.</p>
    </section>
  );
};

export default NeuralNetworksSection;