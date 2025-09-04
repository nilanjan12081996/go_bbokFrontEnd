// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Poppins } from 'next/font/google';
// import { Button } from 'flowbite-react';

// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { AgGridReact } from 'ag-grid-react';

// // ✅ AG Grid v34+ requires module registration
// import { ModuleRegistry } from 'ag-grid-community';
// import { AllCommunityModule } from 'ag-grid-community';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllBots } from '../reducers/CreateBotSlice';
// ModuleRegistry.registerModules([AllCommunityModule]);

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
// });

// const Page = () => {
//     const{botList}=useSelector((state)=>state?.bot)
//     const dispatch=useDispatch()
//     useEffect(()=>{
// dispatch(getAllBots({
//     page:1,
//     limit:10
// }))
//     },[])
//   const [rowData] = useState([
//     {
//       id: "#001",
//       customername: "Jammie Oliver",
//       mobilenumber: "+1 (202) 555-0147",
//       servicename: "Dentist Appointment",
//       bookingdate: "25 Jun,2025",
//       bookingtime: "10:00 AM - 10:30 AM",
//     },
//     {
//       id: "#002",
//       customername: "Oliver Quinn",
//       mobilenumber: "+1 (202) 555-0147",
//       servicename: "Haircut Appointment",
//       bookingdate: "25 Jun,2025",
//       bookingtime: "10:00 AM - 10:30 AM",
//     },
//     {
//       id: "#003",
//       customername: "Harley Hawk",
//       mobilenumber: "+1 (202) 555-0147",
//       servicename: "Hair Coloring",
//       bookingdate: "25 Jun,2025",
//       bookingtime: "10:00 AM - 10:30 AM",
//     },
//   ]);

//   const [columnDefs] = useState([
//     { field: "id", headerName: "Serial No.", sortable: false, filter: false },
//     { field: "customername", headerName: "Customer Name", sortable: true, filter: true },
//     { field: "mobilenumber", headerName: "Mobile Number", sortable: true, filter: true },
//     { field: "servicename", headerName: "Service Name", sortable: true, filter: true },
//     { field: "bookingdate", headerName: "Booking Date", sortable: true, filter: true },
//     { field: "bookingtime", headerName: "Booking Time", sortable: true, filter: true },
//     {
//       headerName: "Actions",
//       field: "actions",
//       width: 300,
//       cellRenderer: () => (
//         <div className="flex gap-2 justify-center items-center">
//           <Button className="!border !text-[#00806A] !border-[#00806A] !bg-[#E8FFFB] hover:!bg-[#00806A] font-medium hover:!text-white text-xs px-4 py-0 rounded-md mt-1.5">
//             Accept
//           </Button>
//           <Button className="!border !text-[#D92D20] !border-[#D92D20] !bg-[#FFF1F1] hover:!bg-[#D92D20] font-medium hover:!text-white text-xs px-4 py-0 rounded-md mt-1.5">
//             Cancel
//           </Button>
//           <Button className="!border !text-[#4B4B4B] !border-[#4B4B4B] !bg-[#F0F7FF] hover:!bg-[#4B4B4B] font-medium hover:!text-white text-xs px-4 py-0 rounded-md mt-1.5">
//             Reschedule
//           </Button>
//         </div>
//       ),
//     },
//   ]);

//   return (
//     <div className={`${poppins.className} antialiased`}>
//       <div className="pt-6 lg:pt-0 mb-6">
//         <h3 className="text-[22px] text-black font-medium pb-1">Manage Company</h3>
//         {/* <p className="text-[13px] text-[#747577]">
//           Easily manage, schedule, and track all your appointments in one place.
//         </p> */}
//       </div>

//       <div className="ag-theme-alpine custom-aggrid relative z-[0]" style={{ height: 500, width: "100%" }}>
//         <AgGridReact
//           rowData={rowData}
//           columnDefs={columnDefs}
//           pagination={true}
//           paginationPageSize={5}
//           rowHeight={55}
//           headerHeight={45}
//           footerHeight={10}
//         />
//       </div>
//     </div>
//   );
// };

// export default Page;





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
import { getAllBots } from '../reducers/CreateBotSlice';
ModuleRegistry.registerModules([AllCommunityModule]);

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const Page = () => {
  const { botList } = useSelector((state) => state?.bot);
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    dispatch(getAllBots({
      page: 1,
      limit: 10
    }));
  }, []);

  // Transform API data for AG Grid
  useEffect(() => {
    if (botList && botList.data && Array.isArray(botList.data)) {
      const transformedData = botList.data.map((company, index) => ({
       
        companyId: company.id || 'NA',
        companyName: company.company_name || 'NA',
        industryName: company.industry?.industry_name || 'NA',
        servicesCount: company.service?.length || 0,
        serviceNames: company.service?.length > 0 
          ? company.service.map(service => service.service_name).join(', ') 
          : 'NA',
        status: company.status === 1 ? 'Active' : 'Inactive',
        createdAt: company.created_at 
          ? new Date(company.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })
          : 'NA',
        updatedAt: company.updated_at 
          ? new Date(company.updated_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })
          : 'NA',
        userId: company.user_id || 'NA',
        industryId: company.industry_id || 'NA'
      }));
      setRowData(transformedData);
    }
  }, [botList]);

  const [columnDefs] = useState([
    // { 
    //   field: "serialNo", 
    //   headerName: "Serial No.", 
    //   sortable: false, 
    //   filter: false,
    //   width: 100
    // },
    { 
      field: "companyName", 
      headerName: "Company Name", 
      sortable: true, 
      filter: true,
      width: 180
    },
    { 
      field: "industryName", 
      headerName: "Industry", 
      sortable: true, 
      filter: true,
      width: 160
    },
    { 
      field: "servicesCount", 
      headerName: "Services Count", 
      sortable: true, 
      filter: true,
      width: 140
    },
    { 
      field: "serviceNames", 
      headerName: "Services", 
      sortable: true, 
      filter: true,
      width: 200,
      cellRenderer: (params) => {
        const value = params.value;
        if (value === 'NA' || !value) return 'NA';
        return (
          <div title={value} className="truncate">
            {value}
          </div>
        );
      }
    },
    { 
      field: "status", 
      headerName: "Status", 
      sortable: true, 
      filter: true,
      width: 100,
      cellRenderer: (params) => {
        const status = params.value;
        const isActive = status === 'Active';
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            isActive 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {status}
          </span>
        );
      }
    },
    { 
      field: "createdAt", 
      headerName: "Created Date", 
      sortable: true, 
      filter: true,
      width: 130
    },
    {
      headerName: "Actions",
      field: "actions",
      width: 130,
      pinned: 'right',
      cellRenderer: (params) => (
        <div className="flex gap-2 justify-center items-center h-full">
          <Button 
            className="!border !text-[#00806A] !border-[#00806A] !bg-[#E8FFFB] hover:!bg-[#00806A] font-medium hover:!text-white text-xs px-3 py-1 rounded-md"
            onClick={() => handleEdit(params.data)}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ]);

  // Action handlers
  const handleEdit = (rowData) => {
    console.log('Edit company:', rowData);
    // Implement edit functionality
  };

  const handleView = (rowData) => {
    console.log('View company:', rowData);
    // Implement view functionality
  };

  const handleDelete = (rowData) => {
    console.log('Delete company:', rowData);
    // Implement delete functionality
  };

  return (
    <div className={`${poppins.className} antialiased`}>
      <div className="pt-6 lg:pt-0 mb-6">
        <h3 className="text-[22px] text-black font-medium pb-1">Manage Bot</h3>
        <p className="text-[13px] text-[#747577]">
          Easily manage and track all your companies in one place.
        </p>
      </div>

      {/* Loading state */}
      {!rowData.length && (
        <div className="flex justify-center items-center h-64">
          <div className="text-[#747577]">Loading companies...</div>
        </div>
      )}

      {/* AG Grid Table */}
      {rowData.length > 0 && (
        <div className="ag-theme-alpine custom-aggrid relative z-[0]" style={{ height: 500, width: "100%" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
            rowHeight={55}
            headerHeight={45}
            footerHeight={10}
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
              minWidth: 100
            }}
            suppressCellFocus={true}
            rowSelection="single"
          />
        </div>
      )}

      {/* No data state */}
      {botList && botList.data && botList.data.length === 0 && (
        <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-[#747577] text-lg mb-2">No companies found</div>
            <div className="text-[#9CA3AF] text-sm">Start by creating your first company</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
