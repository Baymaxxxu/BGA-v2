import { useState, useEffect } from "react";

export default function CategoryForm({
    selected,
    onSubmit,
}) {

    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");

    useEffect(() => {

        if (selected) {
            setName(selected.name);
            setIcon(selected.icon ?? "");
        } else {
            setName("");
            setIcon("");
        }

    }, [selected]);

    function submit(e) {

        e.preventDefault();

        onSubmit({
            name,
            icon,
        });

    }

    return (

        <form
            onSubmit={submit}
            className="space-y-4"
        >

            <input
                className="border rounded-lg w-full p-3"
                placeholder="Nama kategori"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <input
                className="border rounded-lg w-full p-3"
                placeholder="Icon"
                value={icon}
                onChange={(e)=>setIcon(e.target.value)}
            />

            <button
                className="bg-blue-600 text-white w-full rounded-lg p-3"
            >

                Simpan

            </button>

        </form>

    );

}