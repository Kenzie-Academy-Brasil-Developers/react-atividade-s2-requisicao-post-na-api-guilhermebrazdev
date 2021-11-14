import "./display.css";

function Display({ request }) {
  return (
    <div>
      <div>
        {request === true && <p id="completa">Requisição Completa</p>}
        {request === false && <p id="falhou">Requisição Falhou</p>}
      </div>
    </div>
  );
}

export default Display;
