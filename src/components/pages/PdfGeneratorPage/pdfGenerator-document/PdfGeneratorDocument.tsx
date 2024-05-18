import { FC } from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

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
  text: {
    fontFamily: "Roboto",
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
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.section}>{image && <Image src={image} />}</View>
      </Page>
    </Document>
  );
};

export default PdfGeneratorDocument;
