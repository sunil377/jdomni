import { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

const App: FC<AppProps> = ({ config }) => {
  return (
    <Routes>
      {config.map(props => (
        <Route {...props} key={props.path} />
      ))}
    </Routes>
  );
};

interface AppProps {
  config: {
    path: string;
    element: ReactElement;
  }[];
}

export default App;
