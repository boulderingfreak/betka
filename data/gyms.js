// Array of objects

//* handleGymChange: (item: { label: string; value: string }) => void;

//TODO:
//- odpal profileCards w oknie po lewej a po prawej gyms.js
//- nastepnie pomysl jak ustawić DATA
//- jak będzie wywoływany dany boulder?
//-

const gyms = [
  // -------------------------------- Obiekto --------------------------------
  {
    label: "Obiekto", // gym name
    value: "0", // gym id
    //* Array of sectors
    sectors: [
      {
        label: "Zetka", // sector name
        value: "0", // sector id
        // boulders: [{ id: 0, miniatureImg: "test", videoUrl: "test" }],
      },
      {
        label: "Dach",
        value: "1",
      },
      {
        label: "45",
        value: "2",
      },
    ],
    //* Array of levels
    levels: [
      {
        label: "1",
        value: "0",
      },
      {
        label: "2",
        value: "1",
      },
      {
        label: "3",
        value: "2",
      },
      {
        label: "4",
        value: "3",
      },
      {
        label: "5",
        value: "4",
      },
      {
        label: "6",
        value: "5",
      },
      {
        label: "7",
        value: "6",
      },
      {
        label: "8",
        value: "7",
      },
      {
        label: "9",
        value: "8",
      },
      {
        label: "10",
        value: "9",
      },
      {
        label: "11",
        value: "10",
      },
    ],
  },
  // -------------------------------- Crux --------------------------------
  {
    label: "Crux",
    value: "1",
    sectors: [
      {
        label: "Cruxowe Cos",
        value: "0",
      },
      {
        label: "Cruxowe Dwa",
        value: "1",
      },
      {
        label: "Beczka",
        value: "2",
      },
      {
        label: "Ryba",
        value: "3",
      },
    ],
    levels: [
      {
        label: "X1",
        value: "0",
      },
      {
        label: "X2",
        value: "1",
      },
      {
        label: "X3",
        value: "2",
      },
      {
        label: "X4",
        value: "3",
      },
      {
        label: "X5",
        value: "4",
      },
      {
        label: "X6",
        value: "5",
      },
      {
        label: "X7",
        value: "6",
      },
      {
        label: "X8",
        value: "7",
      },
      {
        label: "X9",
        value: "8",
      },
    ],
  },
  {
    label: "Volt WWA",
    value: "2",
    sectors: [
      {
        label: "Smierc",
        value: "0",
      },
      {
        label: "Slabom",
        value: "1",
      },
      {
        label: "Tylko",
        value: "2",
      },
      {
        label: "Przewieszenia",
        value: "3",
      },
      {
        label: "Kieszonki",
        value: "4",
      },
    ],
    levels: [
      {
        label: "volt1 test", //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        value: "0",
      },
      {
        label: "volt2 test", //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        value: "1",
      },
      {
        label: "volt3 test",
        value: "2",
      },
      {
        label: "4",
        value: "3",
      },
      {
        label: "5",
        value: "4",
      },
      {
        label: "6",
        value: "5",
      },
      {
        label: "7",
        value: "6",
      },
      {
        label: "8",
        value: "7",
      },
      {
        label: "9",
        value: "8",
      },
    ],
  },
];

export default gyms;

// {
//     label: "Zetka",
//     value: "0",
//   },
//   {
//     label: "Dach",
//     value: "1",
//   },
//   {
//     label: "45",
//     value: "2",
//   },
