let query;
const tableName = 'rcclr2';
const fields = ['*'];
const whereClause = {type: { operator: '=', value: "Sheriff's Deed"}};
const orderBy = {field: 'Last_Name_Grantee_1', direction: 'ASC'};

function sqlBuild(){
    query = `
        SELECT ${fields.join(', ')}
        FROM ${tableName}
        WHERE ${Object.keys(whereClause).map(key => `${key} ${whereClause[key].operator} '${whereClause[key].value}'`).join(' AND ')}
        ORDER BY ${orderBy.field} ${orderBy.direction}
    `;
    console.log(query);
}
sqlBuild()