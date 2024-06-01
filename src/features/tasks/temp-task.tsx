import { closestCenter, DndContext } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { useState } from "react";

const initialData = {
  lanes: {
    "lane-1": { id: "lane-1", title: "To Do", cardIds: ["card-1", "card-2"] },
    "lane-2": { id: "lane-2", title: "In Progress", cardIds: ["card-3"] },
    "lane-3": { id: "lane-3", title: "Done", cardIds: [] },
  },
  cards: {
    "card-1": { id: "card-1", content: "Task 1" },
    "card-2": { id: "card-2", content: "Task 2" },
    "card-3": { id: "card-3", content: "Task 3" },
  },
};

function KanbanBoard() {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const [sourceLaneId, sourceCardId] = active.id.split("-");
    const [destinationLaneId] = over.id.split("-");

    if (sourceLaneId !== destinationLaneId) {
      const sourceLane = data.lanes[sourceLaneId];
      const destinationLane = data.lanes[destinationLaneId];
      const sourceCardIndex = sourceLane.cardIds.indexOf(sourceCardId);
      const destinationCardIndex = destinationLane.cardIds.indexOf(over.id.split("-")[1]);

      const newSourceCardIds = [...sourceLane.cardIds];
      newSourceCardIds.splice(sourceCardIndex, 1);

      const newDestinationCardIds = [...destinationLane.cardIds];
      newDestinationCardIds.splice(destinationCardIndex, 0, sourceCardId);

      setData({
        ...data,
        lanes: {
          ...data.lanes,
          [sourceLaneId]: {
            ...sourceLane,
            cardIds: newSourceCardIds,
          },
          [destinationLaneId]: {
            ...destinationLane,
            cardIds: newDestinationCardIds,
          },
        },
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {Object.values(data.lanes).map((lane) => (
          <Lane key={lane.id} lane={lane} cards={lane.cardIds.map((cardId) => data.cards[cardId])} />
        ))}
      </div>
    </DndContext>
  );
}

function Lane({ lane, cards }) {
  return (
    <div style={{ width: "300px", padding: "1rem", border: "1px solid #ccc", borderRadius: "4px" }}>
      <h3>{lane.title}</h3>
      <SortableContext items={cards} strategy={rectSortingStrategy}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </SortableContext>
    </div>
  );
}

function Card({ card }) {
  return (
    <div
      style={{
        margin: "0.5rem 0",
        padding: "1rem",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      {card.content}
    </div>
  );
}

export default KanbanBoard;
