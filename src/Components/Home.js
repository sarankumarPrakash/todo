import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import '../Components/Style.css'
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';

const columns = [
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'taskName', headerName: 'Task Name', width: 150 },
    { field: 'action', headerName: 'Action', width: 150 },
]
const rows = [
    { id: 1, taskName: 'Snow' },
    { id: 2, taskName: 'Lannister' },
    { id: 3, taskName: 'Lannister' },

];





const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleCall = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button variant="contained"
                style={{ marginBottom: "5%", float: "right", marginRight: "20%", marginTop: "2%" }}
                onClick={handleCall}>
                Add Task
            </Button>
            <Backdrop
                open={open}
                onClick={handleClose}
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />            </Backdrop>

            <DataGrid
                style={{ height: 400, width: "80%" }}

                rows={rows}
                columns={columns}
                // rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}



export default Home;