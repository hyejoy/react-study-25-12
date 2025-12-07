function HeartIconBtn({ isFavorite }) {
  return (
    <button className="btn">
      {
        <img
          className="btn__img"
          src={`/img/heart-${isFavorite ? "fill-" : ""}icon.svg`}
        />
      }
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    link && (
      <a className="btn" href={link} target="_blank" rel="noreferrer">
        <img className="btn__img" src="/img/link-icon.svg" alt="" />
      </a>
    )
  );
}

export default function CourseItem({
  title,
  description,
  thumbnail,
  isFavorite,
  link,
}) {
  return (
    <>
      <article className="course">
        <img className="course__img" src={thumbnail} alt="" />
        <div className="course__body">
          <div className="course__title">{title}</div>
          <div className="course__description">{description}</div>
          <div className="course__icons">
            {<HeartIconBtn isFavorite={isFavorite} />}
            {<LinkIconBtn link={link} />}
          </div>
        </div>
      </article>
    </>
  );
}
