import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
  // Create add and remove functions here that changes the
  // state.

  let totalval = inv.books + inv.notebooks + inv.pens;

  let handle = (val, item) => {

    if (item === "books") {

      if (inv.books === 0 && val === -1) {
        setInv({
          books: inv.books + 0,
          notebooks: inv.notebooks,
          pens: inv.pens,
          inkpens: inv.inkpens,
        });
        return;
      }

      setInv({
        books: inv.books + val,
        notebooks: inv.notebooks,
        pens: inv.pens,
        inkpens: inv.inkpens,
      });
    }
    //=======================================

    else if (item === "notebooks") {

      if (inv.notebooks === 0 && val === -1) {
        setInv({
          books: inv.books,
          notebooks: inv.notebooks + 0,
          pens: inv.pens,
          inkpens: inv.inkpens,
        });
        return;
      }
      setInv({
        books: inv.books,
        notebooks: inv.notebooks + val,
        pens: inv.pens,
        inkpens: inv.inkpens,
      });
    }
    //====================================================

    else if (item === "pens") {

      if (inv.pens === 0 && val === -1) {
        setInv({
          books: inv.books,
          notebooks: inv.notebooks,
          pens: inv.pens + 0,
          inkpens: inv.inkpens,
        });
        return;
      }
      setInv({
        books: inv.books,
        notebooks: inv.notebooks,
        pens: inv.pens + val,
        inkpens: inv.inkpens,
      });
    }
  };

  //=================================================================

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}>

      <div className="items">
        <span>Books: </span>
        <button className="circlularButton addBook" onClick={() => { handle(1, "books") }}>
          +
        </button>
        <button className="circlularButton remBook" onClick={() => { handle(-1, "books") }}>
          -
        </button>
        <span className="totalBooks">{inv.books}</span>
      </div>


      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton addNotebook" onClick={() => { handle(1, "notebooks"); }}>
          +
        </button>
        <button className="circlularButton remNotebook" onClick={() => { handle(-1, "notebooks"); }}>
          -
        </button>
        <span className="totalNotebooks">{inv.notebooks}</span>
      </div>



      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton addPen" onClick={() => { handle(1, "pens"); }}>
          +
        </button>
        <button className="circlularButton remPen" onClick={() => { handle(-1, "pens"); }}>
          -
        </button>
        <span className="totalPens">{inv.pens}</span>
      </div>




      {/*calculate total and show it*/}
      total: <div className="total">{totalval}</div>
    </div>
  );
};
