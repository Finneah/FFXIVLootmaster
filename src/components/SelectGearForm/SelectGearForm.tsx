import React from "react";
import { useForm } from "react-hook-form";
import { RaidMember } from "../../types/User";

type SelectGearFormProps = {
  onSave: () => void;
  raidMember: RaidMember;
};

export const SelectGearForm = ({
  raidMember,

  onSave,
}: SelectGearFormProps) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    onSave();
  };

  return (
    <div className="SelectGearForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">Waffe</label>
          <input placeholder="bill" {...register("firstName")} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input placeholder="luo" {...register("lastName")} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            {...register("email")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
