import Image from "next/image";
import type { ThemeData } from "../types";

export default function ThemeItem({
  id,
  title,
  description,
  genre,
  level,
  rating,
  local,
  location,
  open,
  address,
  like,
  coverImgUrl
}: ThemeData) {
  return (
    <div>
      <span>이달의 BEST 테마</span>
      <div>
        <Image src={coverImgUrl} width={40} height={40} alt={`BEST 방탈출의 표지 이미지`} />
      </div>
    </div>
  )
}