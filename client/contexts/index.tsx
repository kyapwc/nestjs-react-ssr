import * as React from 'react';

const StoreContext = React.createContext();

const initialState = {
  bbOrders: [],
  outsourceOrdersMap: {},
  warehouseMap: {},
};

const StoreProvider = (props) => {
  const [state, setState] = React.useState(initialState);

  async function getBBOrders(ids: string[]) {
    const bbOrders: any[] = await new Promise((resolve) =>
      setTimeout(() => resolve(ids.map((id) => ({ id }))), 1000),
    );
    setState({ ...state, bbOrders: [...state.bbOrders, ...bbOrders] });
  }

  async function getOutsourceOrders(bbOrderIds) {
    const outsourceOrders = [
      {
        id: 'f61317e9-533a-4e68-a490-16f6dd0edafd',
        pickuppOrderId: 'c7bbc820-3abf-4f07-a448-cc6535bd8e38',
      },
      {
        id: 'f61317e9-533a-4e68-a490-16f6dd0edafd',
        pickuppOrderId: 'c7bbc820-3abf-4f07-a448-cc6535bd8e38',
      },
      {
        id: 'f61317e9-533a-4e68-a490-16f6dd0edafd',
        pickuppOrderId: 'c7bbc820-3abf-4f07-a448-cc6535bd8e38',
      },
      {
        id: 'f61317e9-533a-4e68-a490-16f6dd0edafd',
        pickuppOrderId: 'c7bbc820-3abf-4f07-a448-cc6535bd8e38',
      },
    ];

    const outsourceOrdersResponse: any[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(outsourceOrders);
      }, 1000);
    });

    const responseMap = outsourceOrdersResponse.reduce((acc, item) => {
      acc[item.pickuppOrderId] = item;
      return acc;
    }, {});

    setState({ ...state, outsourceOrdersMap: responseMap });
  }

  return (
    <StoreContext.Provider value={state}>
      {props.children}
    </StoreContext.Provider>
  );
};

function useStoreContext() {
  return React.useContext(StoreContext);
}

export { StoreProvider, useStoreContext };
