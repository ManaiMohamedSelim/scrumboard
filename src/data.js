import { v4 } from "uuid";

export const itemsFromBackend = [
    { id: v4(), content: "First task" },
    { id: v4(), content: "Second task" },
    { id: v4(), content: "Third task" },
    { id: v4(), content: "Fourth task" },
    { id: v4(), content: "Fifth task" }
];

export const columnsFromBackend = {
    [v4()]: {
        name: "Requested",
        items: itemsFromBackend
    },
    [v4()]: {
        name: "To do",
        items: []
    },
    [v4()]: {
        name: "In Progress",
        items: []
    },
    [v4()]: {
        name: "Done",
        items: []
    }
};