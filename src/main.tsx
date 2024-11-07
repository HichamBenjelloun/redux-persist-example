import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { increment } from './features/counter';
import store from './store';

type IStore = ReturnType<typeof store.getState>;

const persistor = persistStore(store);

function Counter() {
  const count = useSelector((state: IStore) => state.counter.value);
  const dispatch = useDispatch();

  const onClickHandler = React.useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  return (
    <div>
      <button onClick={onClickHandler}>+1</button>
      <span>{count}</span>
    </div>
  );
}

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Counter />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
