import { useState } from "react";
import { genTicket, sum } from "./genTicket";
import Ticket from "./Ticket.jsx";
import "./ticket.css";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;
  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>

      <Ticket ticket={ticket} />
      <button onClick={buyTicket} className="btn">
        Buy Tickect
      </button>

      <h3>{isWinning && "Congratulation you Won!!"}</h3>
    </div>
  );
}
