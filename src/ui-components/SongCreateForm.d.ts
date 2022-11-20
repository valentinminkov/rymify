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
export declare type SongCreateFormInputValues = {
    artist?: string;
    name?: string;
    spotifyTrackId?: string;
};
export declare type SongCreateFormValidationValues = {
    artist?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    spotifyTrackId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SongCreateFormOverridesProps = {
    SongCreateFormGrid?: FormProps<GridProps>;
    artist?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    spotifyTrackId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SongCreateFormProps = React.PropsWithChildren<{
    overrides?: SongCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SongCreateFormInputValues) => SongCreateFormInputValues;
    onSuccess?: (fields: SongCreateFormInputValues) => void;
    onError?: (fields: SongCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SongCreateFormInputValues) => SongCreateFormInputValues;
    onValidate?: SongCreateFormValidationValues;
} & React.CSSProperties>;
export default function SongCreateForm(props: SongCreateFormProps): React.ReactElement;
