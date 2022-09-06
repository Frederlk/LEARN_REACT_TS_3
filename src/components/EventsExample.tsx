import { FC, useState, useRef } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("Drag");
    };

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log("dropped");
    };

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder="managed" />
            <input type="text" ref={inputRef} placeholder="unmanaged" />
            <button type="submit" onClick={clickHandler} className="button">
                Отправить
            </button>
            <div draggable onDrag={dragHandler} style={{ width: 200, height: 200, background: "red" }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                style={{ width: 200, height: 200, background: isDrag ? "blue" : "red", marginTop: 20 }}></div>
        </div>
    );
};

export default EventsExample;
