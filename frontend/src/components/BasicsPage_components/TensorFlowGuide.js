import React, { useState } from 'react';
import tensorflowImage from '../../assets/images_and_icons/timas_materials/tensorflow.jpg';
import "../../styles/index_styles.css";
const TensorFlowGuide = () => {
  const [copiedBlock, setCopiedBlock] = useState(null);

  const copyToClipboard = (code, blockName) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedBlock(blockName);
      setTimeout(() => setCopiedBlock(null), 2000);
    });
  };

  const codeBlocks = [
    {
      title: "Nastavenie TensorFlow",
      description: "Importujte TensorFlow a skontrolujte jeho verziu, aby ste sa uistili, že nainštalovaná verzia je aktuálna:",
      code: `import tensorflow as tf
print("TensorFlow version:", tf.__version__)`
    },
    {
      title: "Nahratie datasetu MNIST",
      description: "Nahranie štandardného datasetu MNIST a normalizácia hodnôt pixelov delením na 255:",
      code: `mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0`
    },
    {
      title: "Vytvorenie modelu",
      description: "Vytvorte neurónovú sieť pomocou Keras. Tento model zahŕňa vrstvy `Flatten`, `Dense` a `Dropout` pre klasifikáciu obrázkov:",
      code: `model = tf.keras.models.Sequential([
    tf.keras.layers.Flatten(input_shape=(28, 28)),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10)
])`
    },
    {
      title: "Kompilácia a tréning modelu",
      description: "Nastavte optimalizátor a funkciu straty, potom trénujte model na tréningových dátach počas niekoľkých epôch:",
      code: `model.compile(optimizer='adam',
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    metrics=['accuracy']
)
model.fit(x_train, y_train, epochs=5)`
    },
    {
      title: "Vyhodnotenie modelu",
      description: "Použite metódu `Model.evaluate` na overenie presnosti modelu na testovacích dátach:",
      code: `model.evaluate(x_test, y_test, verbose=2)`
    },
    {
      title: "Výpočet pravdepodobností",
      description: "Pridajte vrstvu `Softmax` do modelu, aby ste získali pravdepodobnosti pre každú triedu:",
      code: `probability_model = tf.keras.Sequential([
        model,
        tf.keras.layers.Softmax()
])
probability_model(x_test[:5])`
    }
  ];

  return (
    <section id="tensorflow-guide" className="container my-5" >
      <h2 className="text-center mb-4" style={{color: "white"}}>Stručný návod pre TensorFlow 2 pre začiatočníkov</h2>
      <hr></hr>
      <div className="text-center">
      <img 
        src={tensorflowImage} 
        className="img-fluid mx-auto d-block" 
        alt="TensorFlow" 
      />
      </div>
      <br /><br />
      <p>
        Tento stručný úvod používa Keras na:
        <ol>
          <li><strong>Nahratie pripraveného datasetu.</strong></li>
          <li><strong>Vytvorenie modelu strojového učenia neurónovej siete, ktorý klasifikuje obrázky.</strong></li>
          <li><strong>Tréning tejto neurónovej siete.</strong></li>
          <li><strong>Nahratie pripraveného datasetu.</strong></li>
          <li><strong>Vyhodnotenie presnosti modelu.</strong></li>
        </ol>
        <br />
        Keras je vysokúrovňové API platformy TensorFlow. Poskytuje prístupné a výkonné rozhranie na riešenie úloh strojového učenia (ML) so zameraním na moderné hlboké učenie. Keras pokrýva každý krok pracovného procesu strojového učenia: od spracovania dát po ladenie hyperparametrov a nasadenie. Bol navrhnutý so zameraním na rýchle experimentovanie.
      </p>

      {codeBlocks.map((block, index) => (
        <div key={index} className="feature-block mb-4">
          <strong>{block.title}:</strong>
          <p>{block.description}</p>
          <div className="code-container mt-2 d-flex flex-column flex-md-row align-items-md-center">
            <pre className="code-block">
              <code>{block.code}</code>
            </pre>
            <button 
              className={`copy-button mt-2 mt-md-0 ${copiedBlock === block.title ? 'btn-success' : ''}`}
              onClick={() => copyToClipboard(block.code, block.title)}
            >
              {copiedBlock === block.title ? 'Skopírované!' : 'Copy'}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TensorFlowGuide;
