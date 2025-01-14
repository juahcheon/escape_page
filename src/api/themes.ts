import { supabase } from "./supabase";

export async function getThemes() {
  const { data, error } = await supabase.from("theme").select("*");

    if(error) {
      console.log("데이터 패칭 실패", error);
      return [];
    }

    return data;
}