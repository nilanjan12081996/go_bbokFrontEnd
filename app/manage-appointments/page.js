'use client';

import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import { Button } from 'flowbite-react';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';

// ✅ AG Grid v34+ requires module registration
import { ModuleRegistry } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';
import { useDispatch, useSelector } from 'react-redux';
import { calenderData } from '../reducers/DashBoardSlice';
ModuleRegistry.registerModules([AllCommunityModule]);

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const Page = () => {
const { mockApiData } = useSelector((state) => state?.dash);
const dispatch=useDispatch()
 const [rowData, setRowData] = useState([]);
useEffect(()=>{
dispatch(calenderData())
},[])
console.log("mockApiData",mockApiData);

useEffect(()=>{
  if(mockApiData && mockApiData.data && Array.isArray(mockApiData.data))
  {
    const transformedData=mockApiData?.data?.map((appointment)=>(
      {
        id:appointment?.id,
      slot_start:appointment?.slot_start,
      slot_end:appointment?.slot_end,
      date:appointment?.date,
      mobile:appointment?.customer?.mobile,
      service_name:appointment?.service?.service_name,
      service_price:appointment?.service?.service_price,
      duration:appointment?.service?.duration + appointment?.service?.duration_string
      }
      
    ))
     setRowData(transformedData);
  }

},[mockApiData])

  const [columnDefs] = useState([
  
    { 
      field: "service_name", 
      headerName: "Service Name", 
      sortable: true, 
      filter: true,
      width: 150
    },
       { 
      field: "service_price", 
      headerName: "Price", 
      sortable: true, 
      filter: true,
      width: 150
    },
      { 
      field: "duration", 
      headerName: "Duration", 
      sortable: true, 
      filter: true,
      width: 150
    },
    { 
      field: "slot_start", 
      headerName: "Start Slot", 
      sortable: true, 
      filter: true,
      width: 150
    },
    { 
      field: "slot_end", 
      headerName: "End Slot", 
      sortable: true, 
      filter: true,
      width: 150
    },
    { 
      field: "date", 
      headerName: "Date", 
      sortable: true, 
      filter: true,
      width: 150,
    },
    { 
      field: "mobile", 
      headerName: "Mobile", 
      sortable: true, 
      filter: true,
      width: 150,
      
    },
 
  ]);


  return (
    <div className={`${poppins.className} antialiased`}>
      <div className="pt-6 lg:pt-0 mb-6">
        <h3 className="text-[22px] text-black font-medium pb-1">Manage Appointments</h3>
        <p className="text-[13px] text-[#747577]">
          Easily manage, schedule, and track all your appointments in one place.
        </p>
      </div>

      <div className="ag-theme-alpine custom-aggrid relative z-[0]" style={{ height: 500, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={5}
          rowHeight={55}
          headerHeight={45}
          footerHeight={10}
        />
      </div>
    </div>
  );
};

export default Page;
