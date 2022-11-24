import { useEffect } from "react";
import { Col, Spin } from "antd";
import { shallowEqual,useDispatch,useSelector } from "react-redux";
import { fetchDigimonWithDetails } from "./slices/dataSlice";
import Searcher from "./components/Searcher";
import DigimonList from "./components/DigimonList";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
  const digimons = useSelector(
    (state) =>
      // getIn(state, ["data", "digimons"], shallowEqual)
      state.data.digimonsFiltered,
    shallowEqual
  );

  const loading = useSelector(
    (state) =>
      // // getIn(state, ["ui", "loading"]));
      state.ui.loading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDigimonWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <DigimonList digimons={digimons} />
      )}
    </div>
  );
}

export default App;
