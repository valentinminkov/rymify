/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Song } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SongUpdateForm(props) {
  const {
    id,
    song,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    artist: undefined,
    name: undefined,
    spotifyTrackId: undefined,
  };
  const [artist, setArtist] = React.useState(initialValues.artist);
  const [name, setName] = React.useState(initialValues.name);
  const [spotifyTrackId, setSpotifyTrackId] = React.useState(
    initialValues.spotifyTrackId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...songRecord };
    setArtist(cleanValues.artist);
    setName(cleanValues.name);
    setSpotifyTrackId(cleanValues.spotifyTrackId);
    setErrors({});
  };
  const [songRecord, setSongRecord] = React.useState(song);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Song, id) : song;
      setSongRecord(record);
    };
    queryData();
  }, [id, song]);
  React.useEffect(resetStateValues, [songRecord]);
  const validations = {
    artist: [{ type: "Required" }],
    name: [{ type: "Required" }],
    spotifyTrackId: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          artist,
          name,
          spotifyTrackId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          const original = await DataStore.query(Song, id);
          await DataStore.save(
            Song.copyOf(original, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "SongUpdateForm")}
    >
      <TextField
        label="Artist"
        isRequired={true}
        isReadOnly={false}
        defaultValue={artist}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist: value,
              name,
              spotifyTrackId,
            };
            const result = onChange(modelFields);
            value = result?.artist ?? value;
          }
          if (errors.artist?.hasError) {
            runValidationTasks("artist", value);
          }
          setArtist(value);
        }}
        onBlur={() => runValidationTasks("artist", artist)}
        errorMessage={errors.artist?.errorMessage}
        hasError={errors.artist?.hasError}
        {...getOverrideProps(overrides, "artist")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist,
              name: value,
              spotifyTrackId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Spotify track id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={spotifyTrackId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              artist,
              name,
              spotifyTrackId: value,
            };
            const result = onChange(modelFields);
            value = result?.spotifyTrackId ?? value;
          }
          if (errors.spotifyTrackId?.hasError) {
            runValidationTasks("spotifyTrackId", value);
          }
          setSpotifyTrackId(value);
        }}
        onBlur={() => runValidationTasks("spotifyTrackId", spotifyTrackId)}
        errorMessage={errors.spotifyTrackId?.errorMessage}
        hasError={errors.spotifyTrackId?.hasError}
        {...getOverrideProps(overrides, "spotifyTrackId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
