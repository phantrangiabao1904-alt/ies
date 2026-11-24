"use client";

import { useState, useTransition } from "react";
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { saveOrder } from "@/actions/cms";

type Item = { id: string; label: string };

function Row({ item }: { item: Item }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });
  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className="flex cursor-grab items-center gap-3 rounded border bg-white px-4 py-3"
      {...attributes}
      {...listeners}
    >
      <span aria-hidden>⋮⋮</span>
      {item.label}
    </li>
  );
}

export function SortableList({ table, initial }: { table: "sections" | "courses"; initial: Item[] }) {
  const [items, setItems] = useState(initial);
  const [status, setStatus] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function onDragEnd({ active, over }: DragEndEvent) {
    if (!over || active.id === over.id) return;
    const from = items.findIndex((i) => i.id === active.id);
    const to = items.findIndex((i) => i.id === over.id);
    setItems(arrayMove(items, from, to));
  }

  function save() {
    startTransition(async () => {
      const res = await saveOrder({ table, ids: items.map((i) => i.id) });
      setStatus(res.ok ? "Đã lưu" : "Lưu thất bại");
    });
  }

  return (
    <div className="space-y-3">
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
          <ul className="space-y-2">
            {items.map((item) => (
              <Row key={item.id} item={item} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
      <button onClick={save} disabled={pending}
        className="rounded bg-brand px-4 py-2 font-semibold text-white disabled:opacity-60">
        {pending ? "Đang lưu..." : "Lưu thứ tự"}
      </button>
      {status && <span className="ml-3 text-sm">{status}</span>}
    </div>
  );
}
