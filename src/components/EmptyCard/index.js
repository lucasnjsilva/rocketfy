import React, { useRef, useContext } from 'react';
import BoardContext from '../Board/context';
import { useDrop } from 'react-dnd';
import { Container } from './styles';

export default function EmptyCard({ listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      const draggedIndex = item.index;         

      move(draggedListIndex, targetListIndex, draggedIndex);
      
      item.index = draggedIndex;
      item.listIndex = targetListIndex;

      if (!monitor.isDragging) {
        setTimeout(() => {monitor.endDrag()});
        console.log('OK');        
      }
    }
  });

  dropRef(ref);

  return (
    <Container ref={ref}>
      <p>Drag or create a new task!</p>
    </Container>
  )
}
