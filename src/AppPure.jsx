import "./App.css";
import PullUpPure from "./components/PullUpPure";
// import PullUpImPure from "./components/PullUpImpure";
export default function App() {
  return (
    <>
      <PullUpPure counter={11} />
      <PullUpPure counter={11} />
      <PullUpPure counter={11} />
      {/* <PullUpImPure counter={11} />
      <PullUpImPure counter={11} />
      <PullUpImPure counter={11} /> */}
    </>
  );
}
