import {
  useType,
  useNewComponent,
  useChild,
  Canvas,
  Vector,
  SystemFont,
  Label,
  useDraw,
} from '@hex-engine/2d';
import HexagonalGrid from './logic/entity/hex/HexagonalGrid';

export default function Root() {
  useType(Root);

  const canvas = useNewComponent(() => Canvas({ backgroundColor: 'white' }));
  canvas.fullscreen();

  useChild(() => HexagonalGrid(new Vector(20, 50)));

  useChild(() => {
    const font = useNewComponent(() =>
      SystemFont({ name: 'sans-serif', size: 16, color: 'black' }),
    );

    const label = useNewComponent(() =>
      Label({
        text: 'Left click cell for blue, right for purple, middle for white',
        font: font,
      }),
    );

    useDraw((context) => {
      label.draw(context, { x: 3, y: font.size});
    });
  });

  const canvasCenter = new Vector(
    canvas.element.width / 2,
    canvas.element.height / 2,
  );
}

