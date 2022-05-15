import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";
import { weapons } from "../../data/gear";
import { RaidMember } from "../../types/User";

type SelectGearFormProps = {
  onSave: (raidMemberFormData: RaidMember) => void;
  raidMember: RaidMember;
};

export const SelectGearForm = ({
  raidMember,

  onSave,
}: SelectGearFormProps) => {
  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const updatedMember = { ...raidMember };
    updatedMember.equip.waffe.name = data.waffe.value;
    onSave(updatedMember);
  };
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );

  useEffect(() => {
    Object.values(weapons).forEach((weapon) => {
      options.push({ value: weapon.name, label: weapon.name });
    });
  });

  return (
    <div className="SelectGearForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectWrapper>
          <label htmlFor="waffe">Waffe</label>
          <Controller
            name="waffe" // Slots.WAFFE
            control={control}
            render={({ field }) => (
              <Select {...field} options={options} isMulti={false} />
            )}
          />
        </SelectWrapper>
        {/* 
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input placeholder="luo" {...register("lastName")} />
        </div> */}

        <button type="submit">Übernehmen</button>
      </form>
    </div>
  );
};

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
