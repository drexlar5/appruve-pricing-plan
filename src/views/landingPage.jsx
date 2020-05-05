import React from "react";
import Card from "../components/card";
import Header from "../components/header";
import Footer from "../components/footer";
import data from "../data.json";
import "../App.css";

function LandingPage() {
  const [state, setState] = React.useState({ count: 0, title: null });

  const handlePayment = (title) => {
    if (state.title === title) {
      setState({ ...state, count: 0, title: null });
    } else {
      setState({ ...state, count: 1, title });
    }
  };

  return (
    <div id="page-container">
      <Header count={state.count} />
      <div className="grid">
        <div className="row">
          {state.title && (
            <div className="alert alert-primary" role="alert">
              <strong>{state.title}</strong> selected
            </div>
          )}
          {data.map((element) => (
            <Card
              key={element.id}
              data={element}
              handlePayment={handlePayment}
            />
          ))}
        </div>
      </div>
      <div className={`footer`}>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
