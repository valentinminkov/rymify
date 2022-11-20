import { useState } from "react";
import { TextField } from "@aws-amplify/ui-react";
import { Loader } from "@aws-amplify/ui-react";
import { Text } from "@aws-amplify/ui-react";
import { Button } from "@aws-amplify/ui-react";
import { View } from "@aws-amplify/ui-react";
import classNames from "classnames";
import styles from "./PlaylistDetails.module.scss";

export default function PlaylistDetails() {
  const [loadingData, setLoadingData] = useState(false);

  const fetchData = (toggle) => {
    setLoadingData(toggle);
  };

  return (
    <View as="div" className={styles.container}>
      <View as="div" className={styles.controlsContainer}>
        <TextField className={styles.textField} label="Playlist url" />
        <Button onClick={() => fetchData(!loadingData)}>
          Fetch playlist data
        </Button>
      </View>
      <View
        as="div"
        className={classNames(styles.dataContainer, {
          [styles.display]: loadingData,
        })}
      >
        {loadingData && (
          <View as="div">
            <Text variation="primary">Loading playlist data</Text>

            <Loader variation="linear" className={styles.loader} />
          </View>
        )}
      </View>
    </View>
  );
}
