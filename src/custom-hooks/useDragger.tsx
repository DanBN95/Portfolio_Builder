import React, { RefObject, useEffect, useRef } from 'react';

type DraggerProps = {
    boxId: string;
    containerId: string;
}

function useDragger({ boxId, containerId }: DraggerProps) {
  console.log('use dragger', boxId, containerId)

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number,
    startY: number,
    lastX: number,
    lastY: number
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  });

    useEffect(() => {

      const box = document.getElementById(boxId);
      const container = document.getElementById(containerId);
      if (!box || !container) {
        throw new Error("Element with id does not exist!");
      }

      const onMouseDown = (e: MouseEvent) => {
        console.log('on Mouse down')
        isClicked.current = true;
        console.log('on Mouse down', isClicked)
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      }
      const onMouseUp = (e: MouseEvent) => {
        isClicked.current = false;
        if (!box) return;
        coords.current.lastX = box?.offsetLeft;
        coords.current.lastY = box?.offsetTop;
      }
      const onMouseMove = (e: MouseEvent) => {
        // console.log('on moujse move', isClicked.current, box);
        if (!isClicked.current || !box) return;

        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        const nextY = e.clientY - coords.current.startY + coords.current.lastY;

        box.style.top = `${nextY}px`;
        box.style.left = `${nextX}px`;
      }

        box?.addEventListener('mousedown', onMouseDown);
        box?.addEventListener('mouseup', onMouseUp);
        container?.addEventListener('mousemove', onMouseMove);
        container?.addEventListener('mouseleave', onMouseUp);

        const cleanup = () => {
          box?.removeEventListener('mousedown', onMouseDown);
          box?.removeEventListener('mouseup', onMouseUp);
          container?.removeEventListener('mousemove', onMouseMove);
          container?.removeEventListener('mouseleave', onMouseUp);
        };

        return cleanup;
    }, [boxId, containerId]);  
    
}

export default useDragger;