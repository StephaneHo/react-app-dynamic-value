import "./App.css";

const equipments = [
  "nacelle articulee",
  "nacelle sur vehicule leger",
  "gant bionique",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Equipments() {
  const equipment = equipments[genRandomInt(2)];
  return null;
}

function App() {
  return (
    <>
      <p>MAXOL</p>
      <Equipments />
    </>
  );
}

export default App;
