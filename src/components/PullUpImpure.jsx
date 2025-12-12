let counter = 10;

export default function PullUpImpure() {
  counter = counter + 1;
  // StricMide로 인해 순수하지 않은 랜더링으로 인해
  // 발생하는 버그를 찾기위해 추가적으로 랜더링 진행됨
  // ⚙️ DevTool Components -> Setting -> Debugging -> Hide logs..
  console.log("counter :", counter); // 2번실행
  return <p>나는 턱걸이를 {counter}개 했습니다.</p>;
}
