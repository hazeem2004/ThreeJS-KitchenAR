import create from "zustand";

const useStore = create((set) => ({
  cabinets: [
    { id: 1, position: [-2, 0, 0], color: "#ffffff" },
    { id: 2, position: [2, 0, 0], color: "#8B4513" },
  ],
  worktops: [{ id: 1, position: [0, 1, 0], texture: "/wood-texture.jpg" }],
  islands: [{ id: 1, position: [0, 0, -3], color: "#D2691E" }],

  updateCabinetColor: (id, color) =>
    set((state) => ({
      cabinets: state.cabinets.map((cab) =>
        cab.id === id ? { ...cab, color } : cab
      ),
    })),

  moveCabinet: (id, newPosition) =>
    set((state) => ({
      cabinets: state.cabinets.map((cab) =>
        cab.id === id ? { ...cab, position: newPosition } : cab
      ),
    })),
}));

export default useStore;