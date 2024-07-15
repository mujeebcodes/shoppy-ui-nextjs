"use server";

import { FormResponse } from "@/app/common/form-error.interface";
import { API_URL } from "@/app/common/constants/api";
import { getErrorMessage } from "@/app/common/utils/errors";
import { post } from "@/app/common/utils/fetch";
import { redirect } from "next/navigation";

export default async function createUser(
  _prevState: FormResponse,
  formData: FormData
) {
  const { error } = await post("users", formData);

  if (error) {
    return { error };
  }

  redirect("/auth/login");
}
