import { Card, Title, Paragraph, Text } from "react-native-paper";
import styles from "../../style/global";
import { View, Image } from "react-native";
import Header2Text from "./../TextComponents/Header2Text";
import SubHeaderText from "./../TextComponents/SubHeaderText";

const CardDisplay = (props) => {
  const { title, data } = props;
  return (
    <Card style={{ paddingBottom: 20 }}>
      <Card.Content>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Header2Text>{title}</Header2Text>
            <SubHeaderText label={data.name} />
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
