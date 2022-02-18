import "./display.css";

function Display({ request }) {
  return (
    <div>
      <div>
        {request === true && <p id="completa">Requisição Completad</p>}
        {request === false && <p id="falhou">Requisição Falhou</p>}
      </div>
    </div>
  );
}

export default Display;
