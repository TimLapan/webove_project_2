import React from "react";

const DataTable = ({ data }) => (
  <section id="neural-network-components" className="container my-5">
    <h2 className="text-center mb-4 text-light">Hlavné komponenty a smery neurónových sietí</h2>
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Komponent/Smer</th>
            <th scope="col">Popis</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <strong>{row.name}</strong>
              </td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default DataTable;
