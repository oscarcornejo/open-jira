import { DragEvent, FC, useContext } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "../../interfaces";
import { UIContext } from "../../context/ui";
import { dateFunctions } from "../../utils";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const router = useRouter();

  const { setStartDragging, setEndtDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);
    setStartDragging();
  };

  const onDragEnd = () => {
    setEndtDragging();
  };

  const handleClick = () => {
    router.push(`/entries/${entry._id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{ marginBottom: 1 }}
      //   Eventos de drag
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">
            {`${dateFunctions.getFormatDistanceToNow(entry.createdAt)}`}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
