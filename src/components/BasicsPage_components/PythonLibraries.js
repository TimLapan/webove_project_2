import React, { useState } from 'react';
import "../../styles/basics_styles.css"
const PythonLibraries = () => {
  const [copiedLibrary, setCopiedLibrary] = useState(null);

  const copyToClipboard = (text, library) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLibrary(library);
      setTimeout(() => setCopiedLibrary(null), 2000);
    });
  };

  const libraries = [
    {
      name: "TensorFlow",
      description: "výkonná knižnica od Google pre strojové učenie a hlboké učenie. Podporuje tréning na CPU aj GPU.",
      installCommand: "pip install tensorflow"
    },
    {
      name: "Keras", 
      description: "vysokoúrovňová knižnica pracujúca nad TensorFlow. Uľahčuje proces tvorby a tréningu modelov vďaka jednoduchému a intuitívnemu rozhraniu.",
      installCommand: "pip install keras"
    },
    {
      name: "PyTorch",
      description: "dynamický framework od Facebooku, populárny medzi výskumníkmi vďaka flexibilite a pohodlnosti pri vývoji nových architektúr neurónových sietí.",
      installCommand: "pip install torch"
    },
    {
      name: "Scikit-learn",
      description: "knižnica pre strojové učenie, ktorá ponúka jednoduché nástroje pre úlohy klasifikácie, regresie a zhlukovania. Vhodná pre základné modely neurónových sietí.",
      installCommand: "pip install scikit-learn"
    }
  ];

  return (
    <section id="python-libraries" className="container my-5">
      <h2 className="text-center mb-4" style={{color: "white"}}>Python knižnice pre tvorbu neurónových sietí</h2>
      <p>Python ponúka široké spektrum knižníc pre vývoj a tréning neurónových sietí. Niektoré z najpopulárnejších:</p>
      <ul className="list-unstyled">
        {libraries.map((library) => (
          <li key={library.name} className="mb-4">
            <strong>{library.name}:</strong> {library.description}
            <div className="code-container mt-2 d-flex flex-column flex-md-row align-items-md-center">
              <code>{library.installCommand}</code>
              <span className="code-description ms-md-3 mt-2 mt-md-0">— Inštaluje knižnicu {library.name}</span>
              <button 
                className={`copy-button mt-2 mt-md-0 ${copiedLibrary === library.name ? 'btn-success' : ''}`}
                onClick={() => copyToClipboard(library.installCommand, library.name)}
              >
                {copiedLibrary === library.name ? 'Skopírované!' : 'Copy'}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p>Výber knižnice závisí od konkrétnej úlohy, požiadaviek na výkon a osobných preferencií vývojára.</p>
    </section>
  );
};

export default PythonLibraries;