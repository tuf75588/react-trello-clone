import React from 'react';
import { useDragLayer, XYCoord } from 'react-dnd';
import { CustomDragLayerContainer } from '../styles/styles';
import Column from './Column';

// a function to generate new styles on the fly
function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return { display: 'none' };
  }
  const { x, y } = currentOffset;
  // transform the element being dragged to be slightly tilted when dragging is active
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

function CustomDragLayer() {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));
  console.log(isDragging);
  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column id={item.id} text={item.text} index={item.index} />
      </div>
    </CustomDragLayerContainer>
  ) : null;
}

export default CustomDragLayer;
