export const state = {
    data: {
      rtdbData: {},
      roomId: "",
    },
    init() {
      // Inicialización y suscripción a la base de datos en tiempo real
    },
    listenDatabase(roomId: string) {
      // Conexión a Firebase RTDB para escuchar cambios en el room específico
    },
    saveData(newData: object) {
      // Guarda el nuevo estado en la base de datos o en la estructura de estado local
    },
  };
  