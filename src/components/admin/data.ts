import React, {useEffect, useState} from "react";
const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "User Id", uid: "userId", sortable: true},
    {name: "AGE", uid: "age", sortable: true},
    {name: "TITLE", uid: "title", sortable: true},
    {name: "TEAM", uid: "team"},
    {name: "EMAIL", uid: "email"},
    {name: "STATUS", uid: "status", sortable: true},
    {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
    {name: "Active", uid: "active"},
    {name: "Paused", uid: "paused"},
    {name: "Vacation", uid: "vacation"},
];



export {columns, statusOptions};
