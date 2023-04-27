let query;
const tableName = 'rcclr2';
const fields = ['DATE','TYPE','Last_Name_Grantor_1','First_Name_Grantor_1','Last_Name_Grantor_2','First_Name_Grantor_2','Last_Name_Grantor_3','First_Name_Grantor_3','Last_Name_Grantee_1','First_Name_Grantee_1','Last_Name_Grantee_2','First_Name_Grantee_2','SEC','TSP','RGE'];
const whereClause = {type: { operator: '=', value: "Sheriff's Deed"}};
const orderBy = {field: 'Last_Name_Grantee_1', direction: 'ASC'};

function sqlBuild(){
    query = `
        SELECT ${fields.join(', ')}
        FROM ${tableName}
        WHERE ${Object.keys(whereClause).map(key => `${key} ${whereClause[key].operator} '${whereClause[key].value}'`).join(' AND ')}
        ORDER BY ${orderBy.field} ${orderBy.direction}
    `;
}
sqlBuild()