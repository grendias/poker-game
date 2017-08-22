import React from 'react';
import './TableContainer.css';
import Table from './Table';

const TableContainer = ({ players }) => {
    return <div className="table-container">
        <Table players={ players }/>
    </div>
};

export default TableContainer;