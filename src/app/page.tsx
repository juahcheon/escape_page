import { supabase } from '@/api/supabase';
import { getThemes } from '@/api/themes';
import ThemeItem from '@/components/theme-item';
import { ThemeData } from '@/types/types';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";

async function NewTheme() {
  const response = await fetch("/public/mock/themes.json");
  if(!response.ok) {
    return <div>오류가 발생했습니다...</div>
  }

  const NewThemes: ThemeData[] = await response.json();

  return (
    <div>
      {NewThemes.map((theme) => (
        <ThemeItem key={theme.id} {...theme} />
      ))}
    </div>
  )
}

export async function BestTheme() {
  const reservationThemes: ThemeData = await getThemes();

  return (
    <div>
      {reservationThemes.map((theme) => (
        <ThemeItem key={theme.id} {...theme} />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <header>ESCAPE FINAL</header>
      <section>
        <p>주아님, 환영합니다.</p>
        {/* <ReservationTheme />
        <RecommandTheme /> */}
      </section>
      <section>
        <BestTheme />
        <NewTheme />
      </section>
      <footer>
        <Link href="/">공지사항</Link>
        <Link href="/">개인정보취급방침</Link>
        <div>
          <span>상호명 : TEAM ETAL</span>
          <span>대표자 : 천주아</span>
          <span>사업자번호 : 123-45-67891</span>
          <span>주소 : 서울특별시 강남구 테헤란로</span>
          <span>COPYRIGHT ⓒ 2023 ETAL. All right reserved. / CREATED BY JUAH.</span>
        </div>
      </footer>
    </div>
  );
}
