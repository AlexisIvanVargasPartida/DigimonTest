import DigimonCard from "./DigimonCard";

const DigimonList = ({ digimons }) => {
  console.log(digimons)
  return (
    <div className="DigimonList">
      { digimons.map((digimon) => {
        console.log(digimon)
        return (
          <DigimonCard
            name={digimon.name}
            key={digimon.name}
            image={digimon.img}
            types={digimon.level}
            id={digimon.id}
          />
        );
      })}
    </div>
  );
};

DigimonList.defaultProps = {
  digimons: Array(10).fill(""),
};

export default DigimonList;
