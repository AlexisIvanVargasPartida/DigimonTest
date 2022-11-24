import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './DigimonList.css';

const DigimonCard = ({ name, image, level, id}) => {
  const typesString = level;

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export default DigimonCard;
