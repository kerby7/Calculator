import { useState } from "react";

const Body = () => {
  const [result, setResult] = useState("");

  const click = (e) => {
    console.log(e.target.name);
    setResult(result.concat(e.target.name));
  };

  const clear = (e) => {
    setResult("");
  };

  const del = (e) => {
    setResult(result.slice(0, result.length - 1));
  };

  const calc = (e) => {

    try{
      setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error");
    }
  };

  return (
    <>
      <div className="container">
        <input type="text" className="display" value={result} />
        <div className="buttons">
          <button onClick={clear}>AC</button>
          <button onClick={del}>DC</button>
          <button name="%" onClick={click}>
            %
          </button>
          <button name="/" onClick={click} className="operator">
            /
          </button>

          <button name="7" onClick={click}>
            7
          </button>
          <button name="8" onClick={click}>
            8
          </button>
          <button name="9" onClick={click}>
            9
          </button>
          <button name="*" onClick={click} className="operator">
            *
          </button>

          <button name="4" onClick={click}>
            4
          </button>
          <button name="5" onClick={click}>
            5
          </button>
          <button name="6" onClick={click}>
            6
          </button>
          <button name="-" onClick={click} className="operator">
            -
          </button>

          <button name="1" onClick={click}>
            1
          </button>
          <button name="2" onClick={click}>
            2
          </button>
          <button name="3" onClick={click}>
            3
          </button>
          <button name="+" onClick={click} className="operator">
            +
          </button>

          <button name="0" onClick={click}>
            0
          </button>
          <button name="00" onClick={click}>
            00
          </button>
          <button name="." onClick={click}>
            .
          </button>
          <button onClick={calc} className="operator">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
