export type User = {
    name:string,
    role:Roles,

}

export enum Roles{
MT="Main Tank",
OT = "Off Tank",
H1="Healer 1",
H2="Healer 2",
M1="Meele 1",
M2="Meele 2",
R1="Ranged 1",
R2="Ranged 2"
}


