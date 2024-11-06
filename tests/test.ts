import { state } from "../state";

describe("State tests", () => {
  it("debe actualizar el estado correctamente", () => {
    state.updateGameState({ roomId: "123", rtdbData: {} });
    expect(state.data.roomId).toBe("123");
  });
});
