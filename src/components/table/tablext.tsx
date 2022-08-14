import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  AlertTitle,
  Alert,
  TableCaption,
} from '@chakra-ui/react'
import { cloneDeep, get, set } from 'lodash'
import { FC } from 'react'

export interface TableEnhanceProps {
  columns: {
    title: string
    key: string
    dataIndex: string
    isNumeric?: boolean
    customRender?: (record: any) => string
  }[]
  dataSources: { [key: string]: any }[] | undefined
}

export const TableEnhance: FC<TableEnhanceProps> = ({ columns, dataSources }) => {

  const columnsKey = columns.map(col => col.key)

  const parseSource: typeof dataSources = dataSources && Array.isArray(dataSources) ?
    dataSources.map((row, idx) => {
      // set col dataIndex value
      let tempRow: typeof row = cloneDeep(row)

      for (let col of columns) {
        if (col.dataIndex.indexOf('.') !== -1) {
          set(tempRow, col.key, get(row, col.dataIndex))
        }
        if (col.customRender && row?.[col.key]) {
          set(tempRow, col.key, col.customRender(row[col.key]))
        }
      }
      return tempRow
    })
    : []

  return <TableContainer>
    <Table colorScheme='blackAlpha'>
      <Thead>
        <Tr>
          { columns.map((col) => {
            return <Th key={col.key} isNumeric={col.isNumeric}>
              {col.title}
            </Th>
          })}
        </Tr>
      </Thead>
      <Tbody>
        { parseSource.length ? <>
          {
            parseSource.map((row, idx) => {
              return <Tr key={'row' + idx}>
                {
                  columnsKey.map(colName => {
                    return <Td key={colName}>{row[colName]}</Td>
                  })
                }
              </Tr>
            })
          }
        </> : <></>}
      </Tbody>
      <TableCaption>
        {
          parseSource.length === 0 && 
            <Alert>
              <AlertTitle>Empty data.</AlertTitle>
            </Alert>
        }
      </TableCaption>
    </Table>
  </TableContainer>
}
