'use client';
import * as React from 'react';
import { Crud } from '@toolpad/core/Crud';
import { useParams } from 'next/navigation';
import { employeesDataSource, Employee, employeesCache } from '@/app/mocks/employees';
import CustomDataGrid from '@/app/components/CustomDataGrid';

export default function EmployeesCrudPage() {
  const params = useParams();
  const [employeeId] = params.segments ?? [];

  return (
    <Crud<Employee>
      dataSource={employeesDataSource}
      dataSourceCache={employeesCache}
      rootPath="/dashboard/employees"
      initialPageSize={20}
      defaultValues={{ title: 'New Employee' }}
      pageTitles={{
        show: `Employee ${employeeId}`,
        create: 'New Employee',
        edit: `Employee ${employeeId} - Edit`,
      }}
      slots={{
        list: {
          dataGrid: CustomDataGrid,
        },
      }}
    />
  );
}
