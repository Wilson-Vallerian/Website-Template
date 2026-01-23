import "../../styles/not-in-use/cardExchange.css";
import { FaExchangeAlt, FaMoneyBill } from "react-icons/fa";

export default function CardExchange() {
  return (
    <div className="card-exchange-wrapper">
      <div className="card-exchange">
        <div className="icon-wrapper">
          <FaMoneyBill className="icon" />
        </div>
        <div className="name-wrapper">
          <p className="name-title">Name</p>
          <p className="name">Template</p>
        </div>
      </div>

      <div className="middle-circle">{<FaExchangeAlt />}</div>

      <div className="card-exchange">
        <div className="icon-wrapper">
          <FaMoneyBill className="icon" />
        </div>
        <div className="name-wrapper">
          <p className="name-title">Name</p>
          <p className="name">Template</p>
        </div>
      </div>
    </div>
  );
}

// TODO: export card-exchange as component
