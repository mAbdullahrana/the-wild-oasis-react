import supabase, { supabaseUrl } from "./supabase.js";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Cabins could not be deleted");
  }

  return data;
}

export async function editCreateCabins(newCabin, id) {
  // https://zeufxerfmxlfliwsfjwc.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

  let query = supabase.from("cabins");

  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Cabins could not be Added");
  }

  if (hasImagePath) return data;
  
  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Image is not uploaded");
  }

  return data;
}
