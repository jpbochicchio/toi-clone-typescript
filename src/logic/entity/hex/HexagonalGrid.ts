import {
  Geometry,
  Grid,
  Polygon,
  useChild,
  useNewComponent,
  useType,
  Vector,
} from '@hex-engine/2d';
import HexagonalCell, { RADIUS, WIDTH, HEIGHT } from './HexagonalCell';

export default function HexagonalGrid(position: Vector) {
  useType(HexagonalGrid);

  useNewComponent(() => {
    Geometry({
      shape: Polygon.rectangle(0, 0),
      position: position,
    });
  });

  const grid: Grid<string> = new Grid(6, 6, 'white');
  grid.set(2, 3, "purple");

  for (const [x, y] of grid.contents()) {
    const isOffsetRow: boolean = y % 2 === 1;
    const xOffset: number = isOffsetRow ? WIDTH / 2 : 0;

    useChild(() =>
      HexagonalCell({
        position: new Vector(x * WIDTH + xOffset, y * HEIGHT * 0.75),
        getColor: () => grid.get(x, y),
        setColor: (color: string) => grid.set(x, y, color),
      }),
    );
  }
}
