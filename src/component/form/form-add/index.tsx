import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Modal } from "../../new-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../button";

export type FormAdd = { isShow?: boolean; setClose?: any };

export const FormAdd = ({ isShow = false, setClose }: FormAdd) => {
    const [selectedImg, setSelectedImg] = useState<any>(undefined);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputRef1 = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleSelectImg = (
        event: React.ChangeEvent<HTMLInputElement> | any
    ) => {
        if (event.target.files != null && event.target.files?.length > 0) {
            setSelectedImg(event.target.files[0]);
        }
    };

    const handleDrop = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setSelectedImg(reader.result);
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        setSelectedImg(undefined);
        if (
            inputRef.current != null &&
            textAreaRef.current != null &&
            inputRef1.current != null
        ) {
            inputRef.current.value = "";
            textAreaRef.current.value = "";
            inputRef1.current.value = "";
        }
    }, [isShow]);

    return (
        <Modal isShow={isShow}>
            <form
                className="form-add"
                onSubmit={(e) => {
                    e.preventDefault();
                    const form: any = e.target;
                    setClose(false);
                }}
                onDrop={(e) => handleDrop(e)}
            >
                <FontAwesomeIcon
                    icon={faTimes}
                    className="close-icon"
                    onClick={() => setClose(false)}
                />
                <h1 className="header-form">Add Product</h1>
                <div className="content">
                    <div className="main-content">
                        <p className="label">Name</p>
                        <input
                            ref={inputRef1}
                            type="text"
                            placeholder="Name"
                            className="input-form"
                            id="Name"
                        />
                        <p className="label">Price</p>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Price"
                            className="input-form"
                        />
                        <p className="label">Description</p>
                        <textarea
                            ref={textAreaRef}
                            placeholder="Description"
                            className="input-form input-desc"
                        />
                    </div>
                    {selectedImg != undefined ? (
                        <label
                            className="img-container selected"
                            htmlFor="file"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(event) => handleDrop(event)}
                        >
                            <img
                                src={
                                    typeof selectedImg === "string"
                                        ? selectedImg
                                        : URL.createObjectURL(selectedImg)
                                }
                                className="img"
                            />
                            <div className="overlay-img">
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    className="img-icon-selected"
                                />
                                <p className="desc">Change the image</p>
                            </div>
                        </label>
                    ) : (
                        <label
                            className="img-container"
                            htmlFor="file"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(event) => handleDrop(event)}
                        >
                            <FontAwesomeIcon
                                icon={faImage}
                                className="img-icon"
                            />
                            Upload
                            <br />
                            or
                            <br />
                            drop image here!
                        </label>
                    )}
                    <input
                        type="file"
                        className="hidden"
                        name="file"
                        id="file"
                        accept="image/*"
                        onChange={(event) => handleSelectImg(event)}
                    />
                </div>
                <Button
                    type="submit"
                    primary
                    className="btn-submit"
                    onClick={(e) => {}}
                >
                    Submit
                </Button>
            </form>
        </Modal>
    );
};
