import {
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
} from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { Showcase } from '@/components';
import BaseWidget from './widgets/BaseWidget';

const DragGrid = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor)
  );

  return (
    <div className="w-full max-w-2xl">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
      >
        <Showcase data={{}} />
        <SortableContext items={[]}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoFlow: 'dense',
              gridAutoRows: '3fr',
            }}
          >
            <BaseWidget size="small" id="tiny" />
            <BaseWidget size="small" id="tiny" />
            <BaseWidget size="doubleTall" id="slender" />
            <BaseWidget size="doubleWide" id="wide" />
            <BaseWidget size="small" id="tiny" />
            <BaseWidget size="doubleWide" id="wide" />
            <BaseWidget size="small" id="tiny" />
            <BaseWidget size="doubleTall" id="slender" />
            <BaseWidget size="doubleTall" id="slender" />
            <BaseWidget size="small" id="tiny" />
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DragGrid;
