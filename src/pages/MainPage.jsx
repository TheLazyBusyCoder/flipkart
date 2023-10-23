import NavBar from "../components/NavBar";
import Panel1 from "../components/Panel1";
import CircleBox from "../components/CircleBox";
import BanksImg from "../components/BanksImg";
import ListBox from "../components/ListBox";
function MainPage() {
  return (
    <div className="min-h-full bg-slate-100">
      <NavBar />
      <Panel1>{<CircleBox />}</Panel1>
      <ListBox />
      <Panel1>{<BanksImg />}</Panel1>
    </div>
  );
}

export default MainPage;
