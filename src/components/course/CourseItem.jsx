function HeartIconBtn({ handleFavorite, isFavorite = false }) {
  return (
    <button className="btn" onClick={handleFavorite}>
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
  // handleItemClick이 실행되는 버블링 막기
  function handleFavorite(e) {
    e.stopPropagation();
    alert(isFavorite ? "좋아요" : "모르겠어요");
  }

  // handleFavorite 캡쳐링 막기 예시
  function handleItemClick() {
    // e.stopPropagation;
    alert("item click");
    window.open(link, "_blank"); // 새창열기
  }

  return (
    <>
      {/* 캡쳐링 동작은 Capture을 뒤에 붙혀주면된다. */}
      {/* <article className="course" onClickCapture={handleItemClick}> */}
      <article className="course" onClick={handleItemClick}>
        <img className="course__img" src={thumbnail} alt="" />
        <div className="course__body">
          <div className="course__title">{title}</div>
          <div className="course__description">{description}</div>
          <div className="course__icons">
            {
              <HeartIconBtn
                handleFavorite={handleFavorite}
                isFavorite={isFavorite}
              />
            }
            {<LinkIconBtn link={link} />}
          </div>
        </div>
      </article>
    </>
  );
}
