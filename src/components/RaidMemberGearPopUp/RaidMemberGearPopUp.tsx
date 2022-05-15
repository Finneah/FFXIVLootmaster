import { RaidMember } from "../../types/User";


type PopUpProps={
raidMember:RaidMember,
onClose:()=>void,
onSave:()=>void
}

// TODO zu styled components
export const RaidMemberGearPopUp=({raidMember,onClose,onSave}:PopUpProps)=>{
  /**
   * Name
   * 
   */
  return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{raidMember.name}</h1>
        <button onClick={onClose}>Abbrechen</button>
        <button onClick={onSave}>Speichern</button>
        </div>
      </div>
    );
}