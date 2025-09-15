查找字段相同的个数函数，相同的计数器+1，如果没找到相同则返回-1

```JavaScript
function getRowspan (row, column, rowIndex) {
    let rowspan = 1
    if (rowIndex > 0 && row[column.property] === tableData.value[rowIndex - 1][column.property]) {
        rowspan = -1
    }
    for (let i = rowIndex + 1; i < tableData.value.length; i++) {
        if (row[column.property] === tableData.value[i][column.property]) {
            rowspan++
        } else {
            break
        }
    }
    return rowspan
}
```




合并函数 `:span-method="mergeRows"`

```JavaScript
function mergeRows ({ row, column, rowIndex, columnIndex }) {
    // 需要合并的字段在第1列，下标为0，所以对第1列进行判断
    if (columnIndex === 0) {
        const rowspan = getRowspan(row, column, rowIndex)
        if (rowspan > 0) {
            return {
                rowspan,
                colspan: 1
            }
        } else {
            return {
                rowspan: 0,
                colspan: 0
            }
        }
    }
}
```


