import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    const express = require('express');
    const mysql = require('mysql');
    const app = express();
    const connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : 'suutikolla',
      database : 'POS'
    });
  }
}
