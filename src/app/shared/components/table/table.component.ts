import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from '../../models/TableColumn.model';
import { TableActionColumn } from '../../models/TableActionColumn.model';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit{

  public tableDataSource = new MatTableDataSource<any[]>([]);
  public displayedColumns!: string[];
  public actionColumnName?: string;

  @Input() tableColumns!: TableColumn[];
  @Input() actionColumn?: TableActionColumn;

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  @Output() leftButtonEmitter: EventEmitter<any> = new EventEmitter();
  @Output() rightButtonEmitter: EventEmitter<any> = new EventEmitter();

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data);
  }

  leftButtonAction(element: any){
    this.leftButtonEmitter.emit(element);  
  }

  rightButtonAction(element: any){
    this.rightButtonEmitter.emit(element);
  }

  ngOnInit() {
    // set table columns
    this.displayedColumns = this.tableColumns.map(e => e.columnDef);

    // Add operation column
    if(this.actionColumn){
      this.displayedColumns = this.displayedColumns.concat('operation');
      this.actionColumnName = this.actionColumn.header;
    }
  }

}
