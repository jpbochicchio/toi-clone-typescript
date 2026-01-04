import {
  useType,
  useNewComponent,
  useChild,
  Canvas,
  Vector,
  Label,
  SystemFont,
  useDraw,
} from "@hex-engine/2d";
import HexGrid from "./logic/entity/hex/HexGrid";

export default function Root() {
  useType(Root);

  const canvas = useNewComponent(() => Canvas({ backgroundColor: "white" }));
  canvas.fullscreen();

  useChild(() => HexGrid(new Vector(40, 60), 10, 10));
}