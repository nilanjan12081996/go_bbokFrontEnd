'use client';

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import { Button } from 'flowbite-react';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';

// ✅ AG Grid v34+ requires module registration
import { ModuleRegistry } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const Page = () => {
  const [rowData] = useState([
    {
      id: "#001",
      customername: "Jammie Oliver",
      mobilenumber: "+1 (202) 555-0147",
      servicename: "Dentist Appointment",
      bookingdate: "25 Jun,2025",
      bookingtime: "10:00 AM - 10:30 AM",
    },
    {
      id: "#002",
      customername: "Oliver Quinn",
      mobilenumber: "+1 (202) 555-0147",
      servicename: "Haircut Appointment",
      bookingdate: "25 Jun,2025",
      bookingtime: "10:00 AM - 10:30 AM",
    },
    {
      id: "#003",
      customername: "Harley Hawk",
      mobilenumber: "+1 (202) 555-0147",
      servicename: "Hair Coloring",
      bookingdate: "25 Jun,2025",
      bookingtime: "10:00 AM - 10:30 AM",
    },
  ]);

  const [columnDefs] = useState([
    { field: "id", headerName: "Serial No.", sortable: false, filter: false },
    { field: "customername", headerName: "Customer Name", sortable: true, filter: true },
    { field: "mobilenumber", headerName: "Mobile Number", sortable: true, filter: true },
    { field: "servicename", headerName: "Service Name", sortable: true, filter: true },
    { field: "bookingdate", headerName: "Booking Date", sortable: true, filter: true },
    { field: "bookingtime", headerName: "Booking Time", sortable: true, filter: true },
    {
      headerName: "Actions",
      field: "actions",
      width: 300,
      cellRenderer: () => (
        <div className="flex gap-2 justify-center items-center">
          <Button className="!border !text-[#00806A] !border-[#00806A] !bg-[#E8FFFB] hover:!bg-[#00806A] font-medium hover:!text-white text-xs px-4 py-0 rounded-md mt-1.5">
            Accept
          </Button>
          <Button className="!border !text-[#D92D20] !border-[#D92D20] !bg-[#FFF1F1] hover:!bg-[#D92D20] font-medium hover:!text-white text-xs px-4 py-0 rounded-md mt-1.5">
            Cancel
          </Button>
          <Button className="!border !text-[#4B4B4B] !border-[#4B4B4B] !bg-[#F0F7FF] hover:!bg-[#4B4B4B] font-medium hover:!text-white text-xs px-4 py-0 rounded-md mt-1.5">
            Reschedule
          </Button>
        </div>
      ),
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
