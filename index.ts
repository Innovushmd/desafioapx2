import "./router.ts";
import { state } from "./state.ts";

function main() {
  const root = document.querySelector(".root");
  if (root) {
    state.init();
    // Lógica adicional para inicializar el router o componentes
  }
}

main();
