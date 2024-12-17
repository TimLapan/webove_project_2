import React from "react";
import Sidebar from "../components/BasicsPage_components/Sidebar";
import NeuralNetworksSection from "../components/BasicsPage_components/NeuralNetworkSection";
import DataTable from "../components/BasicsPage_components/DataTable";
import "../styles/index_styles.css";
import ConstTableData from "../components/BasicsPage_components/ConstTableData";
import MiniTest from "../components/BasicsPage_components/MiniTest";
import Footer from "../components/HomePage_components/Footer";
import PythonLibraries from "../components/BasicsPage_components/PythonLibraries";
import TensorFlowGuide from "../components/BasicsPage_components/TensorFlowGuide";
import ChangeSectionComponent from "../components/BasicsPage_components/ChangeSectionComponent";
import Header from "../components/BasicsPage_components/Header";
const BasicsPage = () => {

  return (
    <>
      <Header />
      <div className="container-fluid my-5">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 col-lg-10">
            <NeuralNetworksSection />
            {/* Таблица с данными */}
            <DataTable data={ConstTableData} />
            <PythonLibraries />
            <TensorFlowGuide />
            <MiniTest />
            <ChangeSectionComponent />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default BasicsPage;
