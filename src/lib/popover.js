const setPosition = (options = {}) => {
    const getScrollableElement = (el = this) => {
        do {
            const overflow = window.getComputedStyle(el).getPropertyValue("overflow");
            if (/(auto|scroll)/.test(overflow)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);

        return null;
    };

    options = Object.assign(
        {
            container: null,
            handle: null,
            boundary: getScrollableElement(options.container),
            placements: ["bottom", "top-left", "top-end", "top", "top-start", "top-right", "right-end", "right", "right-start", "bottom-right", "bottom-start", "bottom", "bottom-end", "bottom-left", "left-start", "left", "left-end", "bottom-start"],
            placement: "bottom",
            shift: true,
            flip: true,
            offset: 0,
        },
        options
    );

    const { container, handle, boundary } = options;

    const containerRect = container.getBoundingClientRect();
    const handleRect = handle.getBoundingClientRect();
    const boundaryRect = boundary.getBoundingClientRect();

    const positions = [
        { placement: "top-left", left: handleRect.left - containerRect.width, top: handleRect.top - containerRect.height - options.offset },
        { placement: "top-end", left: handleRect.right - containerRect.width, top: handleRect.top - containerRect.height - options.offset },
        { placement: "top", left: handleRect.left - (containerRect.width - handleRect.width) / 2, top: handleRect.top - containerRect.height - options.offset },
        { placement: "top-start", left: handleRect.left, top: handleRect.top - containerRect.height - options.offset },
        { placement: "top-right", left: handleRect.right, top: handleRect.top - containerRect.height - options.offset },

        { placement: "right-end", left: handleRect.right + options.offset, top: handleRect.bottom - containerRect.height },
        { placement: "right", left: handleRect.right + options.offset, top: handleRect.top - (containerRect.height - handleRect.height) / 2 },
        { placement: "right-start", left: handleRect.right + options.offset, top: handleRect.top },

        { placement: "bottom-right", left: handleRect.right, top: handleRect.bottom + options.offset },
        { placement: "bottom-start", left: handleRect.left, top: handleRect.bottom + options.offset },
        { placement: "bottom", left: handleRect.left - (containerRect.width - handleRect.width) / 2, top: handleRect.bottom + options.offset },
        { placement: "bottom-end", left: handleRect.right - containerRect.width, top: handleRect.bottom + options.offset },
        { placement: "bottom-left", left: handleRect.left - containerRect.width, top: handleRect.bottom + options.offset },

        { placement: "left-start", left: handleRect.left - containerRect.width - options.offset, top: handleRect.top },
        { placement: "left", left: handleRect.left - containerRect.width - options.offset, top: handleRect.top - (containerRect.height - handleRect.height) / 2 },
        { placement: "left-end", left: handleRect.left - containerRect.width - options.offset, top: handleRect.bottom - containerRect.height },
    ].filter((position) => options.placements.includes(position.placement));

    let index = positions.findIndex((position) => position.placement === options.placement);
    let counter = 0;

    const getPosition = () => {
        let { placement, left, top } = positions[index];
        let right = left + containerRect.width,
            bottom = top + containerRect.height;

        if (options.flip && (left < boundaryRect.left || top < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom) && counter <= positions.length) {
            ++counter;
            index = (index + positions.length + 1) % positions.length;
            return getPosition();
        }

        if (options.shift) {
            left = Math.max(left, boundaryRect.left + options.offset);
            top = Math.max(top, boundaryRect.top + options.offset);
            left = Math.min(left, boundaryRect.right - options.offset - containerRect.width);
            top = Math.min(top, boundaryRect.bottom - options.offset - containerRect.height);
        }

        return { placement, left, top };
    };

    let { placement, left, top } = getPosition();
    let [x = "center", y = "center"] = placement.split("-");
    if (!["left", "right"].includes(x) && !["top", "bottom"].includes(y)) {
        [x, y] = [y, x];
    }
    // console.log(placement)
    x = x.replace("start", "right").replace("end", "left");
    y = y.replace("start", "bottom").replace("end", "top");
    if (x == "left") x = "right";
    else if (x == "right") x = "left";
    if (y == "top") y = "bottom";
    else if (y == "bottom") y = "top";
    placement = [x, y].join(" ");
    // console.log(placement)

    container.style.setProperty("left", left + "px");
    container.style.setProperty("top", top + "px");
    container.style.setProperty("transform-origin", placement);
};

export { setPosition };
