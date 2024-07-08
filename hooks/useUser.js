import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function useUser() {
  const [isLoggedIn, setLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getAuth() {
      const response = await fetch(`/api/auth`);

      if (!response.ok) {
        alert("로그인을 해야 이용할 수 있는 기능입니다.");
        location.href = `${location.origin}/signin?destination_url=${location.href}`;
        return;
      }

      const { result } = await response.json();
      // NOTE: (임시) 권한 체크 로직 해제
      const { courses: userCourses } = result.data;

      const courseEnrolled = !!userCourses.find((course) =>
        router.basePath.includes(course.courses.title_slug),
      );

      if (!courseEnrolled) {
        alert("코스를 결제해야 이용할 수 있는 기능입니다.");
        location.href = location.origin;
        return;
      }

      if (result.ok) {
        setLogin(true);
        return;
      }
    }

    if (process.env.NODE_ENV === "production") {
      getAuth();
    }
  }, []);

  return { isLoggedIn };
}
