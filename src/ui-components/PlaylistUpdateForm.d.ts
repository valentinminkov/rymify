/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Playlist } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlaylistUpdateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
};
export declare type PlaylistUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlaylistUpdateFormOverridesProps = {
    PlaylistUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlaylistUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlaylistUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    playlist?: Playlist;
    onSubmit?: (fields: PlaylistUpdateFormInputValues) => PlaylistUpdateFormInputValues;
    onSuccess?: (fields: PlaylistUpdateFormInputValues) => void;
    onError?: (fields: PlaylistUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PlaylistUpdateFormInputValues) => PlaylistUpdateFormInputValues;
    onValidate?: PlaylistUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlaylistUpdateForm(props: PlaylistUpdateFormProps): React.ReactElement;
