import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as XLSXStyle from 'xlsx-style';

import { Injectable } from '@angular/core';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {
    
  constructor() { }
 header:any[]=['A1','B1','C1','D1','E1','F1','G1','H1','I1','J1'];

   public exportAsExcelFile(json: any[], excelFileName: string): void {
      const wscols = [
     
      {wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150},
      {wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150},
      {wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150},
      {wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150},{wpx: 150}
    ];
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log(worksheet);
    for(let i=0;i<this.header.length;i++){
       this.wrapAndCenterCell(worksheet[this.header[i]]);
       worksheet['!cols'] = wscols;
    }
   
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    // Use XLSXStyle instead of XLSX write function which property writes cell styles.
    const excelBuffer: any = XLSXStyle.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private wrapAndCenterCell(cell: XLSX.CellObject) {
    const wrapAndCenterCellStyle = {  fill: {fgColor:{rgb: "4596E2"} },
      font:{name:'Calibri',s :'12',bold:true},border:{
        top:{ style: 'thick', color: { rgb: "000000" } },
      bottom:{ style: 'thick', color: { rgb: "000000" }},
    left:{ style: 'thick', color: { rgb: "000000" } },
  right:{ style: 'thick', color: { rgb: "000000" } }
      }
 };
 console.log(wrapAndCenterCellStyle);
    this.setCellStyle(cell, wrapAndCenterCellStyle);
  }

  private setCellStyle(cell: XLSX.CellObject, style: {}) {
    cell.s = style;
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
