

export const translate3D = (xPos: number, yPos: number, el: HTMLElement) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

export const rotate = (x: number, y: number, el: HTMLElement) => {
    const transform = getComputedStyle(el).transform;
    el.style.transform = `rotateX(${x || '0deg'}) rotateY(${y || '0deg'})`
};

type MoveFnc = (x: number, y: number) => void;
type Options = {
    initialX: number;
    initialY: number;
}

export function draggable(dragItem: HTMLElement, touchTarget: HTMLElement, options?: Options): MoveFnc;
export function draggable(dragItem: HTMLDivElement | HTMLElement, options?: Options): MoveFnc;
export function draggable(dragItem: any, touchTarget?: any, options: any = {}) {
    const container = touchTarget ? touchTarget : dragItem;
    let active = false;
    let currentX: number;
    let currentY: number;
    let initialX: number = touchTarget.initialX || options.initialX;
    let initialY: number = touchTarget.initialY || options.initialY;
    let xOffset = 0;
    let yOffset = 0;

    container.addEventListener("touchstart", dragStart);
    container.addEventListener("touchend", dragEnd);
    container.addEventListener("touchmove", drag);

    container.addEventListener("mousedown", dragStart);
    container.addEventListener("mouseup", dragEnd);
    container.addEventListener("mousemove", drag);

    function dragStart(e: any) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        active = true;
    }

    function dragEnd(e: any) {
        initialX = currentX;
        initialY = currentY;

        active = false;
    }

    function drag(e: any) {
        if (active) {
            e.preventDefault();
            const x = e.type === "touchmove" ? e.touches[0].clientX : e.clientX,
                y = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
            move(x, y);
        }
    }

    function move(x: number, y: number) {
        currentX = x - initialX;
        currentY = y - initialY;

        xOffset = currentX;
        yOffset = currentY;

        translate3D(currentX, currentY, dragItem);
    }

    return move;
}


const getCursorPositionInBlock = (x: number, y: number, target: HTMLDivElement) => {
    const left = x - target.offsetLeft,
        top = y - target.offsetTop;

    return { left, top };
}