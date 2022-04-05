import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { url, rows, columns } = router.query;
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <JigsawPuzzle
        imageSrc={url}
        rows={rows && rows > 0 ? rows : 6}
        columns={columns && columns > 0 ? columns : 6}
        onSolved={() => alert("Solved!")}
        className="jigsaw-puzzle"
      />
    </div>
  );
}
