import Banniere from "../components/banniere/Banniere";
import VoletDepliant from "../components/Volet_Depliant/Volet_Depliant";

function PageAPropos() {
  return (
    <div>
      <div className="banniere">
        <Banniere apropos="url(/src/assets/images/Banniere-propos.png)" />
      </div>
      <div>
        <VoletDepliant />
      </div>
    </div>
  );
}

export default PageAPropos;
