import { FC } from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

interface IPdfGeneratorDocumentProps {
  title: string;
  image: string;
}

const PdfGeneratorDocument: FC<IPdfGeneratorDocumentProps> = ({
  title,
  image,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text>{title}</Text>
        </View>
        <View style={styles.section}>{image && <Image src={image} />}</View>
      </Page>
    </Document>
  );
};

export default PdfGeneratorDocument;
