import Image from "next/image";
import { Counter } from "./features/counter/counter";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>

  );
}
