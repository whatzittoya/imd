import { Card, Title, Paragraph, Text } from "react-native-paper";
import styles from "../../style/global";
import { View, Image } from "react-native";
const CardDisplay = (props) => {
  const { title, data } = props;
  return (
    <Card style={{ paddingBottom: 20 }}>
      <Card.Content>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Title>{title}</Title>
            <Paragraph>{data.name}</Paragraph>
          </View>
          <Image
            style={styles.image}
            source={{
              uri: data.img,
            }}
          />
        </View>
      </Card.Content>
    </Card>
  );
};
export default CardDisplay;
