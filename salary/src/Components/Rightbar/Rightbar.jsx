import React from "react";
import { connect } from "react-redux";
import { incrementCount, setDisplayedBalance } from "./actions";
import "./Style.css";
function Rightbar({
  count,
  displayedBalance,
  incrementCount,
  setDisplayedBalance,
}) {
  const handleInputChange = (e) => {
    setDisplayedBalance(e.target.value);
  };

  const handleSubmit = () => {
    // Check if the displayed balance is a valid number
    const inputAmount = parseFloat(displayedBalance);

    // Dispatch actions to update Redux state
    incrementCount();
    setDisplayedBalance(` ${inputAmount}`);
  };

  return (
    <div className="container">
      <div className="left-shifted-component">
        <h1>Accounts</h1>
        <h3>Count: {count}</h3>
        <h3>Balance: {displayedBalance}</h3>
        <input
          type="text"
          value={displayedBalance}
          onChange={handleInputChange}
          placeholder="Enter amount"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
  displayedBalance: state.displayedBalance,
});

export default connect(mapStateToProps, {
  incrementCount,
  setDisplayedBalance,
})(Rightbar);
