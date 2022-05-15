import { RaidMember } from "../../types/User";
import { SelectGearForm } from "../SelectGearForm/SelectGearForm";
import "./RaidMemberGearPopUp.css";

type PopUpProps = {
  raidMember: RaidMember;
  onClose: () => void;
  onSave: (raidMemberFormData: RaidMember) => void;
};

// TODO zu styled components
export const RaidMemberGearPopUp = ({
  raidMember,
  onClose,
  onSave,
}: PopUpProps) => {
  /**
   * Name
   *
   */

  return (
    <div className="popup">
      <div className="popup_inner">
        <button onClick={onClose}>Abbrechen</button>
      
        <h1>{raidMember.name}</h1>
        <SelectGearForm raidMember={raidMember} onSave={onSave} />
      </div>
    </div>
  );
};
