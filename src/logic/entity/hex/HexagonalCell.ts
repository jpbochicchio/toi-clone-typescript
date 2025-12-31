import {
  Geometry,
  Mouse,
  Polygon,
  useDraw,
  useNewComponent,
  useType,
  Vector,
} from '@hex-engine/2d';

export const RADIUS = 16;
export const WIDTH = Math.sqrt(3) * RADIUS;
export const HEIGHT = 2 * RADIUS;

export default function HexagonalCell({
  position,
  getColor,
  setColor,
}: {
  position: Vector;
  getColor: () => string;
  setColor: (color: string) => void;
}) {
  useType(HexagonalCell);

  const shape: Polygon = new Polygon([
    new Vector(0.5 * WIDTH, 0),
    new Vector(WIDTH, 0.25 * HEIGHT),
    new Vector(WIDTH, 0.75 * HEIGHT),
    new Vector(0.5 * WIDTH, HEIGHT),
    new Vector(0, 0.75 * HEIGHT),
    new Vector(0, 0.25 * HEIGHT),
  ]);

  useNewComponent(() => Geometry({ shape, position }));
  const mouse = useNewComponent(Mouse);

  useDraw((context) => {
    context.fillStyle = getColor();
    shape.draw(context, 'fill');

    if (mouse.isInsideBounds) {
      context.lineWidth = 3;
      context.strokeStyle = 'cyan';
    } else {
      context.lineWidth = 1;
      context.strokeStyle = 'black';
    }

    shape.draw(context, 'stroke');
  });

  mouse.onClick(() => {
    setColor('blue');
  });

  mouse.onRightClick(() => {
    setColor('purple');
  });

  mouse.onMiddleClick(() => {
    setColor('white');
  });
}
