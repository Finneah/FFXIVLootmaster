import { useEffect, useState } from "react";
import { raidMember as defaultRaidMember } from "../../redux/raidMember";
import { Slots } from "../../types/Gear";
import styled from "styled-components";
import { RaidMember } from "../../types/RaidMember";
import { Button } from "../Button/Button";
import { RaidMemberGearPopUp } from "../RaidMemberGearPopUp/RaidMemberGearPopUp";
import { useSelector } from "react-redux";
import useAppDispatch from "../../hooks/useAppDispatch";
import { fetchAllJobs } from "../../redux/jobs/jobs.actions";
import { RootState } from "../../redux/root/root.types";
import { ClassJob } from "../../types/Job";
/**
 * FUNKTIONEN
 * Schreibweise = const foo =()=>{}
 * Eine Funktion tut nur EINE Sache
 * Eine Funktion heist nachdem was sie tut
 */
export const Gearlist = () => {
  /** PROPS */
  /** STATE */
  const [raidMembers, setRaidMembers] =
    useState<RaidMember[]>(defaultRaidMember);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRaidMember, setSelectedRaidMember] = useState<RaidMember>();

  /** HOOKS */
  //reagiert wenn komponente geladen wird oder selectedRaidMember sich ändert
  useEffect(() => {
    setIsVisible(true);
  }, [selectedRaidMember]);

  /** HANDLER*/
  const resetSelectedAndClosePopUp = () => {
    setIsVisible(false);
    setSelectedRaidMember(undefined);
  };

  const onSelectRaidMember = (raidMember: RaidMember) => {
    // setze ausgewählten raidmember
    setSelectedRaidMember(raidMember);
    // raidmember gesetzt? öffne popup
  };

  // TODO specihern im Localstorage

  // TODO Table in Component Auslagern
  // TODO um die Table muss eine "View" (div) das den ganzen Screen darstellt
  //** VIEW FUNCTIONS */
  return (
    <>
      <TableWrapper>
        <TableCol>
          {/**Eigene Komponente Header */}
          <TableData />
          {Object.values(Slots).map((slot, index) => (
            <TableData key={index.toString()}>
              <Text>{slot}</Text>
            </TableData>
          ))}
        </TableCol>

        {raidMembers.map((raidMember, index) => (
          <TableCol key={index.toString()}>
            {/**Eigene Komponente RaidMemberCol */}
            <TableData>
              <Button
                text={raidMember.name}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  onSelectRaidMember(raidMember);
                }}
              />
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
            onClose={resetSelectedAndClosePopUp}
            onSave={(data: RaidMember) => {
              const findRaidMembers = [...raidMembers];

              if (findRaidMembers) {
                findRaidMembers.find((raidMember) => {
                  if (raidMember.name === data.name) {
                    raidMember = data;
                  }
                  return raidMember.name === data.name;
                });
                setRaidMembers(findRaidMembers);
                resetSelectedAndClosePopUp();

                // BEISPIEL LOCAL STORAGE
                // localStorage.setItem(data.name, JSON.stringify(data));
                // const textFromStorage = localStorage.getItem("Spencer");
                // console.log(textFromStorage, JSON.parse(textFromStorage || ""));
              }
            }} // function auslagern wie close PopUp
          />
        )}
      </TableWrapper>
    </>
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
