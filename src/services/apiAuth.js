import supabase, { supabaseUrl } from "./supabase.js";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function signUp({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  let authError;

  // User exists, but is fake. See https://supabase.com/docs/reference/javascript/auth-signup

  // Checking if the account with the same email is already exist
  if (data?.user && !data.user?.identities.length) {
    authError = {
      name: "AuthApiError",
      message: "This email has already been registered",
    };
  } else if (error) {
    authError = {
      name: error.name,
      message: error.message,
    };
  }

  if (authError) throw new Error(authError.message);

  return data;
}

export async function updateCurrentUser({ fullName, password, avatar }) {
  // 1) update password or full name
  let updateData;
  if (fullName) updateData = { data: { fullName } };

  if (password) updateData = { password };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (!avatar) return data;

  if (error) throw new Error(error.message);

  //2.1 delete the already present image
  const hasImage = data.user.user_metadata.avatar;

  if (hasImage) {
    const existingFilePath = data.user.user_metadata.avatar.split("/")?.pop();

    const { data: imageDeleteData, error: imageDeleteError } =
      await supabase.storage.from("avatars").remove([existingFilePath]);

    if (imageDeleteError) throw new Error(imageDeleteError.message);

    console.log("Deleted image ", imageDeleteData);
  }

  // Uploading image

  const fileName = `avatar -${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3) update avatar in the user
  const { data: updatedUser, error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);

  return updatedUser;
}
