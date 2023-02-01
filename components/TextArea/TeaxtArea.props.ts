import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface TeaxtAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: FieldError;
}
