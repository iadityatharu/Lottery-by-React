import Lottery from "./Lottery.jsx";
import "./App.css";
// import TicketNum from "./TicketNum.jsx";

function App() {
  // let winCondition = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);
  // };
  return (
    <>
      <Lottery n={3} winningSum={15} />
    </>
  );
}

export default App;
