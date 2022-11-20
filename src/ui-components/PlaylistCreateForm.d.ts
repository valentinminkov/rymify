/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlaylistCreateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
};
export declare type PlaylistCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlaylistCreateFormOverridesProps = {
    PlaylistCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlaylistCreateFormProps = React.PropsWithChildren<{
    overrides?: PlaylistCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlaylistCreateFormInputValues) => PlaylistCreateFormInputValues;
    onSuccess?: (fields: PlaylistCreateFormInputValues) => void;
    onError?: (fields: PlaylistCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PlaylistCreateFormInputValues) => PlaylistCreateFormInputValues;
    onValidate?: PlaylistCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlaylistCreateForm(props: PlaylistCreateFormProps): React.ReactElement;
