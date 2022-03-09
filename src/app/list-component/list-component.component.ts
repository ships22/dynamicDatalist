import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
})
export class ListComponentComponent implements OnInit {
  constructor() {}
  input;
  dataList;
  aList = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 3, name: 'Cc' },
    { id: 3, name: 'Ccc' },
    { id: 3, name: 'Cqcc' },
  ];
  ngOnInit(): void {
    this.input = document.getElementById('nameList');
    this.dataList = document.getElementById('list');
    console.log(this.input);
    this.fillDataList();
  }
  getList(e) {
    console.log(e.srcElement);
    e.srcElement.setAttribute('list', 'list');
  }

  fillDataList() {
    let dListContainer = document.getElementById('my-text-box'),
      i = 0,
      len = this.aList.length,
      dl = document.createElement('datalist');

    dl.id = 'list';
    for (; i < len; i += 1) {
      let option = document.createElement('option');
      option.value = this.aList[i].name;
      dl.appendChild(option);
    }
    document.body.appendChild(dl);
    // dListContainer.appendChild(dl);
  }
}
