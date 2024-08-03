import "./ticket.css";
import TicketNum from "./TicketNum";
export default function ({ ticket }) {
  return (
    <div className="ticket">
      <p>Ticket </p>
      <TicketNum num={ticket} />
    </div>
  );
}
