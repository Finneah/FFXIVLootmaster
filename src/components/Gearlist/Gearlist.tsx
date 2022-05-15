import { useEffect, useState } from "react";
import { raidMember as defaultRaidMember } from "../../data/raidMember";
import { Slots } from "../../types/Gear";
import styled from "styled-components";
import { RaidMember } from "../../types/User";
import { Button } from "../Button/Button";
import { RaidMemberGearPopUp } from "../RaidMemberGearPopUp/RaidMemberGearPopUp";

export const Gearlist = () => {
  // const classJobs: (ClassJob | undefined)[] = useSelector(
  //   (state: RootState) => state.jobs.data
  // );

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchAllJobs());
  // }, []);

  // const ClassJobList = () => {
  //   console.log("classJobs", classJobs);
  //   if (!classJobs || classJobs.length === 0) {
  //     return null;
  //   }
  //   return (
  //     <ListGroup>
  //       {classJobs.map((classJob, key) => (
  //         <ListGroup.Item>{classJob?.shortName} </ListGroup.Item>
  //       ))}
  //     </ListGroup>
  //   );
  // };

  const [raidMembers, setRaidMember] =
    useState<RaidMember[]>(defaultRaidMember);

  const [isVisible, setIsVisible] = useState(false);

  const [selectedRaidMember, setSelectedRaidMember] = useState<RaidMember>();

  const onSelectRaidMember = (raidMember: RaidMember) => {
    // setze ausgewählten raidmember
    setSelectedRaidMember(raidMember);
    // raidmember gesetzt? öffne popup
  };

  //reagiert wenn komponente geladen wird oder selectedRaidMember sich ändert
  useEffect(() => {
    setIsVisible(true);
  }, [selectedRaidMember]);
  const closePopUp = () => {
    setIsVisible(false);
    setSelectedRaidMember(undefined);
  };
  // Name Header soll ein Click event werden
  // Es soll sich ein PopUp öffnen indem die Auswahl an Gear eingetragen wird
  // Mit einem Button "speichern" werden die Daten in die Tabele eingetragen
  // TODO specihern im Localstorage

  // TODO Table in Component Auslagern

  return (
    <TableWrapper>
      <TableCol>
        <TableData />
        {Object.values(Slots).map((slot, index) => (
          <TableData key={index.toString()}>
            <Text>{slot}</Text>
          </TableData>
        ))}
      </TableCol>
      {raidMembers.map((raidMember, index) => (
        <TableCol key={index.toString()}>
          <TableData>
            <Button
              text={raidMember.name}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                onSelectRaidMember(raidMember);
              }}
            />
          </TableData>
          <TableData>
            <Text>{raidMember.role}</Text>
          </TableData>

          {Object.values(raidMember.equip).map((key, index) => (
            <TableCol key={index.toString()}>
              <TableData>
                <Text>{key.name}</Text>
              </TableData>
            </TableCol>
          ))}
        </TableCol>
      ))}

      {isVisible && selectedRaidMember && (
        <RaidMemberGearPopUp
          raidMember={selectedRaidMember}
          onClose={closePopUp}
          onSave={() => {
            console.log("Hurra");
          }} // function auslagern
        />
      )}
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TableCol = styled.div`
  width: 150px;
  flex-direction: column;
`;

const TableData = styled.div`
  min-height: 80px;
`;

const Text = styled.p`
  font-size: 12pt;
`;
