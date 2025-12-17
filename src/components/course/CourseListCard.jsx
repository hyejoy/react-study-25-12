import { Fragment } from "react";
import Card from "../Card";
import CourseItem from "./CourseItem";
import { v4 as uuidv4 } from "uuid";

export default function CourseListCard({ title, courseList, onFavorite }) {
  const lastIndex = courseList.length - 1;
  return (
    <Card title={title}>
      {/* Card childern */}
      {/* 여러개의 노드를 렌더링 하고 싶을때는 프레그먼트를 사용한다. */}
      {courseList.map((course, index) => (
        <Fragment key={uuidv4()}>
          <CourseItem {...course} onFavorite={onFavorite} />
          {index !== lastIndex && <hr className="divider" />}
        </Fragment>
      ))}
    </Card>
  );
}
