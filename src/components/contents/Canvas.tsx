import React, { useEffect } from "react";

function Canvas() {
  useEffect(() => {
    const canvas = document.querySelector(
      "#canvas"
    ) as HTMLCanvasElement | null;

    if (canvas) {
      // eslint-disable-next-line no-restricted-globals
      canvas.width = innerWidth;
      // eslint-disable-next-line no-restricted-globals
      canvas.height = innerHeight;

      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "black";
        ctx.lineWidth = 1;

        canvas.onclick = function (event) {
          const x = event.clientX - ctx.canvas.offsetLeft;
          const y = event.clientY - ctx.canvas.offsetTop;
          // x, y 변수에 방금 구한 좌표를 할당해줍니다.

          ctx.fillRect(x - 15, y - 15, 30, 30);
          // 클릭할 때마다 30픽셀*30픽셀 크기의 사각형을 그리도록 하려고 합니다.
          // 이 때, x, y를 그대로 전달하면 해당 좌표부터 사각형이 시작되어 어색한 느낌을 줍니다.
          // 클릭한 위치를 사각형의 정중앙이 되게 하려면 사각형크기/2 한 만큼 좌표에서 빼주면 됩니다.
          // 따라서 x - 15, y - 15 를 전달합니다.
        };
      }
    }
  }, []);

  return (
    <div>
      <canvas id="canvas" width={500} height={500}>
        지원하지 않는 브라우저 입니다.
      </canvas>
    </div>
  );
}

export default Canvas;
