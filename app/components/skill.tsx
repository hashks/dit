export default function MyApp() {
  return (
    <div className="container mx-auto p-2 text-center pt-10">
      <h2 className="text-yellow-400 font-bold">SKILLS</h2>
      <RowSkill skill="Komunikasi" level="Intermediate" />
      <RowSkill skill="Desain" level="Intermediate" />
      <RowSkill skill="Pemrograman" level="Basic" />
      <RowSkill skill="Analisis Data" level="Basic" />
    </div>
  );
}

interface RowSkillProps {
  skill: string;
  level: string;
}

function RowSkill(props: RowSkillProps) {
  return (
    <div className="border-2 border-gray-600 rounded-lg bg-gray-700 text-gray-100 p-3 my-3 shadow-md">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6 font-semibold">{props.skill}</div>
          <div className="col-span-12 md:col-span-6">{props.level}</div>
        </div>
      </div>
    </div>
  );
}
