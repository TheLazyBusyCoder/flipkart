import NavBar from "../components/NavBar";
import Panel1 from "../components/Panel1";
import CircleBox from "../components/CircleBox";
import BanksImg from "../components/BanksImg";
import ListBox from "../components/ListBox";
import PanelAd from "../components/PanelAd";
import Panel2But from "../components/Panel2But";
import Panel2ButV2 from "../components/Panel2ButV2";
import Footer from "../components/Footer";
function MainPage() {
  return (
    <div className="min-h-full bg-slate-100">
      <NavBar />
      <Panel1>{<CircleBox />}</Panel1>
      <ListBox />
      <Panel1>{<BanksImg />}</Panel1>
      <PanelAd />
      <Panel2But />
      <PanelAd />
      <Panel2But />
      <PanelAd />
      <Panel2ButV2 />
      <PanelAd />
      <Panel2But />
      <PanelAd />
      <Footer />
    </div>
  );
}

export default MainPage;
