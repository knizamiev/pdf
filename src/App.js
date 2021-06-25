import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import PDFExportPanel from "./pdfExport/PDFExportPanel";
import GridOptionsPanel from "./GridOptionsPannel";


const App = () => {
    const [gridApi, setGridApi] = React.useState();
    const [gridColumnApi, setGridColumnApi] = React.useState();

    const gridOptions = {
        columnDefs: [
            {
                headerName: 'Athlete Details',
                children: [
                    { field: 'athlete' },
                    { field: 'age' },
                    { field: 'country' },
                ]
            },
            {
                headerName: 'Sports Results',
                children: [
                    { field: 'sport' },
                    { field: 'total', columnGroupShow: 'closed' },
                    { field: 'gold', columnGroupShow: 'open' },
                    { field: 'silver', columnGroupShow: 'open' },
                    { field: 'bronze', columnGroupShow: 'open' },
                ]
            }
        ],

    }

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <button onClick={() => {}}>test</button>

            <GridOptionsPanel gridApi={gridApi} columnApi={gridColumnApi} />
            <PDFExportPanel gridApi={gridApi} columnApi={gridColumnApi} />

            <AgGridReact  onGridReady={(e) => {
                setGridApi(e.api);
                setGridColumnApi(e.columnApi);
            }}>
                <AgGridColumn headerName="Athlete Details">
                    <AgGridColumn field="athlete" />
                    <AgGridColumn field="age" />
                    <AgGridColumn field="country" />
                </AgGridColumn>
                <AgGridColumn headerName="Sports Results">
                    <AgGridColumn field="sport" />
                    <AgGridColumn field="total" columnGroupShow="closed" />
                    <AgGridColumn field="gold" columnGroupShow="open" />
                    <AgGridColumn field="silver" columnGroupShow="open" />
                    <AgGridColumn field="bronze" columnGroupShow="open" />
                </AgGridColumn>
            </AgGridReact>
            <AgGridReact  onGridReady={(e) => {
                setGridApi(e.api);
                setGridColumnApi(e.columnApi);
            }}>
                <AgGridColumn headerName="Athlete Details">
                    <AgGridColumn field="athlete" />
                    <AgGridColumn field="age" />
                    <AgGridColumn field="country" />
                </AgGridColumn>
                <AgGridColumn headerName="Sports Results">
                    <AgGridColumn field="sport" />
                    <AgGridColumn field="total" columnGroupShow="closed" />
                    <AgGridColumn field="gold" columnGroupShow="open" />
                    <AgGridColumn field="silver" columnGroupShow="open" />
                    <AgGridColumn field="bronze" columnGroupShow="open" />
                </AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default App;
