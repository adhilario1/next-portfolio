/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Games } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GamesUpdateFormInputValues = {
    title?: string;
    description?: string;
    tags?: string[];
    year?: number;
    type?: string;
    thumbnail_url?: string;
    url?: string;
    outbound_url?: string;
    outbound_label?: string;
    mobile?: boolean;
};
export declare type GamesUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    type?: ValidationFunction<string>;
    thumbnail_url?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    outbound_url?: ValidationFunction<string>;
    outbound_label?: ValidationFunction<string>;
    mobile?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GamesUpdateFormOverridesProps = {
    GamesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail_url?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    outbound_url?: PrimitiveOverrideProps<TextFieldProps>;
    outbound_label?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GamesUpdateFormProps = React.PropsWithChildren<{
    overrides?: GamesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    games?: Games;
    onSubmit?: (fields: GamesUpdateFormInputValues) => GamesUpdateFormInputValues;
    onSuccess?: (fields: GamesUpdateFormInputValues) => void;
    onError?: (fields: GamesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GamesUpdateFormInputValues) => GamesUpdateFormInputValues;
    onValidate?: GamesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GamesUpdateForm(props: GamesUpdateFormProps): React.ReactElement;
