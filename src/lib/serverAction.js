"use server";

import { revalidatePath } from "next/cache";

export const revalidatePage = async (path) => {
  revalidatePath(path);
};
