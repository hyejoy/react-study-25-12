import "./AppCourse.css";
import CourseForm_Immer from "./components/course/CourseForm_Immer";
import CourseListCard from "./components/course/CourseListCard";

const courseList = [
  {
    title: "입문자를 위한, HTML&CSS 웹 개발 입문",
    description: "웹 개발에 필요한 기본 지식을 배웁니다.",
    thumbnail: "/img/htmlcss.png",
    isFavorite: true,
  },
  {
    title: "입문자를 위한, ES6+ 최신 자바스크립트 입문",
    description: "쉽고! 알찬! 내용을 준비했습니다.",
    thumbnail: "/img/js.png",
    isFavorite: false,
    link: "https://inf.run/Kpnd",
  },
  {
    title: "포트폴리오 사이트 만들고 배포까지!",
    description: "포트폴리오 사이트를 만들고 배포해 보세요.",
    thumbnail: "/img/portfolio.png",
    isFavorite: true,
    link: "https://inf.run/YkAN",
  },
];

const favoriteList = courseList.filter((course) => course.isFavorite);

export default function App() {
  return (
    <>
      <main>
        {/* <CourseListCard title="강의목록" courseList={courseList} /> */}
        <CourseForm_Immer />
        <CourseListCard title="관심 강의" courseList={favoriteList} />
      </main>
    </>
  );
}
