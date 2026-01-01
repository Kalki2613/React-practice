import { useState } from "react";
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({ n = 5, winningConditions }) {
  let [ticket, setTicket] = useState(genTicket(n));

  let isWinningTicket = winningConditions(ticket);

  let buyNewTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Ticket Generator</h1>

      <div className="" >
        <Ticket ticket={ticket} />
      </div>

      <br />

      <button onClick={buyNewTicket}>Buy New Ticket</button>

      <h3>
        {isWinningTicket ? "🎉 Congratulations! You Win!" : "Try Again"}
      </h3>
    </div>
  );
}
