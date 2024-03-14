/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getGames } from "../graphql/queries";
import { updateGames } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function GamesUpdateForm(props) {
  const {
    id: idProp,
    games: gamesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    preview: [],
    description: "",
    tags: [],
    year: "",
    type: "",
    thumbnail_url: "",
    url: "",
    outbound_url: "",
    outbound_label: "",
    mobile: false,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [preview, setPreview] = React.useState(initialValues.preview);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [tags, setTags] = React.useState(initialValues.tags);
  const [year, setYear] = React.useState(initialValues.year);
  const [type, setType] = React.useState(initialValues.type);
  const [thumbnail_url, setThumbnail_url] = React.useState(
    initialValues.thumbnail_url
  );
  const [url, setUrl] = React.useState(initialValues.url);
  const [outbound_url, setOutbound_url] = React.useState(
    initialValues.outbound_url
  );
  const [outbound_label, setOutbound_label] = React.useState(
    initialValues.outbound_label
  );
  const [mobile, setMobile] = React.useState(initialValues.mobile);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gamesRecord
      ? { ...initialValues, ...gamesRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setPreview(cleanValues.preview ?? []);
    setCurrentPreviewValue("");
    setDescription(cleanValues.description);
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue("");
    setYear(cleanValues.year);
    setType(cleanValues.type);
    setThumbnail_url(cleanValues.thumbnail_url);
    setUrl(cleanValues.url);
    setOutbound_url(cleanValues.outbound_url);
    setOutbound_label(cleanValues.outbound_label);
    setMobile(cleanValues.mobile);
    setErrors({});
  };
  const [gamesRecord, setGamesRecord] = React.useState(gamesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGames.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGames
        : gamesModelProp;
      setGamesRecord(record);
    };
    queryData();
  }, [idProp, gamesModelProp]);
  React.useEffect(resetStateValues, [gamesRecord]);
  const [currentPreviewValue, setCurrentPreviewValue] = React.useState("");
  const previewRef = React.createRef();
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const validations = {
    title: [{ type: "Required" }],
    preview: [{ type: "Required" }],
    description: [{ type: "Required" }],
    tags: [{ type: "Required" }],
    year: [],
    type: [{ type: "Required" }],
    thumbnail_url: [],
    url: [{ type: "Required" }],
    outbound_url: [],
    outbound_label: [],
    mobile: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
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
          title,
          preview,
          description,
          tags,
          year: year ?? null,
          type,
          thumbnail_url: thumbnail_url ?? null,
          url,
          outbound_url: outbound_url ?? null,
          outbound_label: outbound_label ?? null,
          mobile,
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
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateGames.replaceAll("__typename", ""),
            variables: {
              input: {
                id: gamesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "GamesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              preview,
              description,
              tags,
              year,
              type,
              thumbnail_url,
              url,
              outbound_url,
              outbound_label,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              preview: values,
              description,
              tags,
              year,
              type,
              thumbnail_url,
              url,
              outbound_url,
              outbound_label,
              mobile,
            };
            const result = onChange(modelFields);
            values = result?.preview ?? values;
          }
          setPreview(values);
          setCurrentPreviewValue("");
        }}
        currentFieldValue={currentPreviewValue}
        label={"Preview"}
        items={preview}
        hasError={errors?.preview?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("preview", currentPreviewValue)
        }
        errorMessage={errors?.preview?.errorMessage}
        setFieldValue={setCurrentPreviewValue}
        inputFieldRef={previewRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Preview"
          isRequired={true}
          isReadOnly={false}
          value={currentPreviewValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.preview?.hasError) {
              runValidationTasks("preview", value);
            }
            setCurrentPreviewValue(value);
          }}
          onBlur={() => runValidationTasks("preview", currentPreviewValue)}
          errorMessage={errors.preview?.errorMessage}
          hasError={errors.preview?.hasError}
          ref={previewRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "preview")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              preview,
              description: value,
              tags,
              year,
              type,
              thumbnail_url,
              url,
              outbound_url,
              outbound_label,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              preview,
              description,
              tags: values,
              year,
              type,
              thumbnail_url,
              url,
              outbound_url,
              outbound_label,
              mobile,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tags", currentTagsValue)
        }
        errorMessage={errors?.tags?.errorMessage}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tags"
          isRequired={true}
          isReadOnly={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={year}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              preview,
              description,
              tags,
              year: value,
              type,
              thumbnail_url,
              url,
              outbound_url,
              outbound_label,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              preview,
              description,
              tags,
              year,
              type: value,
              thumbnail_url,
              url,
              outbound_url,
              outbound_label,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Thumbnail url"
        isRequired={false}
        isReadOnly={false}
        value={thumbnail_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              preview,
              description,
              tags,
              year,
              type,
              thumbnail_url: value,
              url,
              outbound_url,
              outbound_label,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.thumbnail_url ?? value;
          }
          if (errors.thumbnail_url?.hasError) {
            runValidationTasks("thumbnail_url", value);
          }
          setThumbnail_url(value);
        }}
        onBlur={() => runValidationTasks("thumbnail_url", thumbnail_url)}
        errorMessage={errors.thumbnail_url?.errorMessage}
        hasError={errors.thumbnail_url?.hasError}
        {...getOverrideProps(overrides, "thumbnail_url")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={true}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              preview,
              description,
              tags,
              year,
              type,
              thumbnail_url,
              url: value,
              outbound_url,
              outbound_label,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Outbound url"
        isRequired={false}
        isReadOnly={false}
        value={outbound_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              preview,
              description,
              tags,
              year,
              type,
              thumbnail_url,
              url,
              outbound_url: value,
              outbound_label,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.outbound_url ?? value;
          }
          if (errors.outbound_url?.hasError) {
            runValidationTasks("outbound_url", value);
          }
          setOutbound_url(value);
        }}
        onBlur={() => runValidationTasks("outbound_url", outbound_url)}
        errorMessage={errors.outbound_url?.errorMessage}
        hasError={errors.outbound_url?.hasError}
        {...getOverrideProps(overrides, "outbound_url")}
      ></TextField>
      <TextField
        label="Outbound label"
        isRequired={false}
        isReadOnly={false}
        value={outbound_label}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              preview,
              description,
              tags,
              year,
              type,
              thumbnail_url,
              url,
              outbound_url,
              outbound_label: value,
              mobile,
            };
            const result = onChange(modelFields);
            value = result?.outbound_label ?? value;
          }
          if (errors.outbound_label?.hasError) {
            runValidationTasks("outbound_label", value);
          }
          setOutbound_label(value);
        }}
        onBlur={() => runValidationTasks("outbound_label", outbound_label)}
        errorMessage={errors.outbound_label?.errorMessage}
        hasError={errors.outbound_label?.hasError}
        {...getOverrideProps(overrides, "outbound_label")}
      ></TextField>
      <SwitchField
        label="Mobile"
        defaultChecked={false}
        isDisabled={false}
        isChecked={mobile}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              preview,
              description,
              tags,
              year,
              type,
              thumbnail_url,
              url,
              outbound_url,
              outbound_label,
              mobile: value,
            };
            const result = onChange(modelFields);
            value = result?.mobile ?? value;
          }
          if (errors.mobile?.hasError) {
            runValidationTasks("mobile", value);
          }
          setMobile(value);
        }}
        onBlur={() => runValidationTasks("mobile", mobile)}
        errorMessage={errors.mobile?.errorMessage}
        hasError={errors.mobile?.hasError}
        {...getOverrideProps(overrides, "mobile")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || gamesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || gamesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
